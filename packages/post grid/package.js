Package.describe({
  summary: "Post Grid Layout",
  version: '0.1.0',
  name: "posts-grid"
});

Package.onUse(function (api) {

  api.use([
    'telescope-base',
    'telescope-theme-hubble'
  ], ['client']);

  api.addFiles([
    'lib/client/screen.css'
  ], ['client']);

});