Template.addReadings.onRendered(function() {
  this.$('.datetimepicker').datetimepicker({
    sideBySide: true,
    showClose: true,
    widgetPositioning: {
      vertical: 'bottom'
    }
  });
  this.$('[name=readingTime]').val(moment().format('MM/DD/YYYY hh:mm A'));
});

Template.addReadings.events({
  'submit form': function(event,template) {
    event.preventDefault();
    const fields = template.findAll('.form-control');
    const reading = fields.map((field) => {
      field = $(field)
      return {
        name: field.attr('name'),
        value: field.val(),
      }
    });
    var readingDoc = {};
    for (let i = 0; i < reading.length; i++) {
      readingDoc[reading[i].name] = reading[i].value;
    }
    Meteor.call('insertReading', readingDoc, (error,success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('inserted doc');
        FlowRouter.go('/');
      }
    })
  }
});
