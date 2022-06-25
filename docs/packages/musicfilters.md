---
sidebar_position: 1
---

# @OrangyBot/MusicFilters

:::tip Important

@orangybot/musicfilters is the only MusicFilters OFFICIAL package on [npm](https://npmjs.com) and [yarn](https://)!

:::

:::danger Watch out

No support is being provided for any unofficial package!

:::

## How to install
### Npm
```bash
npm i @orangybot/musicfilters
```
### Yarn
```bash
yarn add @orangybot/musicfilters
```
## Available filters

:::danger Filter names

The filters are case sensitive!

:::

- BassBoost
- Karaoke
- Lofi
- Smooth
- Speed
- Unstable
- Weak

## How to use

@OrangyBot/MusicFilters is a music filters package for Erela.js.


### Setup
#### ES6

```
import { Manager } from "erela.js";
import MusicFilters from "@orangybot/musicfilters";

//Create the erela.js manager
const ErelaManager = new Manager({
    nodes //your nodes,
    plugins: [new MusicFilters()],
    send: (id, payload) => {
        //your send code
    }
})
```

#### CommonJS

```
const { Manager } = require("erela.js");
const MusicFilters = require("@orangybot/musicfilters");

//Create the erela.js manager
const ErelaManager = new Manager({
    nodes //your nodes,
    plugins: [new MusicFilters()],
    send: (id, payload) => {
        //your send code
    }
})
```

### Enabling / Disabling filters

```
//Get the current guild player object
const GuildPlayer = ErelaManager.get(your-guild-id-here);

//Enable the Speed filter
GuildPlayer.EnableFilter("Speed");
//Disable the Speed filter
GuildPlayer.DisableFilter("Speed");
```

- You can find this project's [source code](https://github.com/OrangyBot/MusicFilters) on GitHub!