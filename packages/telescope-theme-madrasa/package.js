Package.describe({
  summary: "Telescope Madrasa theme",
  version: '0.1.0',
  name: "telescope-theme-madrasa"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base','telescope-theme-hubble','telescope-theme-theawesome'], ['client']);

  api.add_files([

  	/* Stylesheets */
    'lib/client/stylesheets/screen.css'], ['client']);

});
