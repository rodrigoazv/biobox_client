const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("addCart", async () => {
  await page.goto("http://localhost:3000/");
  await qawolf.scroll(page, "html", { x: 0, y: 697 });
  await page.click('[data-cy="increment-button"]');
  await page.click("text=ADICIONAR");
  await page.click('[href="/cart"]');
  await page.click('text="R$ 0.00"');
  // 🐺 create code here
});