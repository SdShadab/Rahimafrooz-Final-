templates["post_submit"] = "postVideoSubmit";
var videoLink = {
  propertyName: 'videoLink',
  propertySchema: {
    type: String,
    optional: true
  }
}
addToPostSchema.push(videoLink);
var imageLink = {
  propertyName: 'imageLink',
  propertySchema: {
    type: String,
    optional: true
  }
}
addToPostSchema.push(imageLink);