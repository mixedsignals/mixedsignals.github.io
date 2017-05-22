var $ = require("jquery");
var Freewall = require("freewall").Freewall;

window.jQuery = $;
var featherlight = require("featherlight");
require("featherlight/src/featherlight.css");//requiring the featherlight css


var bricks = $(".brick");
var w = 1;
bricks.each(function(index){
  w = 1 + 3 * Math.random() << 0;
  $(bricks[index]).css({"width":w*300})
});
var wall = new Freewall("#freewall");
wall.reset({
  selector: ".brick",
  animate: true,
  cellW: 300,
  cellH: "auto",
  onResize: function() {
    wall.fitWidth();
  }
});
var images = wall.container.find(".brick");
images.find("img").load(function() {
  wall.fitWidth();
});