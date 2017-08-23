var jscroll = require("./jscroll.js");

// debugger;

jscroll.jInvertScroll([".marquee-container"])

function toArray(elements){
  var arr = [];
  for(var i = 0; i < elements.length; i++){
    arr.push(elements[i]);
  }
  return arr;
}

var mediaElements = toArray(document.getElementsByClassName("fp-performance-media"));

mediaElements.forEach(function(element){
  var img = element.getElementsByClassName("fp-performance-image")[0];
  if(element.children.length > 1){
    element.insertAdjacentHTML('beforeend', '\
        <svg class="fp-performance-media-play" viewBox="0 0 200 200" alt="Play video">\
            <polygon points="70, 55 70, 145 145, 100" fill="#fff" fill-opacity="0.7"/>\
        </svg>\
    ');
    if(element.children[0].tagName.toLowerCase() === "iframe"){
      var button = element.getElementsByClassName("fp-performance-media-play")[0];
      button.onclick = function(e){
        e.preventDefault();
        if(!element.children[0].src.includes("?")) element.children[0].src += "?";
        element.children[0].src += "&auto_play=true&autoplay=1";
        setTimeout(function(){
          img.style.display = button.style.display = "none";
        }, 500)
      }
    }
  }
});

