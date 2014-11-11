Package.describe({
  summary: "Post Page Item",
  version: '0.1.0',
  name: "post-page-item"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base', 'telescope-theme-hubble','mrt:popcorn'], ['client']);

  api.add_files([
    'lib/client/templates/postpageitem.html',
    'lib/client/js/postpageitem.js',
    'lib/client/stylesheets/postpageitem.css',

    ], ['client']);

});