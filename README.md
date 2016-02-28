# A Boilerplate for Meteor 1.2 using Bootstrap, Blaze, and Flow Router
The purpose of the repo is to provide a boilerplate for using Meteor with Bootstrap and Flow Router. The README below will show anyone how to add HTML content, create pages, create links, and adding images.

## Working with this Repo
1. Install Meteor. https://www.meteor.com/install
2. Then run the following commands in your terminal.
    ```
    git clone https://github.com/sscaff1/meteor1.2-bootstrap-boilerplate.git
    cd meteor1.2-bootstrap-boilerplate
    meteor
    ```
Once Meteor is up and running, go to `localhost:3000`, and you should see your app. When you make changes to the HTML, JavaScript, or CSS, Meteor will detect the change and automatically refresh the page.

## HTML Contents
For the front-end, the app is using blaze. Blaze's templating system is known as SpaceBars. In order to add content to a page, you simply modify the HTML between the template tags.
```
<template name="myPage">
  <!-- Put HTML here -->
</template>
 ```
There is no need to link the Bootstrap stylesheet. The stylesheet is automatically loaded onto the client through the Meteor build system. If you need add additional styles, there is a folder on the client called `styles`. You can include custom stylesheets in that folder. Once again, there is no need to link these stylesheets. The stylesheets are automatically loaded by the Meteor build system.

## Creating New Page
This section is purely a matter of preference on my part. For each page, you can follow the following pattern.

### Folder Structure
```
|--client
    |--layout
        |--footer.html
        |--header.html
        |--layout.html
    |--pages
        |--my-page
            |--my-page.html
    |--styles
```
If you want to create a new page, create a folder called my-page and then inside create my-page.html. In the HTML file, please include your HTML as detailed in the HTML Contents section. This folder structure will help me organize the JavaScript later. Note for updating the Header or Footer, you can simply do that once in the footer.html page, and in the header.html page.
### Adding a Route
Under the lib folder, you will find a router.js file. This file defines our routes. In order to create a new route, modify this file by adding a block of code similar to the following block.
```
// my-page route
FlowRouter.route('/my-page', { //**this is the route the user will see in the URL
  name: 'myPage', //**this is the name of the route you will use later to create links
  action() {
    BlazeLayout.render('layout', { //this is the name of the layout template
      header: 'header', //this is the name of the header template you want rendered
      main: 'myPage', //**this is the name of the template you want rendered
      footer: 'footer' //this is the name of the footer template you want rendered
    });
  }
});
```
Note I made comments above. For the most part, you will only find yourself changing the lines with `**` in the comments.

## Creating Links
Unlike a typical Bootstrap project, we can use the router file to help us link between pages. If I want to create a link to the myPage page that I created above, here is the code.
`<a href="{{pathFor 'myPage'}}">Link</a>`
Note that myPage is the same name in the link that I defined in the router file. This prevents you from having to worry about where a particular file is with respect to the other file. `{{pathFor 'myPage'}}` will work in any HTML template.

## Adding Images
Images can be stored under the public directory. I created a folder called img to store them in. This folder can have sub-directories if necessary. So let's see what adding an image looks like.
```
<template name="myPage">
  <img src="/img/my-image.png" />
</template>
```
If my image was in a sub-directory, I would simply change my path as follows `/img/my-directory/my-image.png` or `/my-directory/my-image.png` (if I have my directory as a direct sub-directory of the public directory). Again with Meteor you don't have to worry about where an HTML file is with respect to the image. This path will work anywhere. 
