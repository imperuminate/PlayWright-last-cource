const {test, expect} = require('@playwright/test')

test("Verify Google title", async function({page}){
    await page.goto("https://www.google.com")
    const url = await page.url()
    console.log(url)
    const title = await page.title()
    
    await expect(page).toHaveTitle("Google")

})