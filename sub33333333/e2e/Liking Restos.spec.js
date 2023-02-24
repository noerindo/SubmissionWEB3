const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restos');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
Scenario('showing empty liked restos', async ({ I }) => {
  I.see('Favorite restaurant still empty', 'h2');
  I.amOnPage('/');

  I.seeElement('.card-linkresto');
  // eslint-disable-next-line no-undef
  const firstResto = locate('.card-linkresto').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-linkresto');
  const likedRestoTitle = await I.grabTextFrom('.card-linkresto');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  // menuju page home untuk melakukan like terlebih dahulu
  I.amOnPage('/');
  I.seeElement('.card-linkresto');
  // eslint-disable-next-line no-undef
  I.click(locate('.card-linkresto').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorite
  I.amOnPage('/#/like');
  I.seeElement('.card-linkresto');
  // eslint-disable-next-line  no-undef
  const firstLikedRestaurant = locate('.card-linkresto').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.amOnPage('/#/like');
  I.seeElement('.card-linkresto');
  const likedRestaurantTitle = await I.grabTextFrom('.card-linkresto');

  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.click(locate('.card-linkresto').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage('/#/like');
  I.see('Favorite restaurant still empty', 'h2');
});
