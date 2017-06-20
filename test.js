const preq = require('./index.js')

const main = async () => {
  const {body} = await preq('https://www.google.com')
  console.log(body)
}

main()
