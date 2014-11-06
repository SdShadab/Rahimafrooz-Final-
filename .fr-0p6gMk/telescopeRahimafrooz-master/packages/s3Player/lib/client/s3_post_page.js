templates["post_page"] = "s3PostPage";

Template[getTemplate('s3PostPage')].created = function () {
  post = this.data;
  //var pop = Popcorn($("#ourvideo"));
};
Template[getTemplate('s3PostPage')].rendered = function() {
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer($("#ourvideo"));
pop.play();
};