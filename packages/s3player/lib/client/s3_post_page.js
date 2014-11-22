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
        var poststuff = Posts.find({},{score: -1, limit: 4});
      return poststuff.fetch();
    },

	mifta: function() {
	return postObject.categories[0].name;
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
  profileUrl: function(){
    // note: we don't want the post to be re-rendered every time user properties change
    var user = Meteor.users.findOne(this.userId, {reactive: false});
    if(user)
      return getProfileUrl(user);
  },
  authorName: function(){
    return getAuthorName(this);
  },
  sourceLink: function(){
      return !!this.url ? this.url : getSiteUrl() + "posts/"+this._id;
    },
    viaTwitter: function () {
      return !!getSetting('twitterAccount') ? 'via='+getSetting('twitterAccount') : '';
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

  Template[getTemplate('s3PostPage')].events({
    'click .share-link': function(e){
      var $this = $(e.target).parents('.post-share').find('.share-link');
      var $share = $this.parents('.post-share').find('.share-options');
      e.preventDefault();
      $('.share-link').not($this).removeClass("active");
      $(".share-options").not($share).addClass("hidden");
      $this.toggleClass("active");
      $share.toggleClass("hidden");
    }
  });
