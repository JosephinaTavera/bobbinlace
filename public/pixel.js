
	angular.module('animateApp.directives', [])
		.directive('bobbinSheetRunner', function () {
       "use strict";
       return {}
		var stage;
		var sunShape;
		function init()
		{
			stage = new createjs.Stage("stage-canvas");
			var bgShape = new createjs.Shape();
			bgShape.graphics.beginLinearGradientFill(
				["#728FCE", "#DEE0D5", "#DEE0D5", "#F4A460"],
				[.2, .6, .63,.9],
				0,0,
				0,stage.canvas.height
				);
			bgShape.graphics.drawRect(
				0,
				0,
				stage.canvas.width,
				stage.canvas.height
				);
			bgShape.graphics.endFill();
			stage.addChild(bgShape);
			sunShape = new createjs.Shape();
			sunShape.graphics.beginFill("#F00");
			sunShape.graphics.drawCircle(0,0,25);
			sunShape.graphics.endFill();
			sunShape.x=25;
			sunShape.y=25;
			stage.addChild(sunShape);
			createjs.Tween.get(sunShape, {loop:true})
				.to({x:525,y:375}, 3000, createjs.Ease.quintIn)
				.wait(2000)
				.to({x:25, y:25}, 3000, createjs.Ease.circOut);
			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick", tickHandler);
			stage.update();
		}
		function tickHandler(e)
		{
			stage.update();
		}
	});
