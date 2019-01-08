const { get } = require('http')
const cheerio = require('cheerio')

const src = 'http://hl.anseo.cn/cal_USD_To_CNY.aspx'

get(src, response => {
  console.log('status', response.statusCode)
  let body = ''
  response.on('data', chunk => {
    body += chunk
  })
  response.on('end', () => {
    const $ = cheerio.load(body)
    const rateText = $('#result p').children()[0].next.data
    console.log(rateText)
  })
})