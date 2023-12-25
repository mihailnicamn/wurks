const selector = '.clickable';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const getTimeout = () => Math.random() * 100
module.exports = async (page) => {
    console.log('started clickable job')
    let iterator = 0;
    while (iterator < 100) {
        console.log(`clickable job #${iterator}`);
      await wait(getTimeout());
      const clickable = await page.$(selector);
      if (clickable) {
          console.log('clicked');
        await page.click(selector);
      }
      iterator++;
    }
}
