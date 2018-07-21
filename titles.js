const {promisify, format} = require('util')
const getTitle = promisify(require('url-to-title'))
const schemeless = require('schemeless')
const URL = require('url')
const urls = [
  'https://destinyrescue.org',
  'https://www.youtube.com/watch?v=s716QXfApa0',
  'https://udemy.com/js-and-react-for-devs',
  'https://skillshare.com/classes/Go-go-go%21-Learn-the-basics-of-the-ancient-board-game./708167206',
  'http://shop.oreilly.com/product/0636920038627.do',
  'https://society6.com',
  'https://www.threadless.com',
  'https://tinyletter.com/cassidoo',
  'https://developer.amazon.com/alexa-skills-kit/make-money',
  'https://github.com/github/balanced-employee-ip-agreement',
  'https://www.massdrop.com/buy/massdrop-x-hasbro-scrabble-mechanical-keyboard',
  'https://www.massdrop.com/',
  'http://www.keyboard-layout-editor.com/',
  'http://www.outsideoftheclassroom.com/how-cassidy-williams-landed-tech-jobs-at-clarifai-venmo-intuit-microsoft-general-mills/',
  'https://venmo.com/cassidoo',
  'http://www.vgocseattle.com',
  'https://en.wikipedia.org/wiki/Grace_Hopper_Celebration_of_Women_in_Computing',
  'https://www.theverge.com/2018/3/5/17071792/broad-band-claire-evans-interview-women-internet'
]

async function main () {
  for (const url of urls) {
    const title = await getTitle(url)
    const {hostname} = URL.parse(url)
  
    if (title) {
      console.log(`- [${hostname}](${url}) - ${title}`)      
    } else {
      console.log(`- [${hostname}](${url})`)      
    }
  }
}

main() 

