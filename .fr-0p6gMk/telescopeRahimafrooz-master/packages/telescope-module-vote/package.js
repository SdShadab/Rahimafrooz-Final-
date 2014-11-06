Package.describe({summary: "Telescope Voting module package"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);
 api.use(['templating'], ['client']);
 api.add_files(['lib/vote.js'], ['client', 'server']);



  api.add_files(['lib/client/post_vote.html','lib/client/post_vote.js'], ['client']);
});
