# PDF-Analytics
Tracking user interaction within a PDF

We are using PDF.js a JavaScript library to parse PDF files using the HTML5 Canvas. The browser output is HTML, not a PDF. That makes tracking easy as cake.

## Requirements
* [Git](https://git-scm.com/downloads)
* [PDF.js](https://github.com/mozilla/pdf.js/) by mozilla
* [Google Analytics](https://analytics.google.com/)

## Interactions

#### pagechange (user scrolls to another page)

#### click
* download
* print
* zoomIn
* zoomOut
* presentationMode
* viewFind (user searches)

## How to track

Get [the JavaScript tracking snippet](https://developers.google.com/analytics/devguides/collection/analyticsjs/) and git clone [PDF.js](https://github.com/mozilla/pdf.js/):

    $ git clone git://github.com/mozilla/pdf.js.git
    $ cd pdf.js

