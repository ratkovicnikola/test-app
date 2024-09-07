## Setup

Install `Node.js` if not already available on your machine:

https://nodejs.org/en/download/package-manager/current

Position to project directory in terminal and install node packages by running:

`npm run install`

Then execute start script by running:

`npm run start`

This will run the app on 4000 port.

Open it in the browser by going to link:

http://localhost:4000


## Test the error scenario

Initially app will work fine, while it should take couple of seconds to load the page.
To see the error in action, simply uncomment lines 26, 27 and 28 in `views/index.ejs` file.

Reload the app and see that it will break the Chrome browser by throwing `Error code: 5`.

This is working normally in other browsers like `Safari` and `Firefox`.

Operating system: MacOS Sonoma 14.4.1
Chrome version: 128.0.6613.85

## Error details

In original scenario, `Google Chrome Helper (Renderer)` process takes around 3.7GB of memory to process loaded file.
In altered scenario, this process goes to around 500MB and then `Chrome` browser breaks.

Loading a file of 100MB to input is not a common scenario for a web app, but seems like there is some strange memory issue here.
Also, this doesn't happen on any other browser.

In root folder of this app there are images `correct-state.png` and `error-state.png` that shows memory state in `Activity Monitor` app on MacOS
when these files are being loaded.