// this creates thumbnails of all the event pages
// for the archive page using slimerjs

var fs = require("fs");

var THUMBNAIL_DIR = "./_assets/archive/thumbnails";

var events = fs.list("./_events");
var thumbnails = fs.list(THUMBNAIL_DIR);

for(var i = 0; i < events.length; i ++){
  var eventNum = events[i].replace(".md", "");
  var contains = false;
  var counter = 0;
  for(var j = 0; j < thumbnails.length; j ++){
    if(thumbnails[j].replace(".jpg", "") == eventNum){
      contains = true;
    }
  }
  if(!contains){
    createCapture(eventNum)
    counter ++;
  }
}

if(counter == 0){
  slimer.exit();
}

function createCapture(eventNum){
  var page = require("webpage").create();

  page.viewportSize = {
    width: 720,
    height: 720
  };

  page.clipRect = {
    top : 0,
    left : 0,
    width : 720,
    height : 720
  };

  page.open("http://localhost:4000/archive/" + eventNum, function() {
    page.evaluate(function(){
      var noRender = document.getElementsByClassName("no-render");
      console.log(noRender.length);
      for(var i = 0; i < noRender.length; i ++){
        noRender[i].style.display = "none";
      }
    });
    setTimeout(function(){
      page.render(THUMBNAIL_DIR + "/" + eventNum + ".jpg");
      slimer.exit();
    }, 1000)
  });
}