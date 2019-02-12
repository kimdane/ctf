# ![Juice Shop Logo](https://raw.githubusercontent.com/bkimminich/juice-shop/develop/frontend/src/assets/public/images/JuiceShop_Logo_100px.png) OWASP Juice Shop [![OWASP Flagship](https://img.shields.io/badge/owasp-flagship%20project-48A646.svg)](https://www.owasp.org/index.php/OWASP_Project_Inventory#tab=Flagship_Projects) [![GitHub release](https://img.shields.io/github/release/bkimminich/juice-shop.svg)](https://github.com/bkimminich/juice-shop/releases/latest) [![Twitter Follow](https://img.shields.io/twitter/follow/owasp_juiceshop.svg?style=social&label=Follow)](https://twitter.com/owasp_juiceshop)

[![Build Status](https://travis-ci.org/bkimminich/juice-shop.svg?branch=master)](https://travis-ci.org/bkimminich/juice-shop)
[![Build status](https://ci.appveyor.com/api/projects/status/903c6mnns4t7p6fa/branch/master?svg=true)](https://ci.appveyor.com/project/bkimminich/juice-shop/branch/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2a7af720d39b08a09904/test_coverage)](https://codeclimate.com/github/bkimminich/juice-shop/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a7af720d39b08a09904/maintainability)](https://codeclimate.com/github/bkimminich/juice-shop/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/bkimminich/juice-shop-ctf.svg)](https://greenkeeper.io/)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/223/badge)](https://bestpractices.coreinfrastructure.org/projects/223)
![GitHub stars](https://img.shields.io/github/stars/bkimminich/juice-shop.svg?label=GitHub%20%E2%98%85&style=flat)

> [The most trustworthy online shop out there.](https://twitter.com/dschadow/status/706781693504589824)
> ([@dschadow](https://github.com/dschadow)) —
> [The best juice shop on the whole internet!](https://twitter.com/shehackspurple/status/907335357775085568)
> ([@shehackspurple](https://twitter.com/shehackspurple)) —
> [Actually the most bug-free vulnerable application in existence!](https://youtu.be/TXAztSpYpvE?t=26m35s)
> ([@vanderaj](https://twitter.com/vanderaj)) —
> [First you 😂😂then you 😢](https://twitter.com/kramse/status/1073168529405472768)
> ([@kramse](https://twitter.com/kramse))

OWASP Juice Shop is probably the most modern and sophisticated insecure
web application! It can be used in security trainings, awareness demos,
CTFs and as a guinea pig for security tools! Juice Shop encompasses
vulnerabilities from the entire
[OWASP Top Ten](https://www.owasp.org/index.php/OWASP_Top_Ten) along
with many other security flaws found in real-world applications!

![Juice Shop Screenshot Slideshow](screenshots/slideshow.gif)

For a detailed introduction, full list of features and architecture
overview please visit the official project page:
<http://owasp-juice.shop>

## Setup

### From Sources

1. Install [node.js](#nodejs-version-compatibility)
2. Run `git clone https://github.com/kimdane/ctf.git` (or
   clone [your own fork](https://github.com/kimdane/ctf/fork)
   of the repository)
3. Go into the cloned folder with `cd ctf`
4. Run `npm install` (only has to be done before first start or when you
   change the source code)
5. Run `npm start`
6. Browse to <http://localhost:3000>

### Docker Container [![Docker Automated build](https://img.shields.io/docker/automated/bkimminich/juice-shop.svg)](https://registry.hub.docker.com/u/kimdane/ctf/) [![Docker Pulls](https://img.shields.io/docker/pulls/bkimminich/juice-shop.svg)](https://registry.hub.docker.com/u/kimdane/ctf/) ![Docker Stars](https://img.shields.io/docker/stars/bkimminich/juice-shop.svg) [![](https://images.microbadger.com/badges/image/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop "Get your own image badge on microbadger.com") [![](https://images.microbadger.com/badges/version/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop "Get your own version badge on microbadger.com")

1. Install [Docker](https://www.docker.com)
2. Run `docker pull kimdane/ctf`
3. Run `docker run --rm -p 3000:3000 kimdane/ctf`
4. Browse to <http://localhost:3000> (on macOS and Windows browse to
   <http://192.168.99.100:3000> if you are using docker-machine instead
   of the native docker installation)

> If you want to run Juice Shop on a Raspberry Pi 3, there is an
> unofficial Docker image available at
> <https://hub.docker.com/r/arclight/juice-shop_arm> which is based on
> `resin/rpi-raspbian` and maintained by
> [@battletux](https://github.com/battletux).

### Vagrant

1. Install [Vagrant](https://www.vagrantup.com/downloads.html) and
   [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. Run `git clone https://github.com/kimdane/ctf.git` (or
   clone [your own fork](https://github.com/kimdane/ctf/fork)
   of the repository)
3. Run `cd vagrant && vagrant up`
4. Browse to [192.168.33.10:3000](http://192.168.33.10:3000)

> There is a very convenient Vagrant box available at
> <https://app.vagrantup.com/commjoen/boxes/trainingbox> (:microscope:)
> from [@commjoen](https://github.com/commjoen) which comes with latest
> Docker containers of the OWASP Juice Shop,
> [OWASP WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
> and other vulnerable web applications as well as pentesting tools like
> [OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project).


## Customization

Via a YAML configuration file in `/config`, the OWASP Juice Shop can be
customized in its content and look & feel.

For detailed instructions and examples please refer to
[our _Customization_ documentation](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/customization.html).

## CTF-Extension

If you want to run OWASP Juice Shop as a Capture-The-Flag event, we
recommend you set it up along with a [CTFd](https://ctfd.io) server
conveniently using the official
[`juice-shop-ctf-cli`](https://www.npmjs.com/package/juice-shop-ctf-cli)
tool.

For step-by-step instructions and examples please refer to
[the _Hosting a CTF event_ chapter](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content/part1/ctf.html)
of our companion guide ebook.


## Additional Documentation

### Pwning OWASP Juice Shop [![](https://img.shields.io/leanpub/book/pages/juice-shop.svg)](https://leanpub.com/juice-shop) [![](https://img.shields.io/leanpub/book/sold/juice-shop.svg)](https://leanpub.com/juice-shop) [![Write Goodreads Review](https://img.shields.io/badge/goodreads-write%20review-382110.svg)](https://www.goodreads.com/review/edit/33834308)

This is the official companion guide to the OWASP Juice Shop. It will
give you a complete overview of the vulnerabilities found in the
application including hints how to spot and exploit them. In the
appendix you will even find complete step-by-step solutions to every
challenge. [Pwning OWASP Juice Shop](https://leanpub.com/juice-shop) is
published with
[GitBook](https://www.gitbook.com/book/bkimminich/pwning-owasp-juice-shop)
under
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
and is available **for free** in PDF, Kindle and ePub format. You can
also
[browse the full content online](https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content)!

[![Pwning OWASP Juice Shop Cover](https://raw.githubusercontent.com/bkimminich/pwning-juice-shop/master/cover_small.jpg)](https://leanpub.com/juice-shop)

### Slide Decks

* [Introduction Slide Deck](http://bkimminich.github.io/juice-shop) in
  HTML5
* [PDF of the Intro Slide Deck](http://de.slideshare.net/BjrnKimminich/juice-shop-an-intentionally-insecure-javascript-web-application)
  on Slideshare

## Troubleshooting [![Gitter](http://img.shields.io/badge/gitter-join%20chat-1dce73.svg)](https://gitter.im/bkimminich/juice-shop)

If you need help with the application setup please check the
[TROUBLESHOOTING.md](TROUBLESHOOTING.md) or post your specific problem
or question in the
[official Gitter Chat](https://gitter.im/bkimminich/juice-shop).


## Contributors

The OWASP Juice Shop core project team are:

- [Björn Kimminich](https://github.com/bkimminich) aka `bkimminich`
  ([Project Leader](https://www.owasp.org/index.php/Projects/Project_Leader_Responsibilities))
- [Jannik Hollenbach](https://github.com/J12934) aka `J12934`
- [Timo Pagel](https://github.com/wurstbrot) aka `wurstbrot`

For a list of all contributors to the OWASP Juice Shop please visit our
[HALL_OF_FAME.md](HALL_OF_FAME.md).

## Licensing [![license](https://img.shields.io/github/license/bkimminich/juice-shop.svg)](LICENSE)

This program is free software: you can redistribute it and/or modify it
under the terms of the [MIT license](LICENSE). OWASP Juice Shop and any
contributions are Copyright © by Bjoern Kimminich 2014-2019.

![Juice Shop Logo](https://raw.githubusercontent.com/bkimminich/juice-shop/develop/frontend/src/assets/public/images/JuiceShop_Logo_400px.png)
