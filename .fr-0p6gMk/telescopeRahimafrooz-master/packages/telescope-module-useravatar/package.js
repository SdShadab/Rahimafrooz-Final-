Package.describe({summary: "Telescope UserAvatar module package"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);
 api.use(['templating'], ['client']);
 api.add_files(['lib/user_avatar.js'], ['client', 'server']);



  api.add_files(['lib/client/post_avatar.html','lib/client/post_avatar.js'], ['client']);
});
