# synthitter-client

> Client for Synthitter API

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Description](#description)
* [Technologies](#technologies)
* [Demo](#demo)

## Prerequisites

Please make sure you have installed and served API in order to use full functionality of the service as most of the crud operations require authentication.

Please see for [API Reference](https://github.com/synthetiquely/synthitter).

## Installation

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```

## Description

Clone of Twitter Client built on [Synthitter API](https://github.com/synthetiquely/synthitter)

### Features

> Some of the features are not introduced yet. Stay tuned...

* User has an option to create a new account and to provide personal info about themselves.
* User has an option choose and update their avatar using drag and drop feature.
* User has an option select cover photo for header section.
* User has an option to tweet a new message. Plain text, @mentions and #tags are supported. Media content is not supported yet.
* User has an option to read tweets that have been created by other users.
* User has an option to search users with @mention feature or specific #tags.
* User has an option to like a tweet.

### Technologies

#### Front-end

* Vuejs
* Vuex
* Graphql (Apollo Client)

#### Back-end

* Koa
* Graphql (Apollo Server)
* MongoDB/Mongoose

## Demo

No demo available yet.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/synthetiquely/synthitter-client/blob/master/LICENSE) file for details.
