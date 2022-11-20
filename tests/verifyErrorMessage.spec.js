const { test, expect } = require('@playwright/test')

test.use({
    viewport: { width: 1536, height: 864 }
})

test("Verify Error Message", async function ({ page, baseURL }) {

    await page.goto(baseURL)

    //1536 × 763
    //1536 × 864

    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("admin  f")
    await page.locator("button[type='submit']").click()

    await page.waitForTimeout(2000)

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log('Error message is: - ' + errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage === "Invalid credentials").toBeTruthy()

})