package main

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"net"
	"os"
	"strconv"
	"time"
)

const (
	MAX_PG = 2000
)

type ICMP struct {
	Type        uint8
	Code        uint8
	Checksum    uint16
	Identifier  uint16
	SequenceNum uint16
}

var (
	originBytes []byte
)

func init() {
	originBytes = make([]byte, MAX_PG)
}

func CheckSum(data []byte) (rt uint16) {
	var (
		sum    uint32
		length int = len(data)
		index  int
	)
	for length > 1 {
		sum += uint32(data[index])<<8 + uint32(data[index+1])
		index += 2
		length -= 2
	}
	if length > 0 {
		sum += uint32(data[index]) << 8
	}
	rt = uint16(sum) + uint16(sum>>16)

	return ^rt
}

func Ping(domain string, PS, Count int) {
	var (
		icmp                      ICMP
		laddr                     = net.IPAddr{IP: net.ParseIP("0.0.0.0")}
		raddr, _                  = net.ResolveIPAddr("ip", domain)
		max_lan, min_lan, avg_lan float64
	)

	conn, err := net.DialIP("ip4:icmp", &laddr, raddr)

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	defer conn.Close()
	icmp.Type = 8
	icmp.Code = 0
	icmp.Checksum = 0
	icmp.Identifier = 0
	icmp.SequenceNum = 0

	var buffer bytes.Buffer
	binary.Write(&buffer, binary.BigEndian, icmp)
	binary.Write(&buffer, binary.BigEndian, originBytes[0:PS])
	b := buffer.Bytes()
	binary.BigEndian.PutUint16(b[2:], CheckSum(b))
	fmt.Printf("\n正在 Ping %s 具有 %d(%d) 字节的数据:\n", raddr.String(), PS,PS+28)
	recv := make([]byte, 1024)
	ret_list := []float64{}
	dropPack := 0.0
	max_lan = 3000.0
	min_lan = 0.0
	avg_lan = 0.0
	for i := Count; i > 0; i-- {
		if _, err := conn.Write(buffer.Bytes()); err != nil {
			dropPack++
			time.Sleep(time.Second)
			continue
		}
		t_start := time.Now()
		conn.SetReadDeadline((time.Now().Add(time.Second * 3)))
		_, err := conn.Read(recv)
		if err != nil {
			dropPack++
			time.Sleep(time.Second)
			continue
		}
		t_end := time.Now()
		dur := float64(t_end.Sub(t_start).Nanoseconds()) / 1e6
		ret_list = append(ret_list, dur)
		if dur < max_lan {
			max_lan = dur
		}
		if dur > min_lan {
			min_lan = dur
		}
		fmt.Printf("来自 %s 的回复: 时间 = %.3fms\n", raddr.String(), dur)
		time.Sleep(time.Second)
	}
	fmt.Printf("丢包率: %.2f%%\n", dropPack/float64(Count))
	if len(ret_list) == 0 {
		avg_lan = 3000.0
	} else {
		sum := 0.0
		for _, n := range ret_list {
			sum += n
		}
		avg_lan = sum / float64(len(ret_list))
	}
	fmt.Printf("rtt min/avg/max = %.3fms/%.3fms/%.3fms\n", min_lan, avg_lan, max_lan)

}

func main() {
	if len(os.Args) < 3 {
		fmt.Printf("Param domain |data package Sizeof|trace times\n Ex: ./Ping www.so.com 100 4\n")
		os.Exit(1)
	}
	fmt.Println(os.Args[3])
	PS, err := strconv.Atoi(os.Args[2])
	if err != nil {
		fmt.Println("you need input correct PackageSizeof(complete int)")
		os.Exit(1)
	}
	Count, err := strconv.Atoi(os.Args[3])
	if err != nil {
		fmt.Println("you need input correct Counts")
		os.Exit(1)
	}
	Ping(os.Args[1], PS, Count)
}
