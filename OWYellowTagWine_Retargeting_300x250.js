(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"OWYellowTagWine_Retargeting_300x250_atlas_", frames: [[0,735,222,252],[0,0,885,733]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.WD_Daily = function() {
	this.spriteSheet = ss["OWYellowTagWine_Retargeting_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.yellowbrick_300x250 = function() {
	this.spriteSheet = ss["OWYellowTagWine_Retargeting_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBZQgOgLAAgVIAAgVIAjAAIAAASQAAAKAFAEQAEAFAGgBQAGABAEgFQAFgEAAgKQAAgHgDgGQgDgHgFgGIgdgdIgMgOQgFgFgDgGQgDgGgBgHIgBgRQAAgUANgMQAPgLAWgBQAWABAOALQAOANAAATIAAAOIgjAAIAAgIQAAgKgFgGQgEgFgGgBQgGABgEAEQgFAEAAAHQAAAHACAEQABAGAHAHIAhAnQALAMAGAKQAGALAAARQAAAVgPALQgPALgVAAQgUAAgQgLg");
	this.shape.setTransform(62.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBiIAAjDIBTAAIAAAcIgwAAIAAAwIAiAAIAAAbIgiAAIAABAIA0AAIAAAcg");
	this.shape_1.setTransform(51.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARBiIghhvIAAAAIAABvIgjAAIAAjDIAlAAIAfBrIAAAAIAAhrIAjAAIAADDg");
	this.shape_2.setTransform(38.7,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBiIAAjDIAiAAIAADDg");
	this.shape_3.setTransform(29,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBiIgXhzIgWBzIgiAAIgojDIAjAAIAWCRIABAAIAXiRIAhAAIAXCRIAAAAIAYiRIAgAAIgoDDg");
	this.shape_4.setTransform(15.5,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRBiIAAioIgkAAIAAgbIBqAAIAAAbIgkAAIAACog");
	this.shape_5.setTransform(-6.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBgQgKgDgGgHQgHgGgCgIQgDgHAAgIIAAhxQAAgHADgIQACgHAHgGQAGgHAKgEQAKgFAOAAQANAAAKAFQAJAEAHAHQAGAGADAHQADAIAAAHIAAAQIgjAAIAAgQQAAgEgEgFQgFgHgHAAQgIAAgEAHQgFAFAAAEIAABxQAAAEAFAGQAEAGAIgBQAHABAFgGQAEgGAAgEIAAgQIAjAAIAAAQQAAAHgDAIQgDAIgGAGQgHAHgJADQgKAEgNAAQgOAAgKgEg");
	this.shape_6.setTransform(-18.4,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBiIAAjDIBTAAIAAAcIgwAAIAAAwIAiAAIAAAbIgiAAIAABAIA0AAIAAAcg");
	this.shape_7.setTransform(-30,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVBiIgghPIgHAAIgEAAIAABPIgjAAIAAjDIA6AAQAZAAAMAQQAMAQAAAYQAAAWgIAOQgJANgMAHIAlBTgAgWgKIALAAQAQAAAGgEQAGgFAAgWQAAgMgEgIQgDgIgKAAIgWAAg");
	this.shape_8.setTransform(-41.9,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBiIAAjDIAiAAIAADDg");
	this.shape_9.setTransform(-52.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1BiIAAjDIA+AAQAQAAALAJQAMAKACANQADAMAAAMIAABTQAAAXgKAQQgLARgXAAgAgSBGIAVAAQAKAAADgIQAEgJAAgLIAAhTQAAgMgEgIQgDgIgKAAIgVAAg");
	this.shape_10.setTransform(-61.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-16,148,32);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAmIgHgSQgEgKgBgBQgCgCgDAAIgBAAIgHAfIgXAAIAQhLIAqAAQALAAAFAGQAFAGAAAIQAAAJgFAHQgFAFgNACQAIAHAJAZgAgGgGIAEAAQALAAACgBQAEgBABgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgBgGAAIgLAAg");
	this.shape.setTransform(112.7,31,1,0.999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAmIAQhLIA9AAIgEAQIglAAIgCANIAkAAIgDAOIglAAIgDAPIApAAIgEARg");
	this.shape_1.setTransform(120.8,31,1,0.999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAfQgJgIAAgPQAAgHADgHQACgIAEgGQAGgIAFgDQAHgEAGgCQAGgBAGAAQARAAAJAJQAIAKAAANIgCALQgBAGgFAIQgDAHgIAFQgFAEgIADQgGABgGAAQgQAAgKgIgAgGgQQgFAEgCAIQgDAIAAAFQAAAFAEAEQADAEAGAAQAGAAAFgFQAFgGABgHIADgKQAAgHgEgEQgDgEgGAAQgGAAgEAFg");
	this.shape_2.setTransform(104.4,31,1,0.999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAmIAOg5IgBAAIgcA5IgQAAIgDg5IgLA5IgUAAIAQhLIAdAAIADAvIAAAAIAXgvIAeAAIgRBLg");
	this.shape_3.setTransform(95,31,1,0.999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQAhQgGAEgFABQgFABgHAAQgQAAgGgGQgIgGABgJQgBgRAWgGQgEgIAAgGQAAgJAHgFQAJgFAIAAQALAAAHAFQAGAFAAAGQAAAFgDADQgBAEgFACIgLAHIAJALIAGgGIABgCIAMAKQgCAEgFAFIAGAGIgLAMgAgQAQIABAFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACACADAAQAGAAAGgFQgIgJgEgGQgJAEAAAGgAAAgZIgBAFIACAIQAFgCADgDIACgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgEAAgCACg");
	this.shape_4.setTransform(81.9,31,1,0.999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmAzQgTgSAAghQAAggASgSQAQgRAbAAQAaAAAOAQQAOAPAAAcIAAAIIhMAAQAAAXAJANQAJAOARAAQASAAAPgMIADADIgGAPQgQAMgZAAQgbAAgRgRgAAWgLQgBgsgSAAQgTAAgCAsIAoAAIAAAAg");
	this.shape_5.setTransform(138.4,18.6,1,0.999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBAQgNABgHABQADgXAAg0QAAghgWAAQgWABAAAnIAAAJQAAAjACAYIgUgCIgUACQACgYAAgjIAAgJQAAgjgCgZIATABIATgBIgBAUIABAAQAQgXAXAAQApAAAAAxIABBSQgHgBgNgBg");
	this.shape_6.setTransform(124.4,18.4,1,0.999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_7.setTransform(113.3,8.4,1,0.999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA/IgTABQACgYAAgjIAAgJQAAgjgCgYIATABIAUgBQgCAXAAAkIAAAJQAAAkACAXg");
	this.shape_8.setTransform(113.3,18.6,1,0.999);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA2BaIgOACQgPg6gahIIAAAAIgXBAIgXBCIgNgCIgOACQgHgfgWhJIgYhPIAWACIAVgCIAjCGIABAAIAtiGIANACIANgCQACANARAyIAXBHIAAAAQAghmAIggIALACIAMgCIgaBOQgXBCgLAng");
	this.shape_9.setTransform(97.1,15.8,1,0.999);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABjQgMAAgHACIAChcIAAgRIgChcIATACIAUgCIgCBcIAAARIACBcQgHgCgNAAg");
	this.shape_10.setTransform(54.6,14.9,1,0.999);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMAwQgOAUgUAAQgTAAgKgLQgJgKAAgOQAAgeAngIQAVgFAFgDQAFgDABgIQAAgKgHgGQgGgHgMAAQgJAAgJAFQgKAEgEAGIgCAAIgDgQQAWgTAbAAQAwAAAAArIAAA8QAAALADAEQADADAJAAIAAAGQgOAIgKAAQgTAAgGgUgAgLAFQgMAHAAARQAAAUAPAAQATAAAAgaIAAgbQgPAFgHAEg");
	this.shape_11.setTransform(44.4,18.6,1,0.999);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAwIAChLIgTABIABgHIgBgIIATABIgBggIAjgQIADABQgDATAAAcIAYgBIgBAIIABAHIgYgBIgCA6QAAAbADAIQADAIAJAAQAIAAAFgCIAAALQgMAGgRABQghAAAAgqg");
	this.shape_12.setTransform(33.4,16.4,1,0.999);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgsA1QgUgRAAghQAAghAUgTQASgSAaAAQAeAAASASQARARAAAeQAAAfgSAUQgSATgdAAQgaAAgSgPgAgZADQAAA1AZAAQAaAAAAg+QAAgxgaAAQgZAAAAA6g");
	this.shape_13.setTransform(21.4,18.6,1,0.999);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABBaIgVACQACggAAgqIgBhZQgVAAgbAEIABgMIgBgMIBEACQAiAAAhgCIgBAMIABAMQgZgEgWAAIgBBZQAAAqACAgg");
	this.shape_14.setTransform(9.3,15.8,1,0.999);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhmB/QgGgGAAgKQAAgHAEgFIgBgBQgNgWAWgTQgEgIAFgNQADgHgBgDQgGgKAHgQIABgEQgJgJAKgTQgFgEgBgCQgCgEACgEQADgFALgGIABgBIgFgEQgGgEAAgDIgBgCIACgCQAEgEASgDQATgDASAAIACgDIABgFQACgIgBgHQgDgSAHgCQADgCAEAEIABACQACANAFAEQANgPARgHQAOgGANACQANABAEAHQACAEgCAEIgBACIAHADQAKAFABADIAAABIAAAGIACABQAHADAAABQACAEgBAFQAMAJAGAQIABACQAAARgcAFQAEAKgGAEQgFAFgMgFQAGAQgHANQgFAMgNAGIgBAGQgCAOgEAFQgGAJgQABQAAAQgLAKQgLAKgSgCQgDAKgLAIQgMAIgOgDQgHAKgLABIgEABQgJAAgHgGgAhiBoQgCAEAAADQAAAGAEAEQAEAEAJgBQAJgBAFgJQgGgEAAgGQgLADgKgFgAhEBhIgDAEQgBAGAGAFIABAAIABABQALADAKgHQAKgGABgKIABgEIgDgHIgBgCQgLAHgPgGQgBAGgGAKgAhYA9QgNAKgBAKQAAAFAEAHIACAEQAJAGANgEIACgFQAGgJABgGQgLgGAAgMIAAAAQgDgCgGACIgCAAgAgXBCQgCAGgHAFIACADIADAJIAAAAQAGACAIgCQAIgBAFgFQAJgIgBgPIAAAAQgHAHgIAAQgIAAgGgEgAg8AoQgKAHgCAKQgBAFAEAHQAEAGADABIAAAAQAQAIALgJQAFgFAEgGIABgEIgDgDQgGgHAEgJQgLACgKgHIgDgCgAgIAbIAAABQgFAGgIAEIgCACQgHAHAGAIQAGAIALgBQAIAAAGgIQABgHAEgKIABgEIACgEQgIgFgGAAQgEAAgFADgAhXAnQgEAKAEAHIAAAAIACAAIAJABIAAgBQADgLAKgIIAGgGIgEgHQgMAHgLgCQAAAGgDAEgAAWAaQgDADgCAGIgBADQgFANAAAFIABAAQAOAAAEgGQAEgEACgNIABgHQgHABgFgDgAg5AWQABAHAHAEQALAHAMgEIADgBQAHgEAFgGIAAAAIABgCQABgDgCgGIgCgHQgFgHgCgIQgEAEgDABQgEADgIgBQgDALgPAMgAhSgDIgCAHQgFALAEAHIAAACQALAEANgJQAQgKABgLIgHgEQgFgFgBgFIAAgBIAAAAQgHAAgSAOgAAEAOIgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABIABAAQAGABAHAEIAFgFQgEgGgBgFQgGAEgHABgAAcgMIgBABIAAAAQAAALgHAGQABAFAFAIQAEAFAMgDQAKgFAEgJQAFgLgHgPQgGABgKgFIgDgCgAAAATIgBgDIgDgBIgCAAIABAEIAFAAgAgMgXIAAABQAAAEgFAGQAEAXARgBQAGgBAHgGIAAAAQAGgFAAgIIgUgRQgGAEgJAAgAgcgyIgGACIgMALIgFAFIgDABIAAAKIABACIABACQAAAEAEAEQAHAHANgFQADgBAFgGQAEgGAAgCIAAgBIgEgBQgDgCAAgDQAAgIgBgNgAhUgJIAAABQASgNAIAAIAAgJIgCAAIgVgCQgJARAGAGgAAGgiIARANIADgFIADgGIACgBQgIgQgFgXIgJgFQAIAcgLAPgAA+gdIAAABIABABQACABAFABQAFABABgBQACAAgEgIIgCgEQgNgQAAgEIgNgEQAJAYAHAIgAAkgiIAGADQAIAFAEgCIABgBQgHgLgIgXIgQgGQADASAJARgAgIhXIgDAEIgDACQgEACgCADQAGAYgBAVQAKAAAFgDIABgBQAMgPgKgfIgJgIgAhNgkIAHABQAMACADgCIAAgBQgBgIgCgCQgKAIgJACgAg3gwQADADABAHIAOgNIgCgMgABMgnIABAAQAEAAAIgDQAKgEACgFQgWgBgOgEQACAFAJAMgAhRhFIAAABQALAIgBAEQgBACgGAEQgJAFgCAEIAGACQANAAATgSQgHgBgFABIgDABIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBIAAgBIACgBIASgCIACABIAOgNIgGAAQgWAAgUAFgAgkhCQADAGAAAHIAIgBIgCgSIgJAGgABlg4QgGgOgKgFIgBAAQgNAJgCAGIAgAEIAAAAgAAshDIAVAGQACgKAQgJIABgGIgCAAIgFgCQgYAJgJAMgAA0hcQgWAGgHAKIAAABIAQAGIAAAAQAKgNAYgJIAAgFQgJABgMADgAAHhVIAAABIALAGQAMgSAogFIgDgCQgJgDgEgEIgDgCQghAIgLATgAAChXQAMgVAggHIAAgBIACAAIAEgBIAAAAIADAAIADgBQgCgEgJgBQgLgBgNAGQgQAGgMAPIAAAAIAAABIAFAFIgBAAg");
	this.shape_15.setTransform(71.4,15.7,1,0.999);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgHAAQgFAAgFgFgAgHgIQgEAEAAAEQAAAFAEAEQADAEAEAAQAFAAAEgEQADgEAAgFQAAgEgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_16.setTransform(146.6,13.4,1,0.999);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AADAJQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCAAIAAAIIgEAAIAAgRIAGAAIAFABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAAIAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABIABAFgAgCAAIACAAQAAAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCAAg");
	this.shape_17.setTransform(146.6,13.4,1,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(2.5,2.4,145.7,32.5), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBiIAAhMIgph3IAiAAIAXBfIABAAIAWhfIAjAAIgpB3IAABMg");
	this.shape.setTransform(47.7,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVBiIgghPIgHAAIgEAAIAABPIgjAAIAAjDIA6AAQAZAAAMAQQAMAQAAAYQAAAWgIAOQgJANgMAHIAlBTgAgWgKIALAAQAQAAAGgEQAGgFAAgWQAAgMgEgIQgDgIgKAAIgWAAg");
	this.shape_1.setTransform(35.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrBiIAAjDIBTAAIAAAcIgwAAIAAAwIAiAAIAAAbIgiAAIAABAIA0AAIAAAcg");
	this.shape_2.setTransform(22.9,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARBiIghhvIgBAAIAABvIgjAAIAAjDIAlAAIAgBrIAAAAIAAhrIAkAAIAADDg");
	this.shape_3.setTransform(10.5,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRBiIAAjDIAiAAIAADDg");
	this.shape_4.setTransform(0.8,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXBiIgXhzIgWBzIgiAAIgojDIAiAAIAXCRIABAAIAXiRIAhAAIAXCRIAAAAIAYiRIAgAAIgnDDg");
	this.shape_5.setTransform(-12.7,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASBiIgihvIAAAAIAABvIgjAAIAAjDIAkAAIAgBrIABAAIAAhrIAjAAIAADDg");
	this.shape_6.setTransform(-34.9,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXBgQgKgDgGgHQgGgGgDgIQgDgIAAgHIAAhxQAAgIADgHQADgHAGgHQAGgGAKgEQAKgFAOAAQAaABAMAOQANAOAAAPIAABxQgBAHgDAIQgDAIgGAGQgGAHgKADQgJAEgNAAQgOAAgKgEgAgMhCQgEAGAAAEIAABwQAAAFAEAGQAFAFAIAAQAIAAADgFQAFgHAAgEIAAhwQAAgDgFgHQgDgGgIAAQgIAAgFAGg");
	this.shape_7.setTransform(-47.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-16,125.3,32);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbBaQgJgKAAgLIAAgSQAAgKAJgKQAIgLAVAAQASAAAKALQAIAKABALIAAARQgBALgIAKQgKAKgSAAQgVAAgIgKgAAvAsQgEAFAAACIAAASQAAADAEAFQACADAHAAQAFAAADgDQADgFAAgDIAAgRQAAgDgDgFQgDgEgFAAQgHAAgCAEgAhZBiICHjDIApAAIiHDDgAhTgdQgJgLAAgKIAAgSQAAgKAJgLQAIgLAVAAQATAAAIALQAJALAAAKIAAASQAAAKgJALQgIAKgTAAQgVAAgIgKgAhAhLQgCAEAAADIAAARQAAAEACAEQADAEAHAAQAFAAADgFQADgEAAgDIAAgRQAAgDgDgEQgDgFgFAAQgHAAgDAFg");
	this.shape.setTransform(37.7,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBfQgKgEgGgGQgHgGgCgIQgDgIAAgIIAAgPIAjAAIAAAPQAAAFAEAGQAFAFAHAAQAKAAAEgJQAFgKgBgLIAAgSIAAgOQABgKgHgGQgGgHgGAAQgGAAgDADQgDADgCAEIgiAAIAAheIBaAAIAAAcIg3AAIAAAjQACgDAGgCQAGgCADAAQAJAAAJAEQAJADAHAHQAIAGAEAJQAFAJgBALIAAAOIAAAUQAAAXgOASQgQARgYAAQgOAAgJgEg");
	this.shape_1.setTransform(20.7,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBiIAAinIgPAAIAAgUIAPgIIAiAAIAADDg");
	this.shape_2.setTransform(10.3,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBiIAAjDIBTAAIAAAcIgwAAIAAAwIAiAAIAAAbIgiAAIAABAIA0AAIAAAcg");
	this.shape_3.setTransform(-3.3,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSBiIgsjDIAmAAIAYCQIAAAAIAaiQIAlAAIgtDDg");
	this.shape_4.setTransform(-16,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXBiIgHguIghAAIgHAuIghAAIApjDIAiAAIAoDDgAAKAYIgKhFIAAAAIgLBFIAVAAg");
	this.shape_5.setTransform(-29.5,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBZQgOgLAAgVIAAgVIAjAAIAAASQAAAKAEAEQAFAFAGgBQAGABAEgFQAFgEAAgKQAAgHgDgGQgDgHgFgGIgdgdIgMgOQgFgFgDgGQgDgGgBgHIgBgRQAAgUANgMQAPgLAWgBQAWABAOALQAOANAAATIAAAOIgjAAIAAgIQAAgKgFgGQgEgFgGgBQgGABgFAEQgEAEAAAHQAAAHACAEQABAGAHAHIAhAnQALAMAGAKQAGALAAARQAAAVgPALQgPALgVAAQgUAAgQgLg");
	this.shape_6.setTransform(-42,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-16,119.2,32);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("with code", "normal 700 13px 'tk-museo-sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(59.2,-15.9);
	if(!lib.properties.webfonts['tk-museo-sans']) {
		lib.webFontTxtInst['tk-museo-sans'] = lib.webFontTxtInst['tk-museo-sans'] || [];
		lib.webFontTxtInst['tk-museo-sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("YELLOW15 ", "normal 700 13px 'tk-museo-sans'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(59,6.9);
	if(!lib.properties.webfonts['tk-museo-sans']) {
		lib.webFontTxtInst['tk-museo-sans'] = lib.webFontTxtInst['tk-museo-sans'] || [];
		lib.webFontTxtInst['tk-museo-sans'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(7,-17.9,104.1,42.5), null);


(lib.refresharea_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiaCVIAAkpIE1AAIAAEpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.9,31,29.9);


(lib.pinotnoircopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.WD_Daily();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,21.1,0.495,0.495,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinotnoircopy, new cjs.Rectangle(-22.5,-5.5,137,147.7), null);


(lib.owspanishbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.yellowbrick_300x250();
	this.instance.parent = this;
	this.instance.setTransform(141,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.owspanishbg, new cjs.Rectangle(141,79,885,733), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#006DC2","#94C1E4","#5BA1D7","#7CB3DF","#FFFFFF"],[0,0,0.357,0.702,1],-157.8,0,157.8,0).ss(0.1,1,1).p("A4p0hMAxTAAAMAAAApDMgxTAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,102,0.329)").s().p("A4pUhMAAAgpCMAxTAAAMAAAApCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.refresh_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAiQgPgOAAgUQAAgTAPgOQAOgPAUAAIAAAOQgPgBgKALQgLALAAANQAAAPALAKQAKALAPAAQANAAALgLQALgKAAgPIgCgEIgMARIgDgRIARgaIAZARIAEASIgRgLIAAAGQAAAUgOAOQgOAOgTABQgUgBgOgOg");

	this.instance = new lib.refresharea_btn();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-0.6);
	this.instance.compositeOperation = "lighter";
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.refresh_btn, new cjs.Rectangle(-17.2,-15.6,31,29.9), null);


(lib.button_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn_main_click = new lib.Symbol1();
	this.btn_main_click.parent = this;
	this.btn_main_click.setTransform(0.3,0,1,1,0,0,0,59.4,15.1);
	new cjs.ButtonHelper(this.btn_main_click, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("ApNCXIAAktISbAAIAAEtg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#006DC2","#94C1E4","#5BA1D7","#7CB3DF","#FFFFFF"],[0,0,0.357,0.702,1],0,12,117.1,12).ss(0.1,1,1).p("AAAADIAAgF");
	this.shape_1.setTransform(-57.3,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("ApNCXIAAktISbAAIAAEtg");
	this.shape_2.setTransform(0,0.1);

	this.text = new cjs.Text("with code", "normal 700 13px 'tk-museo-sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(0,-31.1);
	if(!lib.properties.webfonts['tk-museo-sans']) {
		lib.webFontTxtInst['tk-museo-sans'] = lib.webFontTxtInst['tk-museo-sans'] || [];
		lib.webFontTxtInst['tk-museo-sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("YELLOW15 ", "normal 700 13px 'tk-museo-sans'", "#003399");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(-0.1,-8.2);
	if(!lib.properties.webfonts['tk-museo-sans']) {
		lib.webFontTxtInst['tk-museo-sans'] = lib.webFontTxtInst['tk-museo-sans'] || [];
		lib.webFontTxtInst['tk-museo-sans'].push(this.text_1);
	}

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApNCWIAAkrISbAAIAAErg");
	this.shape_3.setTransform(0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#006DC2","#94C1E4","#5BA1D7","#7CB3DF","#FFFFFF"],[0,0,0.357,0.702,1],-66.6,0,66.6,0).ss(0.1,1,1).p("AKajjIAAHHI0zAAIAAnHg");
	this.shape_4.setTransform(-0.2,-0.1,0.894,0.637);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,255,0,0.278)").s().p("AqYDkIAAnHIUyAAIAAHHg");
	this.shape_5.setTransform(-0.2,-0.1,0.894,0.637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_main_click}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.btn_main_click}]},1).to({state:[{t:this.shape_3},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-33.1,118,48.3);


// stage content:
(lib.OWYellowTagWine_Retargeting_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_main_link.addEventListener("click", fl_ClickToGoToWebPage_1);
		
		function fl_ClickToGoToWebPage_1() {
			window.open(APPNEXUS.getClickTag(), "_blank");
		}
		
		
		
		
		/* Animate Horizontally
		Moves the symbol instance left or right across the stage by decreasing or increasing its x property within an Tick event.
		
		Instructions:
		1. The default direction of the animation is to the right.
		2. To change the direction of the animation to the left, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance moves, change the number 10 below to the number of pixels you want the symbol instance to move in each frame.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
	}
	this.frame_78 = function() {
		this.btn_main_link2.addEventListener("click", fl_ClickToGoToWebPage_1);
		
		function fl_ClickToGoToWebPage_1() {
			window.open(APPNEXUS.getClickTag(), "_blank");
		}
	}
	this.frame_125 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.refresh_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(0);
		}
		
		this.refresharea_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(0);
		}
	}
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(47).call(this.frame_125).wait(8).call(this.frame_133).wait(1));

	// refresh
	this.refresh_btn = new lib.refresh_btn();
	this.refresh_btn.parent = this;
	this.refresh_btn.setTransform(282.2,21.4,1.403,1.402,0,0,0,0.1,-0.4);
	this.refresh_btn.alpha = 0;
	this.refresh_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.refresh_btn).wait(125).to({_off:false},0).to({alpha:1},6).wait(3));

	// save XX 
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(383.4,99.1,1,1,0,0,0,0,15.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({regX:-0.1,regY:2,x:367.7,y:85.8},0).wait(1).to({x:352.3,y:85.9},0).wait(1).to({x:337},0).wait(1).to({x:321.9,y:86},0).wait(1).to({x:307},0).wait(1).to({x:292.2,y:86.1},0).wait(1).to({x:277.6},0).wait(1).to({x:263.1,y:86.2},0).wait(1).to({x:248.7},0).wait(1).to({x:234.6,y:86.3},0).wait(1).to({x:220.6},0).wait(1).to({x:219,y:86.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// winery
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(399.6,126.7,1,1,0,0,0,0,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regX:0.3,regY:2,x:385.3,y:113.4},0).wait(1).to({x:370.9},0).wait(1).to({x:356.7},0).wait(1).to({x:342.6},0).wait(1).to({x:328.6},0).wait(1).to({x:314.8},0).wait(1).to({x:301.2},0).wait(1).to({x:287.7},0).wait(1).to({x:274.4},0).wait(1).to({x:261.2},0).wait(1).to({x:248.2},0).wait(1).to({x:235.3},0).wait(1).to({x:222.6},0).wait(1).to({x:216.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// direct wines
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(411,153.2,1,1,0,0,0,0,15.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(1).to({regX:0.2,regY:2,x:394.5,y:139.9},0).wait(1).to({x:378},0).wait(1).to({x:361.7},0).wait(1).to({x:345.6},0).wait(1).to({x:329.7},0).wait(1).to({x:313.9},0).wait(1).to({x:298.4},0).wait(1).to({x:283},0).wait(1).to({x:267.9},0).wait(1).to({x:252.9},0).wait(1).to({x:238.1},0).wait(1).to({x:223.5},0).wait(1).to({x:218.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// mask cta (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADDT0IgCtmISmAAIACNmg");
	mask.setTransform(138.5,126.8);

	// CTA
	this.btn_main_link2 = new lib.button_cta();
	this.btn_main_link2.parent = this;
	this.btn_main_link2.setTransform(217,266.5);
	this.btn_main_link2._off = true;
	new cjs.ButtonHelper(this.btn_main_link2, 0, 1, 2, false, new lib.button_cta(), 3);

	var maskedShapeInstanceList = [this.btn_main_link2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link2).wait(55).to({_off:false},0).wait(1).to({regX:-0.2,regY:-8,x:216.9,y:252.7},0).wait(1).to({x:217,y:246.9},0).wait(1).to({y:241.3},0).wait(1).to({x:217.1,y:235.7},0).wait(1).to({x:217.2,y:230.1},0).wait(1).to({x:217.3,y:224.7},0).wait(1).to({y:219.3},0).wait(1).to({x:217.4,y:214},0).wait(1).to({x:217.5,y:208.8},0).wait(1).to({y:203.7},0).wait(1).to({x:217.6,y:198.6},0).wait(1).to({x:217.7,y:193.6},0).wait(1).to({y:188.7},0).wait(1).to({x:217.8,y:188.2},0).wait(65));

	// button mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0NTyIAAASIjzAAIAAsFIgBAAIAA8CMAvvAAAIAAcCIAUAAIAAMAMgsPAAFgABNNMISeAAIAAkrIygAAg");
	mask_1.setTransform(151.3,126.9);

	// button
	this.btn_main_link = new lib.button();
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(146.8,123.9);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.button(), 3);

	var maskedShapeInstanceList = [this.btn_main_link];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(134));

	// yellow tag
	this.instance_3 = new lib.pinotnoircopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-114.9,152,1,1,14,0,0,22.2,80.2);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:47.4,regY:69.8,rotation:13.3,x:-80.4,y:147.7},0).wait(1).to({rotation:12.6,x:-73,y:147.3},0).wait(1).to({rotation:11.8,x:-65.7,y:146.9},0).wait(1).to({rotation:11.1,x:-58.5,y:146.6},0).wait(1).to({rotation:10.4,x:-51.3,y:146.2},0).wait(1).to({rotation:9.7,x:-44.1,y:145.8},0).wait(1).to({rotation:9,x:-37,y:145.5},0).wait(1).to({rotation:8.4,x:-30,y:145.1},0).wait(1).to({rotation:7.7,x:-23,y:144.8},0).wait(1).to({rotation:7,x:-16.1,y:144.5},0).wait(1).to({rotation:6.3,x:-9.2,y:144.1},0).wait(1).to({rotation:5.7,x:-2.4,y:143.8},0).wait(1).to({rotation:5,x:4.3,y:143.5},0).wait(1).to({rotation:4.4,x:11,y:143.1},0).wait(1).to({rotation:3.7,x:17.6,y:142.8},0).wait(1).to({rotation:3.1,x:24.2,y:142.5},0).wait(1).to({rotation:2.4,x:30.7,y:142.2},0).wait(1).to({rotation:1.8,x:37.1,y:141.9},0).wait(1).to({rotation:1.2,x:43.5,y:141.5},0).wait(1).to({rotation:0.5,x:49.8,y:141.2},0).wait(1).to({rotation:-0.1,x:56,y:140.9},0).wait(1).to({rotation:-0.7,x:62.2,y:140.7},0).wait(1).to({rotation:-1.3,x:68.4,y:140.4},0).wait(1).to({rotation:-1.9,x:74.4,y:140.1},0).wait(1).to({rotation:-2,x:75.7,y:140},0).wait(109));

	// TWM logo
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156.8,29.7,0.641,0.641,0,0,0,75.4,19.6);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:75.3,regY:18.7,scaleX:0.66,scaleY:0.66,x:156.7,y:29.1,alpha:0.05},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:29,alpha:0.099},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.148},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.197},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.245},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:28.9,alpha:0.293},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:29,alpha:0.341},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:28.9,alpha:0.388},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.435},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.481},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.527},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:28.8,alpha:0.573},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.618},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.663},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.708},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:28.7,alpha:0.752},0).wait(1).to({scaleX:1,scaleY:1,y:28.8,alpha:0.796},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:28.7,alpha:0.839},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.882},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.925},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.967},0).wait(1).to({scaleX:1,scaleY:1,y:28.8,alpha:1},0).wait(112));

	// bg (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3gTmIAAgwMAAAgmbMAvBAAAMAAAAmbIAAAwg");
	mask_2.setTransform(150.5,125.4);

	// background
	this.instance_5 = new lib.owspanishbg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.1,81,0.373,0.373,0,0,0,576.3,317.6);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:583.5,regY:445.5,x:158.4,y:128.7},0).wait(1).to({x:158},0).wait(1).to({x:157.6},0).wait(1).to({x:157.2},0).wait(1).to({x:156.8},0).wait(1).to({x:156.4},0).wait(1).to({x:156},0).wait(1).to({x:155.6},0).wait(1).to({x:155.2},0).wait(1).to({x:154.8},0).wait(1).to({x:154.4},0).wait(1).to({x:154},0).wait(1).to({x:153.5},0).wait(1).to({x:153.1},0).wait(1).to({x:152.7},0).wait(1).to({x:152.3},0).wait(1).to({x:151.9},0).wait(1).to({x:151.5},0).wait(1).to({x:151.1},0).wait(1).to({x:150.7},0).wait(1).to({x:150.3},0).wait(1).to({x:149.9},0).wait(1).to({x:149.5},0).wait(1).to({x:149.1},0).wait(1).to({x:148.7},0).wait(1).to({x:148.3},0).wait(1).to({x:147.8},0).wait(1).to({x:147.4},0).wait(1).to({x:147},0).wait(1).to({x:146.6},0).wait(1).to({x:146.2},0).wait(1).to({x:145.8},0).wait(1).to({x:145.4},0).wait(1).to({x:145},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,121.1,503.4,260);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 29.97,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/OWYellowTagWine_Retargeting_300x250_atlas_.png", id:"OWYellowTagWine_Retargeting_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;