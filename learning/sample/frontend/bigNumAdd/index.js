const num1 = '13132132132199'
const num2 = '9'

const tmp1 = num1.split('').reverse()
const tmp2 = num2.split('').reverse()

const result = []
const format = val => {
  if( typeof val === 'number') return val
  if(!isNaN(Number(val))) return Number(val)
  return 0
}

let temp = 0
for (let i = 0; i <= Math.max(tmp1.length, tmp2.length); i++) {
  const addTmp = format(tmp1[i]) + format(tmp2[i]) + temp
  result[i] = addTmp % 10
  temp = addTmp > 9 ? 1 : 0
}

result.reverse()

const resultNum = result[0] > 0
? result.join('')
: result.join('').slice(1)

console.log('result', resultNum)