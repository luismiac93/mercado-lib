#Full Stack Dev test solution by `Luis Miguel Aza` to MercadoLib

The goal of this project is to create a backend that consumes information from an API and has three endpoints that can respond to requests made from the frontend only with the required data, the frontend has a search screen, search results and search detail, each one with a route that works independently of each other.


##Stack

- Nodejs & NPM
- Express.js / Axios
- React / HTML / SASS

##Folder Structure

There are two parts for the web app:

The server

`cd /mercado-lib-backend`

`npm install`

- add file .env and environment variable

`PORT=4000`

This is the node Server app to start :

`node server.js`

Then run the client app

`cd /mercado-lib-frontend`

`npm install`

- validate that the port of the baseUrl constant in the `src/helper/fetch.js` is the one configured on the backend

`default is 4001 or .env file environment PORT`

That is the client React Application to start :

`npm strat`