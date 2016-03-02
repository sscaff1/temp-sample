Accounts.ui.config({
  extraSignupFields: [{
      fieldName: 'name',
      fieldLabel: 'Name',
      validate: function(value, errorFn) {
      if (value == '') {
        errorFn('Name must have a value');
        return false;
      }
      return true;
    }
  }]
});
