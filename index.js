const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const exchangeBase = readlineSync.question("Informe a ação que deseja consultar: ") || 'mglu3';
  const url = `https://www.google.com/search?q=${exchangeBase}&oq=${exchangeBase}&aqs=chrome.1.69i57j0i433l3j0l4.2260j0j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  

  const result = await page.evaluate(() => {
    return (document.querySelector('span.IsqQVc.NprOob.XcVN5d')? document.querySelector('span.IsqQVc.NprOob.XcVN5d').innerText : document.querySelector('IsqQVc.NprOob.XcVN5d.fw-price-nc').innerText ) ;
  });

console.log(`O valor da ${exchangeBase} é de R$ ${result}`)

  await browser.close();
}

robo();