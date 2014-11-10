Package.describe({
  summary: "Displays Posts of Same Category",
  version: '0.1.0',
  name: "postspagecategory"
});

Package.onUse(function (api){

	api.use(['templating','telescope-tags','telescope-lib', 'telescope-base'], ['client', 'server']);

	api.add_files([
		'lib/client/templates/postspagecategory.html',
		'lib/client/js/postspagecategory.js'
		], ['client']);

});