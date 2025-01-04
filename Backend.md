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

# project 1 
Access port by .env File.

``` javascript
require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kunal@gmail.com ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Neha hai</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

```

# Project 2
Create object and access by api.

``` javascript
require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT


const gitData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 101,
  "public_gists": 5,
  "followers": 36517,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2024-12-30T20:55:07Z"
}

app.get("/github", (req, res) => {
  res.json(gitData)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

```