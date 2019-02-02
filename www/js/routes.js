routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/announcements/',
    url: './pages/announcements.html',
  },
  {
    path: '/mobileordering/',
    url: './pages/mobileordering.html',
  },
  {
    path: '/cleanliness_reporting/',
    url: './pages/cleanliness_reporting.html',
  },
  {
    path: '/foodcourt/',
    url: './pages/foodcourt.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  // Left View Pages
  {
    path: '/left-page-1/',
    url: './pages/left-page-1.html',
  },
  {
    path: '/left-page-2/',
    url: './pages/left-page-2.html',
  },
  {
    path: '/classes/',
    url: './pages/classes.html',
  },
  {

    path: '/modules/',
    url: './pages/modules.html',
  },
  {
    path: '/foodcourt/nsfc',
    url: './pages/foodcourt/nsfc.html'
  },
  {
    path: '/foodcourt/koufu',
    url: './pages/foodcourt/koufu.html'
  },
  {
    path: '/classroom/',
    url: './pages/classroom.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/todo/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          todo: [
            {
              courseName: "CZ3003 - Software Analysis And Design",
              task: [
                {
                  title: 'Abstract Body',
                  user: 'Kenyon Dows',
                  time: '17:14',
                  completed: false,
                },
                {
                  title: 'Conclusion Body',
                  user: 'Griff Lundy',
                  time: '17:11',
                  completed: false,
                },
                {
                  title: 'References',
                  user: 'John Doe',
                  time: '16:48',
                  completed: true,
                },
              ]
            },
            {
              courseName: "CZ3002 - Advance Software Engineering",
              task: [
                {
                  title: 'Abstract Body',
                  user: 'Kenyon Dows',
                  time: '17:14',
                  completed: true,
                },
                {
                  title: 'Conclusion Body',
                  user: 'Griff Lundy',
                  time: '17:11',
                  completed: true,
                },
                {
                  title: 'References',
                  user: 'John Doe',
                  time: '16:48',
                  completed: false,
                },
              ]
            }
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/todo.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 0);
    },
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
