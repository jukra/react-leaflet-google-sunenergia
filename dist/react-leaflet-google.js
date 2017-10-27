(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") { module.exports = factory(require("react"), require("react-leaflet")); } else if (typeof define === "function" && define.amd) { define(["react", "react-leaflet"], factory); } else if (typeof exports === "object") { exports.ReactLeaflet = factory(require("react"), require("react-leaflet")); } else		{ root.ReactLeaflet = factory(root.React, root[undefined]); }
}(this, (__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) =>
   /** ****/ (function(modules) { // webpackBootstrap
/** ****/ 	// The module cache
     /** ****/ 	const installedModules = {};

/** ****/ 	// The require function
     /** ****/ 	function __webpack_require__(moduleId) {
/** ****/ 		// Check if module is in cache
       /** ****/ 		if (installedModules[moduleId])
  /** ****/ 			{ return installedModules[moduleId].exports; }

/** ****/ 		// Create a new module (and put it into the cache)
       /** ****/ 		const module = installedModules[moduleId] = {
         /** ****/ 			exports: {},
         /** ****/ 			id: moduleId,
         /** ****/ 			loaded: false,
       /** ****/ 		};

/** ****/ 		// Execute the module function
       /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/** ****/ 		// Flag the module as loaded
       /** ****/ 		module.loaded = true;

/** ****/ 		// Return the exports of the module
       /** ****/ 		return module.exports;
     /** ****/ 	}


/** ****/ 	// expose the modules object (__webpack_modules__)
     /** ****/ 	__webpack_require__.m = modules;

/** ****/ 	// expose the module cache
     /** ****/ 	__webpack_require__.c = installedModules;

/** ****/ 	// __webpack_public_path__
     /** ****/ 	__webpack_require__.p = "";

/** ****/ 	// Load entry module and return exports
     /** ****/ 	return __webpack_require__(0);
   /** ****/ }([
/* 0 */
     /** */ function(module, exports, __webpack_require__) {
       "use strict";

       Object.defineProperty(exports, "__esModule", {
	  value: true,
       });
       exports.GoogleLayer = undefined;

       const _Google = __webpack_require__(1);

       const _Google2 = _interopRequireDefault(_Google);

       function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

       exports.GoogleLayer = _Google2.default;
     /** */ },
/* 1 */
     /** */ function(module, exports, __webpack_require__) {
       "use strict";

       Object.defineProperty(exports, "__esModule", {
	  value: true,
       });

       const _createClass = (function() { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

       const _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; const desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { const parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } return get(parent, property, receiver); } else if ("value" in desc) { return desc.value; } const getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); };

       const _react = __webpack_require__(2);

       const _react2 = _interopRequireDefault(_react);

       const _reactLeaflet = __webpack_require__(3);

       const _leaflet = __webpack_require__(4);

       function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

       function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

       function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

       function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

       function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

       const GoogleLayer = (function(_GridLayer) {
	  _inherits(GoogleLayer, _GridLayer);

	  function GoogleLayer() {
	    _classCallCheck(this, GoogleLayer);

	    return _possibleConstructorReturn(this, (GoogleLayer.__proto__ || Object.getPrototypeOf(GoogleLayer)).apply(this, arguments));
	  }

	  _createClass(GoogleLayer, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      _get(GoogleLayer.prototype.__proto__ || Object.getPrototypeOf(GoogleLayer.prototype), "componentWillMount", this).call(this);

	      let _props = this.props,
	          _map = _props.map,
	          googlekey = _props.googlekey,
	          maptype = _props.maptype,
	          asclientid = _props.asclientid,
	          props = _objectWithoutProperties(_props, ["map", "googlekey", "maptype", "asclientid"]);

	      this.leafletElement = new L.gridLayer.googleMutant(this.props);
	    },
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      let _props2 = this.props,
	          opacity = _props2.opacity,
	          zIndex = _props2.zIndex;

	      if (opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(opacity);
	      }
	      if (zIndex !== prevProps.zIndex) {
	        this.leafletElement.setZIndex(zIndex);
	      }
	    },
	  }]);

	  return GoogleLayer;
       }(_reactLeaflet.GridLayer));

       GoogleLayer.propTypes = {
	  googlekey: PropTypes.string.isRequired,
	  maptype: PropTypes.string,
	  asclientid: PropTypes.bool,
       };
       exports.default = GoogleLayer;
     /** */ },
