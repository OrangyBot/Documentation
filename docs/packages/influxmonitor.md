---
sidebar_position: 2
---

# @OrangyBot/InfluxMonitor

:::tip Important

@orangybot/influxmonitor is the only InfluxMonitor OFFICIAL package on [npm](https://npmjs.com) and [yarn](https://)!

:::

:::danger Watch out

No support is being provided for any unofficial package!

:::

## How to install
### Npm
```bash
npm i @orangybot/influxmonitor
```
### Yarn
```bash
yarn add @orangybot/influxmonitor
```

## How to use

@OrangyBot/InfluxMonitor is a package used to monitor a Discord bot's status and then send the stats to an InfluxDB server.


### Setup

:::danger Client

Make sure to provide a valid Discord client or InfluxMonitor just won't work!

:::

#### ES6

```
import Discord from "discord.js";
import InfluxMonitor from "@orangybot/influxmonitor";

//Create the Discord client
const Client = new Discord.Client({ intents: ["GUILDS"] });

//Start the monitor
new InfluxMonitor(
    "your InfluxDB URL",
	"your InfluxDB token",
	"your InfluxDB bucket",
	"your InfluxDB org",
	"This service's name (could be anything, like your bot's name)",
	Client //Discord client object
);

//Log into Discord with a bot token
Client.login(your-discord-bot-token);
```

#### CommonJS

```
const Discord = require("discord.js");
const InfluxMonitor = require("../OrangyMonitor/Index.js");

//Create the Discord client
const Client = new Discord.Client({ intents: ["GUILDS"] });

//Start the monitor
new InfluxMonitor(
    "your InfluxDB URL",
	"your InfluxDB token",
	"your InfluxDB bucket",
	"your InfluxDB org",
	"This service's name (could be anything, like your bot's name)",
	Client //Discord client object
);

//Log into Discord with a bot token
Client.login(your-discord-bot-token);
```

- You can find this project's [source code](https://github.com/OrangyBot/InfluxMonitor) on GitHub!