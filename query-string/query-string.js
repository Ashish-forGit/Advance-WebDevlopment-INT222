
const url = require('url')
const urlString = 'http://example.com/path?foo=bar&baz=qux';

const parsedUrl = url.parse(urlString,true) // parse url string

console.log(parsedUrl.pathname); //   /path
console.log(parsedUrl.query) // { foo: 'bar', baz: 'qux' }