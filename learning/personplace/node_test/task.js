//HardMan("jack")
// > I am jack

// HardMan("jack").rest(10).learn("computer")
// > I am jack
// 等待10秒
// > Start learning after 10 seconds
// > Learning computer

// HardMan("jack").restFirst(5).learn("chinese")
// 等待5秒
// > Start learning after 5 seconds
// > I am jack
// > Learning chinese



let HardMan = function (name) {

    let firstRestTime = false, restTime = 0, theThing = '';
    function C(e) { console.log(e); }
    
    setTimeout(() => {
        console.log('===========>')
        if (firstRestTime === 0 || firstRestTime) {
            console.log('===========>1')
            setTimeout(() => {
                C('Start learning after ' + firstRestTime + ' seconds');
                C('I am ' + name);
                C('Learning ' + theThing);
            }, firstRestTime * 1000);
        } else if (restTime === 0 || restTime) {
            console.log('===========>2')
            C('I am ' + name);
            setTimeout(() => {
                C('Start learning after ' + restTime + ' seconds');
                C('Learning ' + theThing);
            }, restTime * 1000);
        } else {
            console.log('===========>3')
            C('I am ' + name);
        }
    }, 0);


    return {
        rest(time) {
            console.log('rest')
            restTime = time;
            return this;
        },
        learn(thing) {
            console.log('learn')
            theThing = thing;
            return this;
        },
        restFirst(time) {
            firstRestTime = time;
            return this;
        }
    }
}

// HardMan("jack").rest(10).learn("computer")

const start = Date.now()
console.log('start', start)

setTimeout((()=>{
    console.log('setTimeout')
    console.log('2', Date.now())
    return ()=>{
        console.log('4', Date.now())
        console.log('setTimeout end')
    }
})(), 6000)

for(;;){
    if(Date.now()-start>5000)  break
}
console.log('3', Date.now())