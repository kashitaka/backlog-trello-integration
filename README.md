# Backlog - trello Integration BOT

Make new [Trello](https://trello.com/) card when new issue created in [Backlog](https://backlog.com/). This app can be hosted in [Heroku](https://id.heroku.com/)

## Setting env variables


### Backlog setting

* `BACKLOG_TEAM_DOMAIN` - your backlog domain

if your backlog url is `https://hogefuga.backlog.com/`, this parameter is `hogefuga.backlog.com`

### Trello setting

* `TRELLO_API_KEY` - your API key
* `TRELLO_API_TOKEN` - your token
* `TRELLO_LIST_ID` - list id in which new issue cards should be created.

You can get API key & token at here : https://trello.com/app-key

`TRELLO_LIST_ID` is not visible in trello GUI. you can get it via Trello Board API : https://developers.trello.com/reference#boardsboardid-1


## Installation

### Heroku

1. Create Nodejs app in Heroku 
2. Clone this repository
3. `git push heroku master`
4. set environmet variables above.

### Backlog

config webhook https://backlog.com/ja/help/adminsguide/webhook-setting/userguide2493/

webhook URL is `https://[your-heroku-app-FQDN]/backlog/trello`

#### ※host in your server

* Node.js version: `v6.10.3`
* `npm install`
* `npm start`