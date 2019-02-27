npm i -g @vue/cli
npm i -g @vue/cli-init
vue init webpack-simple (app_name)
(enter through prompts)
(cd into (app_name))
npm i
npm run dev

mkdir client
(put files that were made into client)
mkdir server
(cd into server)

npm init -y
npm install express
(touch server.js)

  {server.js:
    const express = require("express")
    const app = express()
  }

  {package.json:
    under "scripts":
      "start": "node server.js",
      "server:dev": "nodemon server.js",
      "seeds": "mongo < ./db/seeds.js"
    }

npm install --save-dev nodemon
npm run server:dev

(cd into client)
npm i
npm run dev

(cd into server)
npm i cors
npm i body-parser

npm i mongodb
mongod
