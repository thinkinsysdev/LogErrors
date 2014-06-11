Template.meteorErrors.helpers({
  logerrors: function() {
    return LogErrors.collection.find();
  }
});

Template.meteorError.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    LogErrors.collection.update(error._id, {$set: {seen: true}});
  });
};