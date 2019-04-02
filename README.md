# Prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Add Configs in `.eslintrc.js`

```js
{
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  }
}
```

# VSCode

## Recommended settings

```json
{
  "editor.formatOnSave": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true
}
```

## Recommended plugins

- eslint
- prettier
- es6-string-html

# Setup Mock server

Copy inventory\* files into `dev` folder
Add these lines into `dev/mock-server-dev.js`
Top of the file:

```js
const bodyParser = require('body-parser');
const inventoryDataSource = require('./inventory.data-source');
```

Inside `module.exports()` function

```js
app.use(bodyParser.json());
inventoryDataSource(app);
```
