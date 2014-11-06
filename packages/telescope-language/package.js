Package.describe({
  summary: "switches between english and bangla",
  version: '0.1.0',
  name: "telescope-language"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

  api.use(['telescope-lib'], ['client', 'server']);

  api.add_files([
    'lib/client/templates/lang_change.html',
    'lib/client/lang_change.js'
    ], ['client']);

   
});
