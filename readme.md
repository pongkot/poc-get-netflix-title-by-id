# POC | Get Netflix title by ID

A proof of concept for get title and URL of Netflix's media by ID. Its work by search with
keyword ```netflix <netflix id>``` in Bing search engine and pick up first row of search result to output.

## Scripts

```shell
# Install dependency
yarn install

# Get Netflix title and URL by ID list
yarn start
```

## Netflix ID list

```javascript
// main.js at line 19
const list = [
    '80231373',
    '70273614',
    '70019004',
]
```
