Package.describe({summary: "Telescope thumbnail module package"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);
 api.use(['templating','mrt:popcorn'], ['client']);
 api.add_files(['lib/thumb.js'], ['client', 'server']);



  api.add_files(['lib/client/post_thumbnail.html','lib/client/post_thumbnail.js'], ['client']);
});
