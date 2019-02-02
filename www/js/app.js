// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var leftView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});


// app.loginScreen.open('#my-login-screen', true);

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  //Sample Username for Demo Purpose (Linked to School Server in reality)
  var usernames = ['c160150', 'c160152', 'pankaj002'];
  var passwords = ['12345678'];

  if(usernames.indexOf(username) != -1 && passwords.indexOf(password) != -1)
  { 
    app.loginScreen.close('#my-login-screen');
    if(username != 'c160150')
      app.dialog.alert(username,"Welcome");
    else
      app.dialog.alert(username,"Welcome Supreme Leeader");
    $$('#leftId').html(username)
  }
  else{
    // Close login screen
    // Alert username and password
    app.dialog.alert("Invalid Password/ Username", "Login Failed");
  }
  
  
});
