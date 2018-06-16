# Backlog - Trello integration bot

This bot makes new [Trello](https://trello.com/) card when new issue created in [Backlog](https://backlog.com/). It can be hosted in [Heroku](https://id.heroku.com/).

## Installation

### Heroku

1. Create Nodejs app in Heroku 
2. Clone this repository into your Heroku app
3. Set environment variables below.

### Backlog

Enable webhook https://backlog.com/ja/help/adminsguide/webhook-setting/userguide2493/

webhook URL is `https://[your-heroku-app-FQDN]/backlog/trello`

### Trello

You can get API key & token at here : https://trello.com/app-key

`TRELLO_LIST_ID` is not visible in Trello GUI. you can get it via Trello Board API : https://developers.trello.com/reference#boardsboardid-1

## Environment variables

### Backlog Configuration

* `BACKLOG_TEAM_DOMAIN` - your Backlog domain

if your Backlog url is `https://hogefuga.backlog.com/`, this parameter is `hogefuga.backlog.com`

### Trello configuration

* `TRELLO_API_KEY` - your API key
* `TRELLO_API_TOKEN` - your API token
* `TRELLO_LIST_ID` - List id in which new issue cards should be created.

---

#### How to host in your server

* Node.js version: `v6.10.3`
* `npm install`
* `npm start`