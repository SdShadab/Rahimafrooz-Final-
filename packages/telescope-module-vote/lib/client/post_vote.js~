Template[getTemplate('postVote')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false; 
    return _.include(this.upvoters, user._id);
  },
  oneBasedRank: function(){
    if(typeof this.rank !== 'undefined')
      return this.rank + 1;
  },
isAdmin:function (user){
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return !!user && !!user.isAdmin;
}
});
 Template[getTemplate('postVote')].helpers({
    sourceLink: function(){
      return !!this.url ? this.url : getSiteUrl() + "posts/"+this._id;
    },
    viaTwitter: function () {
      return !!getSetting('twitterAccount') ? 'via='+getSetting('twitterAccount') : '';
    }
  });

  Template[getTemplate('postVote')].events({
    'click .share-link': function(e){
      var $this = $(e.target).parents('.post-share').find('.share-link');
      var $share = $this.parents('.post-share').find('.share-options');
      e.preventDefault();
      $('.share-link').not($this).removeClass("active");
      $(".share-options").not($share).addClass("active");
      $this.toggleClass("active");
      $share.toggleClass("active");
    }
  });

Template[getTemplate('postVote')].events({
  'click .upvote-link': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go(getSigninUrl());
      throwError(i18n.t("Please log in first"));
    }
    Meteor.call('upvotePost', post, function(error, result){
      trackEvent("post upvoted", {'_id': post._id});
    });
  }
});
