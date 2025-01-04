# 1. 2 major Components

<br/>

- > A Programming Language :- Java, Javascript, Php, Golang, c++.
- > A Database :- monGO DB, Mysql, Postgres, sqlite.

<br/>

# 2. Javascript

- > A Javascript based Backend :- Data / file /Third-Party.
- > A JS Runtime: Node.js / Deno / Bun. :- Package.json / .env / (Readme, git, lint, prettier etc.)

* > Src :- \
Index &#8594; DB Connects; \
APP &#8594; Config cookie; \
Constants &#8594; enums, DB-name;

+ > &#8594; DB \
&#8594; Models \
&#8594; Controllers \
&#8594; Routes \
&#8594; Middle Wares \
&#8594; Utils \
&#8594; More (depends)

# STEP 1
``` javascript
- Select the respective backend folder
- In in Run command npm init
- After that npm install nodemom 
- after that in package.json replace Start section with "start": "nodemon index.js"
```

# STEP 2
* Copy and paste into index.js/app.js to set express enviroment.

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```