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

FlowRouter.route('/view-readings', {
  name: 'viewReadings',
  triggersEnter: [checkLoggedIn],
  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'viewReadings',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/add-readings', {
  name: 'addReadings',
  triggersEnter: [checkLoggedIn],
  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'addReadings',
      footer: 'footer'
    });
  }
});

// creating a function for user redirects
function checkLoggedIn(context,redirect) {
  if (!Meteor.userId()) {
    redirect('/')
  }
}
