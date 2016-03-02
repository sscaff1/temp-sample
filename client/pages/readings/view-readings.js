Template.viewReadings.helpers({
  readings() {
    return Reading.find();
  },
  niceDate(readingDate) {

    return moment(readingDate, 'MM/DD/YYYY hh:mm A').format('MM/DD/YYYY hh:mm A');
  },
  shortWind(wind) {
    return wind.substr(0, wind.indexOf(' '));
  }
});
