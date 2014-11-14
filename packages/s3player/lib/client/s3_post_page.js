templates["post_page"] = "s3PostPage";

Template[getTemplate('s3PostPage')].created = function () {
  post = this.data;
  //var pop = Popcorn($("#ourvideo"));
};

Template[getTemplate('s3PostPage')].helpers({
    postpagesidebar: function(){
      return getTemplate('postpagesidebar');
      },

      pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('vote') : i18n.t('votes');
  },

      postca: function(){ 
        var poststuff = Posts.find({"categories.name":postObject.categories[0].name},{limit: 3});
      return poststuff.fetch();
    },

    authorName: function(){
    return getAuthorName(this);
  },
  postShare: function () {
    return getTemplate('postShare');
  },

  postVote: function () {
    return getTemplate('postVote');
  },

  cssClass: function () {
    if (this.class) {
      return this.class;
    }
    return 'user-avatar';
  },

  url: function () {
    if (this.user) {

      return getAvatarUrl(this.user);
    }
    else if (this.userId) {
      var user = Meteor.users.findOne(this.userId);
      if (user) {

        return getAvatarUrl(user);
      }
    }
  },

  ago: function(){
    // if post is approved show submission time, else show creation time. 
    time = this.status == STATUS_APPROVED ? this.postedAt : this.createdAt;
    return moment(time).fromNow();
  }

      });

Template[getTemplate('s3PostPage')].rendered = function() {
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer($("#ourVideo"));
pop.play();

};