Meteor.startup(function () {
  Router.map(function() {
    this.route('faq', {
      path: '/faq',
      template: getTemplate('faq')
    });
  });
});

primaryNav.push("faqLink");
