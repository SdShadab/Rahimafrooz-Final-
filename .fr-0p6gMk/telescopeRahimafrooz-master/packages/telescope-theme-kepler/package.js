Package.describe({
  summary: "Telescope kepler theme",
  version: '0.1.0',
  name: "telescope-theme-kepler"
});
Package.on_use(function (api) {

  api.use(['telescope-theme-hubble', 'telescope-base', 'templating'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    'lib/client/templates/new_posts_list.html',
    'lib/client/kepler.js',
    ], ['client']);

});