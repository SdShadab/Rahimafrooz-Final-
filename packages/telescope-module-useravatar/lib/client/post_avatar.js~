Template[getTemplate('postAvatar')].helpers({
profileUrl: function(){
    // note: we don't want the post to be re-rendered every time user properties change
    var user = Meteor.users.findOne(this.userId, {reactive: false});
    if(user)
      return getProfileUrl(user);
  },
  authorName: function(){
    return getAuthorName(this);
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
  cssClass: function () {
    if (this.class) {
      return this.class;
    }
    return 'user-avatar';
  },
 postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
});


