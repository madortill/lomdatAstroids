(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F85151").s().p("ADSEdQgZgMhLhWQhOhZgcgRQgOgDhYBgQheBngRAIQgkARgcgcQgcgcARgkQAMgZBWhLQBZhOARgcQADgOhghYQhnhfgIgQQgKgXAJgYQAKgZAXgGQAPgFALADQAJABAOAJQAdARBFBQQBGBSAgAUQAOADBYhgQBfhnAQgIQAlgRAbAcQAcAcgRAkQgMAZhWBLQhZBOgRAcQgDAOBhBYQBmBfAIAQQARAkgcAcQgRARgVAAQgMAAgOgGg");
	this.shape.setTransform(180.9707,175.8652,6.2185,6.0491);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-0.1,362.2,352.3), null);


// stage content:
(lib.wrong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F85151").s().p("ADSEdQgZgMhLhWQhOhZgcgRQgOgDhYBgQheBngRAIQgkARgcgcQgcgcARgkQAMgZBWhLQBZhOARgcQADgOhghYQhnhfgIgQQgKgXAJgYQAKgZAXgGQAPgFALADQAJABAOAJQAdARBFBQQBGBSAgAUQAOADBYhgQBfhnAQgIQAlgRAbAcQAcAcgRAkQgMAZhWBLQhZBOgRAcQgDAOBhBYQBmBfAIAQQARAkgcAcQgRARgVAAQgMAAgOgGg");
	this.shape.setTransform(640.0286,360.025);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(640.55,360.45,1,1,0,0,0,181.1,176);
	this.instance.alpha = 0.8984;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({scaleX:1.4116,scaleY:1.378,x:640.0185,y:360.0606},0).wait(1).to({scaleX:1.8581,scaleY:1.7559,x:640.0516,y:360.0962},0).wait(1).to({scaleX:2.2355,scaleY:2.1336,x:640.0841,y:360.1044},0).wait(1).to({scaleX:2.785,scaleY:2.6146,x:640.1661,y:360.2038},0).wait(1).to({scaleX:3.1971,scaleY:3.0952,x:640.2113,y:360.2217},0).wait(1).to({scaleX:3.5405,scaleY:3.4728,x:640.2611,y:360.1974},0).wait(1).to({scaleX:4.0212,scaleY:3.9196,x:640.319,y:360.3486},0).wait(1).to({scaleX:4.6737,scaleY:4.5377,x:640.344,y:360.2152},0).wait(1).to({scaleX:5.1541,scaleY:4.9501,x:640.3465,y:360.4182},0).wait(1).to({scaleX:5.7034,scaleY:5.465,x:640.3594,y:360.1694},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1099.4,544.3,-277.80000000000007,-7.699999999999932);
// library properties:
lib.properties = {
	id: '3D5A9343C0919E4FB45B60BA2EBF09B7',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['3D5A9343C0919E4FB45B60BA2EBF09B7'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;