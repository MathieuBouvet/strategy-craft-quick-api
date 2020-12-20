# strategy-craft-quick-api
A quick implementation for strategy craft. WIP

## Setup guide
After cloning, don't forget to run **npm install**.

Run **npm run dev** to simply start the server.

Run **npm start** to start it with nodemon. (It is convenient when you are working on the project)

The server starts listening on port 8080 by default. Use PORT environment variable to set it to desired port.

## Features

For now, only GET routes are implemented.

For now there is not any authentication nor authorization layer. They will be added soon.

The persitence layer is implemented using a json file.

Data is seeded with two players and three bases.

After running the server once, data can be accessed in **/data/db.json**.


