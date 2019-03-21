const url = require("url");

const myurl = new URL("https://helloboiz.com:8000/henlo.html?id=2121&status=active");

// Serialized URL
console.log(myurl.href)
console.log(myurl.toString());

// Host(root domain)
console.log(myurl.host);

// Hostname (without port)
console.log(myurl.hostname);

// Pathname
console.log(myurl.pathname)

// Serialized query
console.log(myurl.search)

// Params object
console.log(myurl.searchParams);

// Add params
myurl.searchParams.append("name", "hmida");
console.log(myurl.searchParams);

// Loop params
myurl.searchParams.forEach((value, key)=> console.log(key + " : " +value));