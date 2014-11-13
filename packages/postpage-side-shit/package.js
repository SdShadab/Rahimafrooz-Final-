Package.describe({
  summary: "Post Side Shit",
  version: '0.1.0',
  name: "postpage-side-shit"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base', 'telescope-theme-hubble','mrt:popcorn'], ['client']);

  api.use(['telescope-lib'], ['client', 'server']);

  api.add_files([
    'lib/postpagesidebar.html',
    ], ['client']);

   
});