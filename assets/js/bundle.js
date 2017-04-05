/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	            <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
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



/***/ }
/******/ ]);