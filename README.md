# NODE JS - JWT REFRESH TOKEN

Implementation Refresh Token Using [Json Web Token](https://jwt.io/)
![Screenshot](https://user-images.githubusercontent.com/30786664/148716578-23f8401f-62b9-4602-b091-18dd5cb4587c.png)

## Installation 🚀

Use the [git](https://git-scm.com/) to clone this repository.

```bash
git clone https://github.com/du-disk/jwt-refresh-token.git
```
Go to the project directory
```bash
cd jwt-refresh-token
```
Install dependencies
```bash
yarn install
```
with npm
```bash
npm install
```

## Setup .env file
Rename `.env-example to` `.env` and set variable as your environment

```ini
NODE_PORT=3000
NODE_TOKEN_LIFE=9000
NODE_REFRESH_TOKEN_LIFE=86400
NODE_SECRET_KEY=secret-key
NODE_REFRESH_SECRET_KEY=refresh-secret-key
```

## Available Scripts
To run app as development, run the following command
```bash
yarn start
```
Test 
```bash
yarn test
```


## License
[MIT](https://choosealicense.com/licenses/mit/)