/* 2 */
     /** */ function(module, exports) {
       module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
     /** */ },
/* 3 */
     /** */ function(module, exports) {
       module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
     /** */ },
/* 4 */
     /** */ function(module, exports, __webpack_require__) {
       "use strict";

	// Based on https://github.com/shramov/leaflet-plugins
	// GridLayer like https://avinmathew.com/leaflet-and-google-maps/ , but using MutationObserver instead of jQuery
       const GoogleMapsLoader = __webpack_require__(5);

       GoogleMapsLoader.VERSION = "3.18";

	// 🍂class GridLayer.GoogleMutant
	// 🍂extends GridLayer
       L.GridLayer.GoogleMutant = L.GridLayer.extend({
	  includes: L.Mixin.Events,

	  options: {
	    minZoom: 0,
	    maxZoom: 18,
	    tileSize: 256,
	    subdomains: "abc",
	    errorTileUrl: "",
	    attribution: "", // The mutant container will add its own attribution anyways.
	    opacity: 1,
	    continuousWorld: false,
	    noWrap: false,
	    // 🍂option type: String = 'roadmap'
	    // Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
	    type: "satellite",
	    maxNativeZoom: 21,
	  },

	  initialize: function initialize(options) {
	    L.GridLayer.prototype.initialize.call(this, options);
	    const self = this;

	    if (options.asclientid) {
	      GoogleMapsLoader.CLIENT = options.googlekey;
	    } else {
	      GoogleMapsLoader.KEY = options.googlekey;
	    }

	    self._type = options.maptype || "SATELLITE";

    if (!google) {
	    GoogleMapsLoader.load((_google) => {
	      google = _google;
	      console.log("I just loaded google maps api");
	      self._ready = true;
	      // self._initMapObject();
	      // self.
	      self._initMutant();
	      self._update();

	      // this._ready = google.maps.Map !== undefined;
	      // if (!this._ready) L.Google.asyncWait.push(this);
	    });
    } else {
	      self._ready = true;
	      // self._initMapObject();
	      // self.
	      self._initMutant();
	      self._update();
    }

	    // Couple data structures indexed by tile key
	    this._tileCallbacks = {}; // Callbacks for promises for tiles that are expected
	    this._freshTiles = {}; // Tiles from the mutant which haven't been requested yet

	    this._imagesPerTile = self._type === "hybrid" ? 2 : 1;
	    this.createTile = self._type === "hybrid" ? this._createMultiTile : this._createSingleTile;
	  },

	  onAdd: function onAdd(map) {
	    L.GridLayer.prototype.onAdd.call(this, map);
	    this._initMutantContainer();

	    // this._GAPIPromise.then(function () {
	    if (this._ready) {
	      this._map = map;

	      this._initMutant();

	      map.on("viewreset", this._reset, this);
	      map.on("move", this._update, this);
	      map.on("zoomend", this._handleZoomAnim, this);
	      map.on("resize", this._resize, this);

	      // 20px instead of 1em to avoid a slight overlap with google's attribution
	      map._controlCorners.bottomright.style.marginBottom = "20px";

	      this._reset();
	      this._update();
	    }
	    // }.bind(this));
	  },

	  onRemove: function onRemove(map) {
	    L.GridLayer.prototype.onRemove.call(this, map);
	    map._container.removeChild(this._mutantContainer);
	    this._mutantContainer = undefined;

	    map.off("viewreset", this._reset, this);
	    map.off("move", this._update, this);
	    map.off("zoomend", this._handleZoomAnim, this);
	    map.off("resize", this._resize, this);

	    map._controlCorners.bottomright.style.marginBottom = "0em";
	  },

	  getAttribution: function getAttribution() {
	    return this.options.attribution;
	  },

	  setOpacity: function setOpacity(opacity) {
	    this.options.opacity = opacity;
	    if (opacity < 1) {
	      L.DomUtil.setOpacity(this._mutantContainer, opacity);
	    }
	  },

	  setElementSize: function setElementSize(e, size) {
	    e.style.width = `${size.x}px`;
	    e.style.height = `${size.y}px`;
	  },

	  _initMutantContainer: function _initMutantContainer() {
	    if (!this._mutantContainer) {
	      this._mutantContainer = L.DomUtil.create("div", "leaflet-google-mutant leaflet-top leaflet-left");
	      this._mutantContainer.id = `_MutantContainer_${L.Util.stamp(this._mutantContainer)}`;
	      // 			this._mutantContainer.style.zIndex = 'auto';
	      this._mutantContainer.style.pointerEvents = "none";

	      this._map.getContainer().appendChild(this._mutantContainer);
	    }

	    this.setOpacity(this.options.opacity);
	    this.setElementSize(this._mutantContainer, this._map.getSize());

	    this._attachObserver(this._mutantContainer);
	  },

	  _initMutant: function _initMutant() {
	    if (!this._ready || !this._mutantContainer) return;
	    this._mutantCenter = new google.maps.LatLng(0, 0);

	    const map = new google.maps.Map(this._mutantContainer, {
	      center: this._mutantCenter,
	      zoom: 0,
	      tilt: 0,
	      mapTypeId: google.maps.MapTypeId[this._type],
	      disableDefaultUI: true,
	      keyboardShortcuts: false,
	      draggable: false,
	      disableDoubleClickZoom: true,
	      scrollwheel: false,
	      streetViewControl: false,
	      styles: this.options.styles || {},
	      backgroundColor: "transparent",
	    });

	    this._mutant = map;

	    // 🍂event spawned
	    // Fired when the mutant has been created.
	    this.fire("spawned", {
	      mapObject: map,
	    });
	  },

	  _attachObserver: function _attachObserver(node) {
	    // 		console.log('Gonna observe', node);

	    const observer = new MutationObserver(this._onMutations.bind(this));

	    // pass in the target node, as well as the observer options
	    observer.observe(node, {
	      childList: true,
	      subtree: true,
	    });
	  },

	  _onMutations: function _onMutations(mutations) {
	    for (let i = 0; i < mutations.length; ++i) {
	      const mutation = mutations[i];
	      for (let j = 0; j < mutation.addedNodes.length; ++j) {
	        const node = mutation.addedNodes[j];

	        if (node instanceof HTMLImageElement) {
	          this._onMutatedImage(node);
	        } else if (node instanceof HTMLElement) {
	          Array.prototype.forEach.call(node.querySelectorAll("img"), this._onMutatedImage.bind(this));
	        }
	      }
	    }
	  },

	  // Only images which 'src' attrib match this will be considered for moving around.
	  // Looks like some kind of string-based protobuf, maybe??
	  // Only the roads (and terrain, and vector-based stuff) match this pattern
	  _roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,

	  // On the other hand, raster imagery matches this other pattern
	  _satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,

	  // On small viewports, when zooming in/out, a static image is requested
	  // This will not be moved around, just removed from the DOM.
	  _staticRegExp: /StaticMapService\.GetMapImage/,

	  _onMutatedImage: function _onMutatedImage(imgNode) {
	    // 		if (imgNode.src) {
	    // 			console.log('caught mutated image: ', imgNode.src);
	    // 		}

	    let coords;
	    let match = imgNode.src.match(this._roadRegexp);
	    let sublayer,
      parent;

	    if (match) {
	      coords = {
	        z: match[1],
	        x: match[2],
	        y: match[3],
	      };
	      if (this._imagesPerTile > 1) {
	        imgNode.style.zIndex = 1;
	      }
	      sublayer = 1;
	    } else {
	      match = imgNode.src.match(this._satRegexp);
	      if (match) {
	        coords = {
	          x: match[1],
	          y: match[2],
	          z: match[3],
	        };
	      }
	      // 			imgNode.style.zIndex = 0;
	      sublayer = 0;
	    }

	    if (coords) {
	      let key = this._tileCoordsToKey(coords);
	      imgNode.style.position = "absolute";
	      if (this._imagesPerTile > 1) {
	        key += `/${sublayer}`;
	      }
	      if (key in this._tileCallbacks && this._tileCallbacks[key]) {
	        // console.log('Fullfilling callback ', key);
	        this._tileCallbacks[key].pop()(imgNode);
	        if (!this._tileCallbacks[key].length) {
	          delete this._tileCallbacks[key];
	        }
	      } else {
	        // console.log('Caching for later', key);
	        parent = imgNode.parentNode;
	        if (parent) {
	          parent.removeChild(imgNode);
	          parent.removeChild = L.Util.falseFn;
	          // 					imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	        }
	        if (key in this._freshTiles) {
	          this._freshTiles[key].push(imgNode);
	        } else {
	          this._freshTiles[key] = [imgNode];
	        }
	      }
	    } else if (imgNode.src.match(this._staticRegExp)) {
	      parent = imgNode.parentNode;
	      if (parent) {
	        // Remove the image, but don't store it anywhere.
	        // Image needs to be replaced instead of removed, as the container
	        // seems to be reused.
	        imgNode.parentNode.replaceChild(L.DomUtil.create("img"), imgNode);
	      }
	    }
	  },

	  // This will be used as this.createTile for 'roadmap', 'sat', 'terrain'
	  _createSingleTile: function createTile(coords, done) {
	    const key = this._tileCoordsToKey(coords);
	    // console.log('Need:', key);

	    if (key in this._freshTiles) {
	      const tile = this._freshTiles[key].pop();
	      if (!this._freshTiles[key].length) {
	        delete this._freshTiles[key];
	      }
	      L.Util.requestAnimFrame(done);
	      // 			console.log('Got ', key, ' from _freshTiles');
	      return tile;
	    }
	      const tileContainer = L.DomUtil.create("div");
	      this._tileCallbacks[key] = this._tileCallbacks[key] || [];
	      this._tileCallbacks[key].push(function(c /* , k*/) {
	        return function(imgNode) {
	          const parent = imgNode.parentNode;
	          if (parent) {
	            parent.removeChild(imgNode);
	            parent.removeChild = L.Util.falseFn;
	            // 						imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	          }
	          c.appendChild(imgNode);
	          done();
	          // 					console.log('Sent ', k, ' to _tileCallbacks');
	        };
	      }(tileContainer /* , key*/));

	      return tileContainer;
	  },

	  // This will be used as this.createTile for 'hybrid'
	  _createMultiTile: function createTile(coords, done) {
	    const key = this._tileCoordsToKey(coords);

	    const tileContainer = L.DomUtil.create("div");
	    tileContainer.dataset.pending = this._imagesPerTile;

	    for (let i = 0; i < this._imagesPerTile; i++) {
	      const key2 = `${key}/${i}`;
	      if (key2 in this._freshTiles) {
	        tileContainer.appendChild(this._freshTiles[key2].pop());
	        if (!this._freshTiles[key2].length) {
	          delete this._freshTiles[key2];
	        }
	        tileContainer.dataset.pending--;
	        // 				console.log('Got ', key2, ' from _freshTiles');
	      } else {
	        this._tileCallbacks[key2] = this._tileCallbacks[key2] || [];
	        this._tileCallbacks[key2].push(function(c /* , k2*/) {
	          return function(imgNode) {
	            const parent = imgNode.parentNode;
	            if (parent) {
	              parent.removeChild(imgNode);
	              parent.removeChild = L.Util.falseFn;
	              // 							imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	            }
	            c.appendChild(imgNode);
	            c.dataset.pending--;
	            if (!parseInt(c.dataset.pending)) {
	              done();
	            }
	            // 						console.log('Sent ', k2, ' to _tileCallbacks, still ', c.dataset.pending, ' images to go');
	          };
	        }(tileContainer /* , key2*/));
	      }
	    }

	    if (!parseInt(tileContainer.dataset.pending)) {
	      L.Util.requestAnimFrame(done);
	    }
	    return tileContainer;
	  },

	  _checkZoomLevels: function _checkZoomLevels() {
	    // setting the zoom level on the Google map may result in a different zoom level than the one requested
	    // (it won't go beyond the level for which they have data).
	    // verify and make sure the zoom levels on both Leaflet and Google maps are consistent
	    if (this._map.getZoom() !== undefined && this._mutant.getZoom() !== this._map.getZoom()) {
	      // zoom levels are out of sync. Set the leaflet zoom level to match the google one
	      this._map.setZoom(this._mutant.getZoom());
	    }
	  },

	  _reset: function _reset() {
	    this._initContainer();
	  },

	  _update: function _update() {
	    L.GridLayer.prototype._update.call(this);
	    if (!this._mutant) return;

	    const center = this._map.getCenter();
	    const _center = new google.maps.LatLng(center.lat, center.lng);

	    this._mutant.setCenter(_center);
	    const zoom = this._map.getZoom();
	    if (zoom !== undefined) {
	      this._mutant.setZoom(Math.round(this._map.getZoom()));
	    }
	  },

	  _resize: function _resize() {
	    const size = this._map.getSize();
	    if (this._mutantContainer.style.width === size.x && this._mutantContainer.style.height === size.y) return;
	    this.setElementSize(this._mutantContainer, size);
	    if (!this._mutant) return;
	    google.maps.event.trigger(this._mutant, "resize");
	  },

	  _handleZoomAnim: function _handleZoomAnim() {
	    const center = this._map.getCenter();
	    const _center = new google.maps.LatLng(center.lat, center.lng);

	    this._mutant.setCenter(_center);
	    this._mutant.setZoom(Math.round(this._map.getZoom()));
	  },

	  // Agressively prune _freshtiles when a tile with the same key is removed,
	  // this prevents a problem where Leaflet keeps a loaded tile longer than
	  // GMaps, so that GMaps makes two requests but Leaflet only consumes one,
	  // polluting _freshTiles with stale data.
	  _removeTile: function _removeTile(key) {
	    if (this._imagesPerTile > 1) {
	      for (let i = 0; i < this._imagesPerTile; i++) {
	        const key2 = `${key}/${i}`;
	        if (key2 in this._freshTiles) {
	          delete this._freshTiles[key2];
	        }
	        // 				console.log('Pruned spurious hybrid _freshTiles');
	      }
	    } else if (key in this._freshTiles) {
	        delete this._freshTiles[key];
	        // 				console.log('Pruned spurious _freshTiles', key);
	      }

	    return L.GridLayer.prototype._removeTile.call(this, key);
	  },
       });

	// 🍂factory gridLayer.googleMutant(options)
	// Returns a new `GridLayer.GoogleMutant` given its options
       L.gridLayer.googleMutant = function(options) {
	  return new L.GridLayer.GoogleMutant(options);
       };
     /** */ },
/* 5 */
     /** */ function(module, exports, __webpack_require__) {
       let __WEBPACK_AMD_DEFINE_FACTORY__,
         __WEBPACK_AMD_DEFINE_RESULT__; (function(root, factory) {
           if (root === null) {
             throw new Error("Google-maps package can be used only in browser");
           }

           if (true) {
             !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
           } else if (typeof exports === "object") {
             module.exports = factory();
           } else {
             root.GoogleMapsLoader = factory();
           }
         }(typeof window !== "undefined" ? window : null, () => {
           "use strict";


           const googleVersion = "3.18";

           let script = null;

           let google = null;

           let loading = false;

           let callbacks = [];

           let onLoadEvents = [];

           let originalCreateLoaderMethod = null;


           const GoogleMapsLoader = {};


           GoogleMapsLoader.URL = "https://maps.googleapis.com/maps/api/js";

           GoogleMapsLoader.KEY = null;

           GoogleMapsLoader.LIBRARIES = [];

           GoogleMapsLoader.CLIENT = null;

           GoogleMapsLoader.CHANNEL = null;

           GoogleMapsLoader.LANGUAGE = null;

           GoogleMapsLoader.REGION = null;

           GoogleMapsLoader.VERSION = googleVersion;

           GoogleMapsLoader.WINDOW_CALLBACK_NAME = "__google_maps_api_provider_initializator__";


           GoogleMapsLoader._googleMockApiObject = {};


           GoogleMapsLoader.load = function(fn) {
             if (google === null) {
               if (loading === true) {
                 if (fn) {
                   callbacks.push(fn);
                 }
               } else {
                 loading = true;

                 window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
                   ready(fn);
                 };

                 GoogleMapsLoader.createLoader();
               }
             } else if (fn) {
               fn(google);
             }
           };


           GoogleMapsLoader.createLoader = function() {
             script = document.createElement("script");
             script.type = "text/javascript";
             script.src = GoogleMapsLoader.createUrl();

             document.body.appendChild(script);
           };


           GoogleMapsLoader.isLoaded = function() {
             return google !== null;
           };


           GoogleMapsLoader.createUrl = function() {
             let url = GoogleMapsLoader.URL;

             url += `?callback=${GoogleMapsLoader.WINDOW_CALLBACK_NAME}`;

             if (GoogleMapsLoader.KEY) {
               url += `&key=${GoogleMapsLoader.KEY}`;
             }

             if (GoogleMapsLoader.LIBRARIES.length > 0) {
               url += `&libraries=${GoogleMapsLoader.LIBRARIES.join(",")}`;
             }

             if (GoogleMapsLoader.CLIENT) {
               url += `&client=${GoogleMapsLoader.CLIENT}&v=${GoogleMapsLoader.VERSION}`;
             }

             if (GoogleMapsLoader.CHANNEL) {
               url += `&channel=${GoogleMapsLoader.CHANNEL}`;
             }

             if (GoogleMapsLoader.LANGUAGE) {
               url += `&language=${GoogleMapsLoader.LANGUAGE}`;
             }

             if (GoogleMapsLoader.REGION) {
               url += `&region=${GoogleMapsLoader.REGION}`;
             }

             return url;
           };


           GoogleMapsLoader.release = function(fn) {
             const release = function() {
               GoogleMapsLoader.KEY = null;
               GoogleMapsLoader.LIBRARIES = [];
               GoogleMapsLoader.CLIENT = null;
               GoogleMapsLoader.CHANNEL = null;
               GoogleMapsLoader.LANGUAGE = null;
               GoogleMapsLoader.REGION = null;
               GoogleMapsLoader.VERSION = googleVersion;

               google = null;
               loading = false;
               callbacks = [];
               onLoadEvents = [];

               if (typeof window.google !== "undefined") {
                 delete window.google;
               }

               if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== "undefined") {
                 delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
               }

               if (originalCreateLoaderMethod !== null) {
                 GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
                 originalCreateLoaderMethod = null;
               }

               if (script !== null) {
                 script.parentElement.removeChild(script);
                 script = null;
               }

               if (fn) {
                 fn();
               }
             };

             if (loading) {
               GoogleMapsLoader.load(() => {
                 release();
               });
             } else {
               release();
             }
           };


           GoogleMapsLoader.onLoad = function(fn) {
             onLoadEvents.push(fn);
           };


           GoogleMapsLoader.makeMock = function() {
             originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

             GoogleMapsLoader.createLoader = function() {
               window.google = GoogleMapsLoader._googleMockApiObject;
               window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
             };
           };


           var ready = function(fn) {
             let i;

             loading = false;

             if (google === null) {
               google = window.google;
             }

             for (i = 0; i < onLoadEvents.length; i++) {
               onLoadEvents[i](google);
             }

             if (fn) {
               fn(google);
             }

             for (i = 0; i < callbacks.length; i++) {
               callbacks[i](google);
             }

             callbacks = [];
           };


           return GoogleMapsLoader;
         }));
     /** */ },
   /** ****/ ]))));

