Meteor.startup(function() {
 if(Meteor.isClient){
      return SEO.config({
        title: 'Are You Making A Difference | Rahimafrooz',
        meta: {
          'description': 'Have you ever thought that a small difference that you make today can be a legacy that you can pass on?'
        },
        og: {
          'image': 'http://make-a-difference.rahimafrooz.com//img/safe_image.png' 
        }
      });
    }
});