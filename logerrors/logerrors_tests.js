Tinytest.add("LogErrors collection works", function(test) {
  test.equal(LogErrors.collection.find({}).count(), 0);

  LogErrors.throw('A new error!');
  test.equal(LogErrors.collection.find({}).count(), 1);

  LogErrors.collection.remove({});
});

Tinytest.addAsync("LogErrors template works", function(test, done) {  
  LogErrors.throw('A new error!');
  test.equal(LogErrors.collection.find({seen: false}).count(), 1);

  // render the template
  UI.insert(UI.render(Template.meteorErrors), document.body);

  // wait a few milliseconds
  Meteor.setTimeout(function() {
    test.equal(LogErrors.collection.find({seen: false}).count(), 0);
    test.equal(LogErrors.collection.find({}).count(), 1);
    LogErrors.clearSeen();

    test.equal(LogErrors.collection.find({seen: true}).count(), 0);
    done();
  }, 500);
});