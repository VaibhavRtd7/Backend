require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const githubData = {
  "login": "VaibhavRtd7",
  "id": 93068189,
  "node_id": "U_kgDOBYwbnQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/93068189?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VaibhavRtd7",
  "html_url": "https://github.com/VaibhavRtd7",
  "followers_url": "https://api.github.com/users/VaibhavRtd7/followers",
  "following_url": "https://api.github.com/users/VaibhavRtd7/following{/other_user}",
  "gists_url": "https://api.github.com/users/VaibhavRtd7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VaibhavRtd7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VaibhavRtd7/subscriptions",
  "organizations_url": "https://api.github.com/users/VaibhavRtd7/orgs",
  "repos_url": "https://api.github.com/users/VaibhavRtd7/repos",
  "events_url": "https://api.github.com/users/VaibhavRtd7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VaibhavRtd7/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Vaibhav Rathod",
  "company": "Currently I'm doing my B.Tech (Computer Engineering) in 3rd Year.",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "Vaibhav_Rtd7",
  "public_repos": 8,
  "public_gists": 0,
  "followers": 4,
  "following": 11,
  "created_at": "2021-10-24T05:32:25Z",
  "updated_at": "2024-01-18T19:43:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send('<h1> Home Page !!</h1>')
})

app.get('/twitter', (req, res) => {
  res.send('<h2> Twitter Page</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})