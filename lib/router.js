// homepage route
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'home',
      footer: 'footer'
    });
  }
});

// aboutus route
FlowRouter.route('/about-us', {
  name: 'aboutUs',
  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'aboutUs',
      footer: 'footer'
    });
  }
});
