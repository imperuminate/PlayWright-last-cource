const {test, expect}=require("@playwright/test")
    

test.only("Valid Login", async function({page, baseURL}){

    await page.goto(baseURL)

    await page.getByPlaceholder("Username").type("Admin",{delay:200})

    await page.locator("input[name='password']").type("admin123")   // this is css selector  

    await page.locator("button[type='submit']").click()             // this is Xpath becouse it starts with two double sleshes
    
    await expect(page).toHaveURL(/dashboard/)

    await page.waitForTimeout(2000)

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)  

    await page.waitForTimeout(2000)



   
})  