const { Given, When, Then } = require('@wdio/cucumber-framework');

const mainPageAddress = 'https://www.newegg.com/';

Given("I am on the online shop page", async () => {
  await browser.url(mainPageAddress);
})

Given("I close the promo banner if it appears", async () => {
  try {
        const banner = await $('.modal-content');
        const closeBtn = await $('.close');
        await banner.waitForExist({timeout: 3000});
        await closeBtn.click();
  }
  catch (error) {
    console.error('Promo banner did not appear');
  }
})

When("I enter the {word} into the search bar", async (word) => {
    const searchBar = await $('input[type="search"]');
    await expect(searchBar).toBeExisting();
    await searchBar.setValue(word);
})

When("I click the search button", async () => {
  const searchBtn = await $('.ico.ico-search');
  await expect(searchBtn).toBeExisting();
  await searchBtn.click();
})

Then("I see that at least one search result", async () => {
  const result = await $('.item-cell');
  await expect(result).toBeExisting();
})

Given("I open Today Best Deals tab", async () => {
  const dealsTab = await $('#trendingBanner_735784');
  await expect(dealsTab).toBeExisting();
  await dealsTab.click();
})

When("I click the Internet shop logo", async () => {
  const shopLogo = await $('.header2021-logo');
  await expect(shopLogo).toBeExisting();
  await shopLogo.click();
})

Then("Main page is opened", async () => {
  await expect(browser).toHaveUrl(mainPageAddress);
})

