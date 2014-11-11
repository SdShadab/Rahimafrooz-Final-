var filteredModules = function (group) {
  // return the modules whose positions start with group
  return _.filter(postModules, function(module){return module.position.indexOf(group) == 0});
};

var post = {};

Template[getTemplate('postpageitem')].created = function () {
  post = this.data;
};

Template[getTemplate('postpageitem')].helpers({
 
post_item: function () {
    return getTemplate('post_item');
  },

});
