// Dom7
var $$ = Dom7;
var notificationCount = 2;

udpateNotiCounter(notificationCount);

function udpateNotiCounter(notificationCount){
  $$(".badge").each(function(){
    $$(this).html(notificationCount);
  });
}


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


//app.loginScreen.open('#my-login-screen', true);

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
    app.dialog.alert(username,"Welcome");
    
    if(username != 'c160150')
      app.dialog.alert(username,"Welcome");
    else
      app.dialog.alert(username,"Welcome Supreme Leeader");
    $$('#leftId').html(username);
  }
  else{
    // Close login screen
    // Alert username and password
    app.dialog.alert("Invalid Password/ Username", "Login Failed");
  }


});

function notificationReset(){
  console.log("Here");
  notificationCount =0;
  udpateNotiCounter(notificationCount);
}

//Testing OrderFood
orderFood("Black Stuff", "Nigga Land");


//Add Notification to the side panels
function addNotification(text){
  var list = document.getElementById("notificationList");
  content = '<a href="" data-view=".view-main" class="panel-close">'+text;
  list.insertAdjacentHTML('beforeend', content);
}


// Call this method once order is placed
function orderFood(shopName, locationName){
  // Send Order Ready After 10 seconds
  setTimeout(function (){
    // Create notification with click to close
    var notificationClickToClose = app.notification.create({
      icon: '<i class="icon demo-icon">i</i>',
      title: 'Order Ready For Collection',
      titleRightText: 'now',
      subtitle: 'Please proceed to '+shopName+" at "+locationName+" to collect your order!",
      text: 'Click me to close',
      closeOnClick: true,
    });

    notificationClickToClose.open();

    //Auto Close Notifcation after 4 seconds
    setTimeout(function(){
      notificationClickToClose.close();
    },5000);
    notificationCount++;
    addNotification("Order at "+shopName+" Ready!");
    udpateNotiCounter(notificationCount);
  },15000);
}




