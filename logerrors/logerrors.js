LogErrors = {
  collection: new Meteor.Collection(null),
  
  throw: function(message){
  LogErrors.collection.insert({message:message, seen:false});
},
  clearSeen: function() {
    LogErrors.collection.remove({seen:true});
  },
    numErrors: function() {
      LogErrors.collection.find({seen:false}).count();
    }
};