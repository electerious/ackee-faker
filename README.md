<div align="center">

<img src="https://s.electerious.com/images/ackee-faker/icon.png" title="ackee-faker" alt="ackee-faker logo" width="128">

# ackee-faker

[![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYKBESW577YWE)

A script that runs continuously thanks to GitHub Actions and fills the Ackee demo with data.

<br/>

![Ackee faker example](https://s.electerious.com/images/ackee-faker/readme.png)

</div>

## 🤗 Usage

### 1. Install dependencies

ackee-faker dependents on …

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [npm](https://www.npmjs.com)

Make sure to install and update all dependencies before you continue. The installation instructions for the individual dependencies can be found on the linked websites.

### 2. Create the configuration

Pull the project and configure ackee-faker using environment variables or create a [`.env` file](https://www.npmjs.com/package/dotenv) in the root of the project to store all variables in one file.

```
ACKEE_ENDPOINT=https://ackee.example.com/api
ACKEE_TOKEN=5c5411b0-ef80-425b-8e80-e8c4a76fcad6
```

### 3. Install ackee-faker

Install all required dependencies.

```sh
npm install
```

### 4. Run ackee-faker

ackee-faker will fetch all domains and events it can find on the installation. It will sometimes skip the creation of new records and events to replicate a real usage. The script might run for up to 15 minutes depending on a random record update delay.

```sh
npm start
```

## Miscellaneous

### Donate

I am working hard on continuously developing and maintaining Ackee. Please consider making a donation to keep the project going strong and me motivated.

- [Become a GitHub sponsor](https://github.com/sponsors/electerious)
- [Donate via PayPal](https://paypal.me/electerious)
- [Buy me a coffee](https://www.buymeacoffee.com/electerious)

### Links

- [Follow Ackee on Twitter](https://twitter.com/getackee)
- [Vote for Ackee on ProductHunt](https://www.producthunt.com/posts/ackee)
