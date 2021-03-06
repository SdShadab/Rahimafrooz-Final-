Package.describe({
  summary: "Telescope TheAwesome theme",
  version: '0.1.0',
  name: "telescope-theme-theawesome"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base','telescope-theme-hubble'], ['client']);

  api.add_files([

  	/* Stylesheets */
    'lib/client/stylesheets/screen.css',

    /* Template Files */
 
    'lib/client/templates/nav_theawesome.html',
    'lib/client/templates/postslist_theawesome.html',
    'lib/client/templates/layout_theawesome.html',
    'lib/client/templates/viewsmenu_theawesome.html',
    'lib/client/templates/submitbutton_theawesome.html',
    'lib/client/templates/postmeta_theawesome.html',
'lib/client/templates/usermenu_theawesome.html',

    
    /* JS Link */
    'lib/client/js/theawesome.js',
'lib/client/js/postcomments.js',

    ], ['client']);

});


