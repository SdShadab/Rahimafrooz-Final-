templates["post_page"] = "s3PostPage";

Template[getTemplate('s3PostPage')].helpers({
    postscategory: function(){
      return getTemplate('postscategory');
      },

    videostuff: function(){
      	if(postObject.videoLink.split('.').pop() == 'mp4') {
      		console.log('Yippee');
      		return true;
      	}
      }

  });

Template[getTemplate('s3PostPage')].created = function () {
  post = this.data;
  //var pop = Popcorn($("#ourvideo"));
};
Template[getTemplate('s3PostPage')].rendered = function() {
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer($("#ourVideo"));
pop.play();
};