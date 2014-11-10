Template[getTemplate('postscategory')].helpers({
    postca: function(){
      return Posts.find({"categories.name":postObject.categories[0].name}).fetch();
    },
    post_item: function () {
    return getTemplate('post_item');
  	}

  });