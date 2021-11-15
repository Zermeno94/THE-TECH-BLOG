 # HW 14: THE-TECH-BLOG 📸

![GitHub license](https://img.shields.io/badge/license-MIT-ff69b4.svg)

## Table of Contents 🔎
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
 -[GitHub & Deploy Link](#githubdeploylink)
- [Contributers](#contributers)
- [Resources & Tutorials](#resources&tutorials)
- [License](#license)

### Installation  💾
User will need to install node dependencies. The application should use [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package. The application will be invoked by using the following command:

```bash
  npm install 
``` 
```bash
  npm start
```

### Usage ⚡
This application allows developers to publish their blog posts and comment on other developer's posts as well.  

### Demo 🎥

* [Link to Demo]()

![tech blog login page](https://user-images.githubusercontent.com/87839888/141705887-89c284b0-5414-4ffc-8aa9-1ce054ec8db6.png)

### GitHub & Heroku Link

* [GitHub Link](https://github.com/Zermeno94/THE-TECH-BLOG)
* [Heroku Link](https://dashboard.heroku.com/apps/the-tech-blog-1/deploy/heroku-git)

## Contributers
* Miranda Zermeno
* AskBCS Assist


## Resources & Tutorials  💻

* [https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md](#https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)


## License 📍
MIT License

Copyright (c) 2021 Miranda Zermeno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

