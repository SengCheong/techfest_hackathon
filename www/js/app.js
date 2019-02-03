// Dom7
var $$ = Dom7;
var notificationCount = 2;
var walletBal = 0;

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
  url:"/home/",
  domCache: true 
});

// app.onPageInit('home', function (page) {
//   var wallet = document.getElementById("walletBalance");
//   wallet.innerHTML = "$"+walletBal;
// });

app.loginScreen.open('#my-login-screen', true);

$$(document).on('page:beforein', function (e) {
  // Do something here when page loaded and initialized
  var page = e.detail.pageEl;
  console.log(e.detail.name);
  if(e.detail.name == 'home'){
    console.log(page);
    udpateNotiCounter(notificationCount);
    var wallet = document.getElementById("walletBalance");
    wallet.innerHTML = "$"+walletBal;
  }
})


// Login Screen Demo

$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  //Sample Username for Demo Purpose (Linked to School Server in reality)
  var usernames = ['c160150', 'c160152', 'pankaj002','jtan346','student'];
  var passwords = ['12345678'];
  var walletBals = ['120','201','153','199'];
  var wallet = document.getElementById("walletBalance");


  if(usernames.indexOf(username) != -1 && passwords.indexOf(password) != -1)
  {
    walletBal = walletBals[usernames.indexOf(username)];
    wallet.innerHTML = "$"+walletBal;
    app.loginScreen.close('#my-login-screen');
    app.dialog.alert(username,"Welcome");
    $$('#leftId').html(username);
  }
  else{
    // Close login screen
    // Alert username and password
    app.dialog.alert("Invalid Password/ Username", "Login Failed");
  }


});

function notificationReset(){
  notificationCount =0;
  udpateNotiCounter(notificationCount);
}


//Add Notification to the side panels
function addNotification(text, subtitle){
  var list = document.getElementById("notificationList");
  content = '<li class="item-content">'+
                    '<a href="" data-view=".view-main" class="panel-close">'+
                      '<div class="item-inner">'+
                        '<div class="item-title-row">'+
                          '<div class="item-title">'+text+'</div>'+
                        '</div>'+
                        '<div class="item-subtitle">'+subtitle+'</div>'+
                      '</div>'+
                    '</a>'+
                    '</li>';
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
    addNotification("Order Ready For Collection",shopName+" @ "+locationName);
    udpateNotiCounter(notificationCount);
  },10000);
}


function orderSummary(img,foodName, shopName, location, price){
  var order = "<img src='"+img+"' width='100%'><br>";
  order += "Food: "+foodName+"<br>";
  order += "Restuarant: "+shopName+" @ "+location+"<br>";
  order += "Total:"+price+'<br>';
  order += "<strong style='color:green'>Confirm Order?</strong>"
  app.dialog.confirm(order, "Order Summary", function () {
    console.log(price);
    walletBal -= parseInt(price.substring(1, price.length));
    console.log(walletBal);
    app.dialog.alert("Order has been sent to restuarant!<br>New Balance: $"+walletBal, "Order Confirmed!",);
    orderFood(shopName,location);
    var view=app.views.current;
    view.router.back(view.history[0],{force:true});
  });
}
