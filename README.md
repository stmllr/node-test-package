# node test package

Runs a basic websocket service.

## Installation

```
git clone https://github.com/stmllr/node-test-package.git
npm install
```

## Start websocket service

```
# Listen on 127.0.0.1:3001
npm start

# If you like to set custom host/port, use:
HOST="127.0.0.1" PORT="12345" npm start
```

## Execute tests

```
npm test
```

## Docker

### Installation

```
git clone https://github.com/stmllr/node-test-package.git
docker run -it --rm --name node-test-app -v "$PWD":/usr/src/app -w /usr/src/app node:6-alpine yarn install
```

### Start websocket service

```
docker run -it --rm --name node-test-app -v "$PWD":/usr/src/app -w /usr/src/app node:6-alpine yarn start
```

### Execute tests

```
docker run -it --rm --name node-test-app -v "$PWD":/usr/src/app -w /usr/src/app node:6-alpine yarn test
```

