

Template[getTemplate('thumbnail')].helpers({
  
  videostuff: function(){
      	if(postObject.videoLink.split('.').pop() == 'mp4') {
      		console.log('Yippee');
      		return true;
      	}
      }
      });

Template[getTemplate('thumbnail')].created = function () {
  post = this.data;
  //var pop = Popcorn($("#ourvideo"));
};
Template[getTemplate('thumbnail')].rendered = function() {
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer($("#thumbvideo"));
pop.play();

};
