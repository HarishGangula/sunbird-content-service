# Content Service  Setup

## Pre Requirements
1. Node
2. Mongodb

## Environment Variables:
* sunbird_mongo_ip: mongo ip address
* sunbird_mongo_port: port on which mongo db is running
* ekstep_api_base_url: ekstep API base url. e.g.: https://qa.ekstep.in or https://api.ekstep.in
* ekstep_api_key: API key for the above ekstep URL
* ekstep_proxy_base_url: ekstep proxy base url. e.g.: https://qa.ekstep.in or https://community.ekstep.in

## Setup Instructions
* Clone the project.
* Run "git submodule foreach git pull origin master" to pull the latest sunbird-js-utils sub module
* Change to src folder
* Run mongod server
* Run `npm install`
* Run `node app.js`





