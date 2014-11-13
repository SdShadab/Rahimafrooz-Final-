

Template[getTemplate('thumbnail')].helpers({
  
 
 postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
      });

//Template[getTemplate('thumbnail')].created = function () {
 // post = this.data;
 //var pop = Popcorn($("#thumbvideo"));
//pop.play();
//};
//Template[getTemplate('thumbnail')].rendered = function() {
//Popcorn.player( "baseplayer" );
//var pop = Popcorn.baseplayer($("#thumbvideo"));
//pop.play();

//};
