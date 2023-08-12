# Lesson 11 - Packages

> Node package manage (npm) is a library and registry for JavaScript software packages

Init package.json for keeping track all packages your project depends on

```
npm init
```

You can install new development dependencies with the flag `-save` combined with `install`

```
npm install express -save
```

In order to install a package globally, i.e, your future projects will recognize this project, use the flag `-g`

```
npm install nodemon -g 
```

Uninstall a package with `uninstall`

```
npm uninstall express
```

If you've cloned a Nodejs project from github, you do not need to install each dependecy required on package.json individually. Just run

```
npm install
```

You can create scripts on the attribute `"scripts"` on package.json and call them by 

```
npm run SCRIPT_NAME
```