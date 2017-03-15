var frisby = require('frisby')

var URL = 'http://localhost:3000'

frisby.create('GET redirected to https://github.com/bkimminich/juice-shop when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=https://github.com/bkimminich/juice-shop', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to https://gratipay.com/juice-shop when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=https://gratipay.com/juice-shop', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to http://flattr.com/thing/3856930/bkimminichjuice-shop-on-GitHub when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=http://flattr.com/thing/3856930/bkimminichjuice-shop-on-GitHub', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to http://shop.spreadshirt.com/juiceshop when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=http://shop.spreadshirt.com/juiceshop', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to http://shop.spreadshirt.de/juiceshop when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=http://shop.spreadshirt.de/juiceshop', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to https://www.stickermule.com/user/1070702817/stickers when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=https://www.stickermule.com/user/1070702817/stickers', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET redirected to https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW when this URL is passed as "to" parameter')
  .get(URL + '/redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW', { followRedirect: false })
  .expectStatus(302)
  .toss()

frisby.create('GET error message with information leakage when calling /redirect without query parameter')
  .get(URL + '/redirect')
  .expectStatus(500)
  .expectHeaderContains('content-type', 'text/html')
  .expectBodyContains('<h1>Juice Shop (Express ~')
  .expectBodyContains('TypeError')
  .expectBodyContains('&#39;indexOf&#39; of undefined')
  .toss()

frisby.create('GET error message with information leakage when calling /redirect with unrecognized query parameter')
  .get(URL + '/redirect?x=y')
  .expectStatus(500)
  .expectHeaderContains('content-type', 'text/html')
  .expectBodyContains('<h1>Juice Shop (Express ~')
  .expectBodyContains('TypeError')
  .expectBodyContains('&#39;indexOf&#39; of undefined')
  .toss()

frisby.create('GET error message hinting at whitelist validation when calling /redirect with an unrecognized "to" target')
  .get(URL + '/redirect?to=whatever')
  .expectStatus(406)
  .expectHeaderContains('content-type', 'text/html')
  .expectBodyContains('<h1>Juice Shop (Express ~')
  .expectBodyContains('Unrecognized target URL for redirect: whatever')
  .toss()

frisby.create('GET redirected to target URL in "to" parameter when a white-listed URL is part of the query string')
  .get(URL + '/redirect?to=/score-board?satisfyIndexOf=https://github.com/bkimminich/juice-shop')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'text/html')
  .expectBodyContains('<title>OWASP Juice Shop</title>')
  .toss()