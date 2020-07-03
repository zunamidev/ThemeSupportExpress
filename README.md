# Wordpress like themes
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green.svg)](https://github.com/zunamidev/ThemeSupportExpress/pulls)
[![Current version]( https://img.shields.io/npm/v/theme-support-express?color=green&logo=npm)](https://www.npmjs.com/package/theme-support-express)

### Description
This is my first nodeJS project that I'm working on. It's to build up my skill. It will get some updates, which will change the coding style and methods. I appreciate your feedback.
### How to use it?
#### Step 1
Add a new static direction in your ExpressJS app, which should look like this:
```javascript
app.use(express.static(path.join(__dirname, 'themes')));
```
#### Step 2
Create the root folder for the themes in your root direction
```
├── app.js
├── bin
│   └── www
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── getThemeinformation.js
│   ├── index.js
│   └── users.js
├── themes <-- Here 
└── views
    ├── error.ejs
    └── index.ejs
```
Like this.

#### Step 3
```javascript
routes/index.js

const searchTheme = new searchTheme();
searchTheme.getThemeInformation(appRoot, 'themes').then((r) => {
    res.render('index', { style: r.main });
});
```

```ejs
views/index.ejs

<link rel='stylesheet' href='<%= style %>' />
```

This will load the selected Theme.

### What is planed?
- [ ] Global theme config
- [ ] Javascript loader
- [ ] Webpack support
    - [ ] Minimizer
    - [ ] SCSS to CSS

### Dependencies used
- [app-root-path](https://www.npmjs.com/package/app-root-path) 
- [chalk](https://www.npmjs.com/package/chalk) 
- [inquirer](https://www.npmjs.com/package/inquirer) 
- [figlet](https://www.npmjs.com/package/figlet) 
- [get-dir-children-names](https://www.npmjs.com/package/get-dir-children-names) 

### Bugs
If you find bugs please open an issue or create a Pull request.

### License
This project is licensed under the **MIT License**.
##

I hope you enjoy this project :)
