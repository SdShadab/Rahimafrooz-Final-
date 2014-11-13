templates["post_page"] = "s3PostPage";

Template[getTemplate('s3PostPage')].created = function () {
  post = this.data;
  //var pop = Popcorn($("#ourvideo"));
};

Template[getTemplate('s3PostPage')].helpers({
    postpagesidebar: function(){
      return getTemplate('postpagesidebar');
      },

      postca: function(){ 
        var poststuff = Posts.find({"categories.name":postObject.categories[0].name},{limit: 3}).fetch();
      return poststuff
    },

    videostuff: function(){
          var videoLink = post.videoLink;
          if (videoLink.indexOf(".mp4") >= 1) {
      		console.log('Yippee');
          return true;
          }
      		}
      });

Template[getTemplate('s3PostPage')].rendered = function() {
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer($("#ourVideo"));
pop.play();

};