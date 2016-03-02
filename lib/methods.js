Meteor.methods({
  insertReading(reading) {
    reading.userId = this.userId;
    Reading.insert(reading);
  }
})
