Package.describe({
  summary: "Mozilla's HTML5 video and media library for the open web",
  name: "popcorn"
});

Package.on_use(function (api, where) {
  api.add_files(['popcorn-complete.js'], 'client');
});
