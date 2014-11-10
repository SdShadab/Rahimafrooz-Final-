Meteor.startup(function () {
  Router.map(function() {
    this.route('morevideos', {
      path: '/morevideos',
      template: getTemplate('morePage')
    });
  });
});

