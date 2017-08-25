# Mass Mutual Coding Exercise

## Launch The Prototype
**Local Web Server**

Head over to [NPMJS.com](https://www.npmjs.com/package/local-web-server) and follow the installation instructions to download and run a local webserver on your machine to view the coding exercise.

**MAMP**

Download [MAMP](https://www.mamp.info/en/) and follow the installation instructions to download and run a server software on your machine to view the coding exercise.

**RiotMind.nyc**

I have uploaded the source files to my blog. The prototype can be viewd by heading to [RiotMind](http://www.riotmind.nyc/MassMutual/index.html).

**GitHub**

You can view, fork and download the sourcecode by going to my [GitHub](https://github.com/AdrianSane/Mass-Mutual---Coding-Exercise) page.

## Dependancies
jQuery - for ease of use
Google Fonts - for typography
Bootstrap css - for icons

## Setup
The main page is laid out in its own html file.
Subsequent articles have been setup in their own partial pages and are dynamically loaded using jQuery and the getJSON method.
I traversed the dom using jQuery, then added the JSON data using the innerHTML method to populate the html elements on the pages.
One request is made for every article element on the home page, and every partials page makes its own request for the items needed on those pages.

