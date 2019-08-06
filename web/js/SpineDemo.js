 //初始化舞台
 Laya.init(1334,750);

 Laya.Stat.show();
 //Laya.stage.bgColor = null;
 Laya.stage.bgColor = "#ffffff";
 //创建一个Skeleton对象 
 var skeleton = new Laya.Skeleton();
 //添加到舞台
 Laya.stage.addChild(skeleton);
 skeleton.pos(600,400);
 skeleton.scale(0.8, 0.8);
      /*
	 //创建一个Skeleton对象 
	 var skeleton = new Laya.Skeleton();
	 //添加到舞台
	 Laya.stage.addChild(skeleton);
	 skeleton.pos(600,400);
	 skeleton.scale(0.8, 0.8);
	 //通过加载直接创建动画
	 skeleton.load("res/spine/kldp_spine_loding.sk");
*/
 (function()
 {
	 var Sprite  = Laya.Sprite;
	 var Stage   = Laya.Stage;
	 var Texture = Laya.Texture;
	 var Browser = Laya.Browser;
	 var Handler = Laya.Handler;
	 var WebGL   = Laya.WebGL;
	 var skin = "res/btn.png";
	 (function()
	 {
		 // 不支持WebGL时自动切换至Canvas
		// Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
		// Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		// Laya.stage.alignH = Stage.ALIGN_CENTER;
		// Laya.stage.scaleMode = "showall";
		// Laya.stage.bgColor = "#ffffff";
		 showApe();
		 onLoaded();
	 })();
	 function showApe()
	 {
		 // 方法1：使用loadImage
		 var ape = new Sprite();
		 Laya.stage.addChild(ape);
		 ape.loadImage("res/layabox.png");        
	 }

	function onLoaded()
	{
		//创建一个Button实例
		var btn = new Laya.Button(skin);
		var wh = document.body.clientWidth;

		//将Button添加到舞台上
		Laya.stage.addChild(btn);
		//设置Button相关属性
		btn.width = 100;
		btn.height = 50;
		btn.pos(wh/2-200,100);
		btn.label = "加载动画";
		btn.on(Laya.Event.CLICK,this,display_alert);

		var btn1 = new Laya.Button(skin);
		//将Button添加到舞台上
		Laya.stage.addChild(btn1);
		//设置Button相关属性
		btn1.width = 100;
		btn1.height = 50;
		btn1.pos(wh/2+100,100);
		btn1.label = "清除动画";
		btn1.on(Laya.Event.CLICK,this,display_alert1);			
	}

	function display_alert()
  {
  	//alert("加载动画") 
	  //通过加载直接创建动画
	  skeleton.load("res/spine/kldp_spine_loding.sk");
	  skeleton.visible=true;
  }

  function display_alert1()
  {
  	//alert("清除动画") 
	  //通过加载直接创建动画
	  skeleton.visible=false;
  }

 })();

 
