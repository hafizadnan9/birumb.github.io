(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Web_atlas_", frames: [[0,0,1500,821],[0,823,1500,815]]},
		{name:"Web_atlas_2", frames: [[0,1626,1674,41],[1501,216,41,50],[1501,0,254,170],[1501,172,126,42],[0,815,1499,809],[0,0,1499,813]]}
];


// symbols:



(lib.CachedTexturedBitmap_37 = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_40 = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_43 = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_50 = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Contacts = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Contents = function() {
	this.initialize(img.Contents);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2499,1356);


(lib.Home = function() {
	this.initialize(img.Home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2491,1350);


(lib.Menu = function() {
	this.initialize(img.Menu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2489,474);


(lib.Movies = function() {
	this.initialize(ss["Web_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Other = function() {
	this.initialize(ss["Web_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Shop = function() {
	this.initialize(img.Shop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2499,1360);


(lib.SpiderMan = function() {
	this.initialize(ss["Web_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SHOP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("SHOP", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(17.65,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.OTHERS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("OTHERS", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(12.65,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.MOVIES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("MOVIES", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(12.15,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.HOME = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("HOME", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 30;
	this.text.parent = this;
	this.text.setTransform(16.15,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.CONTENTS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("CONTENTS", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(6.15,5.6);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.CONTACT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("CONTACT", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(7.8,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


(lib.BESTOF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("BEST OF", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(12.15,5.85);

	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,63,21);


// stage content:
(lib.Web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(1);
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(5);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(10);
		}
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(15);
		}
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(20);
		}
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(25);
		}
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(30);
		}
	}
	this.frame_4 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_9 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_14 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_19 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_24 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_29 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(6));

	// Contents
	this.instance = new lib.Home();
	this.instance.parent = this;
	this.instance.setTransform(0,162,0.3212,0.3296);

	this.instance_1 = new lib.Shop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,161,0.3221,0.3272);

	this.instance_2 = new lib.Contents();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,161,0.3221,0.3311);

	this.instance_3 = new lib.SpiderMan();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2,161,0.5367,0.546);

	this.instance_4 = new lib.Movies();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3,161,0.537,0.5473);

	this.instance_5 = new lib.Other();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2,154,0.5367,0.5493);

	this.instance_6 = new lib.Contacts();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,162,0.5337,0.5488);

	this.instance_7 = new lib.CachedTexturedBitmap_37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.45,155,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_7},{t:this.instance_6}]},5).to({state:[]},5).wait(1));

	// Buttons
	this.button_12 = new lib.CONTACT();
	this.button_12.name = "button_12";
	this.button_12.parent = this;
	this.button_12.setTransform(457.85,145,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_12, 0, 1, 1);

	this.button_10 = new lib.OTHERS();
	this.button_10.name = "button_10";
	this.button_10.parent = this;
	this.button_10.setTransform(389.35,145.2,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.button_9 = new lib.MOVIES();
	this.button_9.name = "button_9";
	this.button_9.parent = this;
	this.button_9.setTransform(320.6,145.2,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.button_8 = new lib.BESTOF();
	this.button_8.name = "button_8";
	this.button_8.parent = this;
	this.button_8.setTransform(252.85,145,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.button_7 = new lib.CONTENTS();
	this.button_7.name = "button_7";
	this.button_7.parent = this;
	this.button_7.setTransform(182.55,145.2,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_7, 0, 1, 1);

	this.button_6 = new lib.SHOP();
	this.button_6.name = "button_6";
	this.button_6.parent = this;
	this.button_6.setTransform(111.25,145,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_11 = new lib.HOME();
	this.button_11.name = "button_11";
	this.button_11.parent = this;
	this.button_11.setTransform(40,145,1,1,0,0,0,31,10);
	new cjs.ButtonHelper(this.button_11, 0, 1, 1);

	this.text = new cjs.Text("CONTACT", "bold 10px 'Century Gothic'", "#050811");
	this.text.lineHeight = 14;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(-92,147.85);

	this.instance_8 = new lib.CachedTexturedBitmap_50();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-99.8,141.5,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_40();
	this.instance_9.parent = this;
	this.instance_9.setTransform(83.2,136.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.text,p:{x:-92,text:"CONTACT",lineWidth:48}},{t:this.button_11},{t:this.button_6},{t:this.button_7},{t:this.button_8},{t:this.button_9},{t:this.button_10},{t:this.button_12}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.text,p:{x:-87.15,text:"OTHERS",lineWidth:39}},{t:this.button_11},{t:this.button_6},{t:this.button_7},{t:this.button_8},{t:this.button_9},{t:this.button_10}]},34).wait(1));

	// Background
	this.instance_10 = new lib.CachedTexturedBitmap_43();
	this.instance_10.parent = this;
	this.instance_10.setTransform(696.7,42.55,0.5,0.5);

	this.instance_11 = new lib.Menu();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-4,0,0.3234,0.3418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300.2,300,525.4000000000001,310);
// library properties:
lib.properties = {
	id: 'E987B960D3BEEB4CB9616FDA7AA881E6',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Contents.png", id:"Contents"},
		{src:"images/Home.png", id:"Home"},
		{src:"images/Menu.png", id:"Menu"},
		{src:"images/Shop.png", id:"Shop"},
		{src:"images/Web_atlas_.png", id:"Web_atlas_"},
		{src:"images/Web_atlas_2.png", id:"Web_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E987B960D3BEEB4CB9616FDA7AA881E6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;