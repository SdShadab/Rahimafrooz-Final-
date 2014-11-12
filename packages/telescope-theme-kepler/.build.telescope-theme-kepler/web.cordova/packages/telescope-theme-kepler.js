(function () {

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/telescope-theme-kepler/lib/client/templates/template.new_posts_lis //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("newPostsList");                                          // 2
Template["newPostsList"] = new Template("Template.newPostsList", (function() { // 3
  var view = this;                                                             // 4
  return HTML.DIV({                                                            // 5
    "class": "posts-wrapper grid"                                              // 6
  }, HTML.Raw('\n    <h2 class="welcome-message">Welcome!</h2>\n  \n\n<div id="THEtext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, enim a scelerisque facilisis, dolor velit mollis elit, sit amet mollis eros lacus vitae purus. Nullam et tellus velit, ac dapibus eros. Aliquam erat volutpat. Mauris nec dolor dui, at eleifend ante. Etiam auctor facilisis semper. In eget erat at tellus tincidunt laoreet. In ultricies, nunc mattis fermentum condimentum, libero velit accumsan felis, vitae pharetra elit est a turpis. Maecenas convallis tortor rutrum magna imperdiet posuere sit amet sed nunc. In iaculis eleifend iaculis.  </p></div>   \n<div id="THEvideo"><iframe width="540" height="360" src="//www.youtube.com/embed/tmeOjFno6Do" frameborder="0" allowfullscreen=""></iframe></div>\n\n\n\n    <br><br>\n    '), HTML.DIV({
    "class": "more-button"                                                     // 8
  }, "\n        ", HTML.A({                                                    // 9
    href: "/submit"                                                            // 10
  }, Blaze.View(function() {                                                   // 11
    return Spacebars.mustache(view.lookup("i18n"), "Post Something");          // 12
  })), "\n      "), HTML.Raw(' <br>\n     <!-- <div id="tab-header">\n       <a href="/top" id="tops">Top</a>\n       <a href="/new">New</a>\n      </div>\n      <br> -->\n      <ul id="tabspart">\n          <li><a href="/best">Top</a></li>\n          <li><a href="/new">New</a></li>\n      </ul>\n      <br>\n    '), HTML.DIV({
    "class": "posts list"                                                      // 14
  }, "\n      ", Blaze.Each(function() {                                       // 15
    return Spacebars.call(view.lookup("posts"));                               // 16
  }, function() {                                                              // 17
    return [ "\n        ", Blaze._TemplateWith(function() {                    // 18
      return {                                                                 // 19
        template: Spacebars.call(view.lookup("post_item"))                     // 20
      };                                                                       // 21
    }, function() {                                                            // 22
      return Spacebars.include(function() {                                    // 23
        return Spacebars.call(Template.__dynamic);                             // 24
      });                                                                      // 25
    }), "\n      " ];                                                          // 26
  }), "\n    "), "\n    ", Blaze.If(function() {                               // 27
    return Spacebars.call(view.lookup("hasMorePosts"));                        // 28
  }, function() {                                                              // 29
    return [ "\n      ", HTML.DIV({                                            // 30
      "class": "more-button"                                                   // 31
    }, "\n        ", HTML.A({                                                  // 32
      href: function() {                                                       // 33
        return Spacebars.mustache(view.lookup("loadMoreUrl"));                 // 34
      }                                                                        // 35
    }, Blaze.View(function() {                                                 // 36
      return Spacebars.mustache(view.lookup("i18n"), "Load more");             // 37
    })), "\n      "), "\n    " ];                                              // 38
  }), "\n  ");                                                                 // 39
}));                                                                           // 40
                                                                               // 41
/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/telescope-theme-kepler/lib/client/kepler.js                        //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
templates["posts_list"] = "newPostsList";                                      // 1
                                                                               // 2
/////////////////////////////////////////////////////////////////////////////////

}).call(this);
