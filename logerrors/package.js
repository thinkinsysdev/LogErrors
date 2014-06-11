Package.describe({
  summary: "A pattern to consistently display and store application errors to the user and admin... TESTING ONLY.... DO NOT USE"
});

Package.on_use(function(api, where){
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  
  api.add_files(['logerrors.js', 'logerrors_list.html', 'logerrors_list.js'], 'client');
  
  if(api.export)
    api.export('LogErrors');
});

Package.on_test(function(api) {
  api.use('logerrors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  

  api.add_files('logerrors_tests.js', 'client');
});