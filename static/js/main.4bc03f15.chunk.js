(this.webpackJsonpthecryptopurge=this.webpackJsonpthecryptopurge||[]).push([[0],{49:function(e,t,a){(function(e){e.__DEV__=!1,window.PIXI=a(50),window.p2=a(51),window.Phaser=a(52)}).call(this,a(26))},53:function(e,t,a){},54:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),o=a(36),n=a.n(o),r=(a(49),a(53),a(27)),l=a(6),d=(a(54),a(7)),c=Object(l.g)((function(e){var t=e.history,a=Object(s.useCallback)((function(){t.push("/game")}),[t]);return Object(d.jsx)("section",{className:"container mx-auto min-h-screen flex flex-col",children:Object(d.jsxs)("div",{className:"min-h-screen flex flex-col justify-center",children:[Object(d.jsx)("div",{className:"header",children:"\ud83d\udc4b Hey there!"}),Object(d.jsx)("div",{className:"bio",children:"Connect your Ethereum wallet and give us a like!"}),Object(d.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded max-w-xs mx-auto",onClick:a,children:"Like!"})]})})})),h=a(33),u=a(44),g=a(4),y=a.n(g);var m=a(1),p=a(5),b=a(3),f=a(2),j=a(39),w=a.n(j),v=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"preload",value:function(){this.loaderBg=this.add.sprite(this.game.world.centerX,this.game.world.centerY,"loaderBg"),this.loaderBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY,"loaderBar"),[this.loaderBg,this.loaderBar].forEach((function(e){e.anchor.setTo(.5)})),this.load.setPreloadSprite(this.loaderBar),this.load.image("level1","assets/images/level1.jpg"),this.load.image("sonar","assets/images/sonar.png"),this.load.image("sonar-logo-rest","assets/images/sonar-logo-rest.png"),this.load.image("sonar-logo-ring","assets/images/sonar-logo-ring.png"),this.load.image("sonar-logo","assets/images/sonar-logo.png"),this.load.image("bullet","assets/images/bullet.png"),this.load.spritesheet("player","assets/images/player.png",80,90),this.load.spritesheet("legs","assets/images/legs.png",80,100),this.load.audio("music",["assets/audios/music.ogg","assets/audios/music.mp3"]),this.load.audio("shoot",["assets/audios/shoot.ogg","assets/audios/shoot.mp3"])}},{key:"create",value:function(){this.state.start("Game")}}]),a}(y.a.State),O=a(43),x=a(25),k=a.n(x),S={gameWidth:1200,gameHeight:800,localStorageName:"phaser-template",serverUrl:__DEV__?"http://localhost:8081":"https://phaser-realtime-basic-server.herokuapp.com"},C=a(10),A=a(11),B=a(8),E=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s,i=e.game,o=e.x,n=e.y,r=e.asset,l=e.id;return Object(m.a)(this,a),(s=t.call(this,i,o,n)).id=l,i.add.existing(Object(C.a)(s)),s.anchor.set(.5),i.physics.arcade.enable(Object(C.a)(s)),s.legs=i.add.sprite(0,0,"legs"),s.legs.anchor.set(.5),s.legs.animations.add("walk",null,10,!0),i.physics.arcade.enable(s.legs),s.addChild(s.legs),s.torso=i.add.sprite(o,n,r),s.torso.anchor.setTo(.5,.7),s.torso.frame=2,s.torso.animations.add("walk",y.a.ArrayUtils.numberArray(2,9),16,!0),i.physics.arcade.enable(s.torso),s.body.setCircle(s.legs.height/4,-s.legs.width/10,-s.legs.height/10),s.legs.collideWorldBounds=!0,s.torso.collideWorldBounds=!0,s.body.collideWorldBounds=!0,s.body.allowRotation=!1,s}return Object(p.a)(a,[{key:"update",value:function(){this.torso.x=this.x,this.torso.y=this.y,this.torso.angle=this.legs.angle}},{key:"destroy",value:function(){this.torso.destroy(),Object(A.a)(Object(B.a)(a.prototype),"destroy",this).call(this)}}]),a}(y.a.Sprite),D=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s,i=e.game,o=e.x,n=e.y,r=e.asset,l=e.id;return Object(m.a)(this,a),(s=t.call(this,{game:i,x:o,y:n,asset:r,id:l})).maxSpeed=300,s.fireRate=200,console.log("PlayerId: ".concat(l)),i.camera.follow(Object(C.a)(s)),s.cursor=i.input.keyboard.createCursorKeys(),s.spaceButton=i.input.keyboard.addKey(y.a.Keyboard.SPACEBAR),s.wasd={up:i.input.keyboard.addKey(y.a.Keyboard.W),left:i.input.keyboard.addKey(y.a.Keyboard.A),right:i.input.keyboard.addKey(y.a.Keyboard.D),down:i.input.keyboard.addKey(y.a.Keyboard.S)},s.shootingSound=i.add.audio("shoot"),s.weapon=i.add.weapon(30,"bullet"),s.weapon.bulletKillType=y.a.Weapon.KILL_WORLD_BOUNDS,s.weapon.bulletSpeed=600,s.weapon.fireRate=s.fireRate,s.weapon.trackSprite(s.torso,0,0,!1),s.weapon.bullets.setAll("anchor.x",-6),s.weapon.bullets.setAll("anchor.y",0),s.weapon.onFire.add(s.newShot,Object(C.a)(s)),s}return Object(p.a)(a,[{key:"update",value:function(){Object(A.a)(Object(B.a)(a.prototype),"update",this).call(this),this.body.velocity.x=0,this.body.velocity.y=0,this.legs.body.angularVelocity=0,this.cursor.left.isDown||this.wasd.left.isDown?this.legs.body.angularVelocity=-this.maxSpeed:(this.cursor.right.isDown||this.wasd.right.isDown)&&(this.legs.body.angularVelocity=this.maxSpeed);var e=null;if((this.cursor.up.isDown||this.wasd.up.isDown)&&(e=1),(this.cursor.down.isDown||this.wasd.down.isDown)&&(e=-1),e){var t=this.legs.angle-90;this.game.physics.arcade.velocityFromAngle(t,e*this.maxSpeed,this.body.velocity),this.torso.animations.play("walk"),this.legs.animations.play("walk")}else this.torso.animations.stop(),this.legs.animations.stop(),this.torso.frame=2,this.legs.frame=0;this.spaceButton.isDown&&(this.torso.animations.stop(),this.torso.frame=0,this.weapon.fireAngle=this.torso.angle-90,this.weapon.fire())}},{key:"newShot",value:function(){this.shootingSound.play()}}]),a}(E),K=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s,i=e.game,o=e.x,n=e.y,r=e.asset,l=e.id;return Object(m.a)(this,a),s=t.call(this,{game:i,x:o,y:n,asset:r,id:l}),console.log("EnemyId: ".concat(l)),s.body.moves=!1,s.body.immovable=!0,s}return a}(E),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s,i=e.game,o=e.x,n=e.y,r=e.text;return Object(m.a)(this,a),(s=t.call(this,i,o,n,r)).font="Bangers",s.padding.set(10,16),s.fontSize=70,s.fill="white",s.smoothed=!1,s.anchor.setTo(.5),s.wordWrap=!0,s.wordWrapWidth=800,s.align="center",s}return a}(y.a.Text),P=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"init",value:function(){this.socket=O.a(S.serverUrl),this.socket.on("player.created",this.playerCreated.bind(this)),this.socket.on("player.enemyCreated",this.createEnemy.bind(this)),this.socket.on("player.disconnect",this.destroyPlayer.bind(this)),this.socket.on("enemy.disconnect",this.destroyEnemy.bind(this)),this.socket.on("enemy.position",this.updateEnemy.bind(this)),this.lastTimeSocketCaptured=0,this.socketDelay=1/60}},{key:"preload",value:function(){}},{key:"create",value:function(){this.game.physics.startSystem(y.a.Physics.ARCADE),this.game.physics.arcade.checkCollision.down=!0,this.add.image(0,0,"level1"),this.game.world.setBounds(0,0,3840,1600),this.banner=new T({game:this.game,x:this.world.centerX,y:this.world.centerY-50,text:"The Crypto Purge \ud83d\udcb8 \nfor                     "}),this.game.add.existing(this.banner),this.logo=this.add.image(this.banner.x-80,this.banner.y+0,"sonar-logo"),this.logo.scale.setTo(.055),this.enemies=this.game.add.group(),this.enemies.enableBody=!0,this.music=this.game.add.audio("music"),this.music.loop=!0,this.playerLastPosition={},this.socket.emit("player.newPlayer","username")}},{key:"update",value:function(){if(this.player){this.game.physics.arcade.collide(this.player,this.enemies);var e={x:this.player.x,y:this.player.y,legsAngle:this.player.legs.angle,legsFrame:this.player.legs.frame,torsoFrame:this.player.torso.frame};this.game.time.now>this.lastTimeSocketCaptured&&!k.a.isEqual(this.playerLastPosition,e)&&(this.lastTimeSocketCaptured=this.game.time.now+this.socketDelay,this.socket.emit("player.movement",e))}}},{key:"playerCreated",value:function(e){var t=this,a=e.player,s=e.enemies;this.player=new D({game:this.game,x:this.world.centerX,y:this.world.centerY+170,asset:"player",id:a.id}),k.a.forEach(s,(function(e){return t.createEnemy(e)}))}},{key:"createEnemy",value:function(e){var t=e.id,a=e.x,s=e.y,i=e.legsAngle,o=void 0===i?0:i;this.enemies.add(new K({game:this.game,x:a,y:s,asset:"player",id:t})).legs.angle=o}},{key:"updateEnemy",value:function(e){var t=e.id,a=e.x,s=e.y,i=e.legsAngle,o=e.legsFrame,n=e.torsoFrame,r=k.a.find(this.enemies.children,{id:t});r&&(r.x=a,r.y=s,r.legs.angle=i,r.legs.frame=o,r.torso.frame=n)}},{key:"destroyPlayer",value:function(){this.player.destroy()}},{key:"destroyEnemy",value:function(e){var t=k.a.find(this.enemies.children,{id:e});t&&t.destroy()}},{key:"render",value:function(){__DEV__&&(this.player&&(this.game.debug.spriteInfo(this.player,32,32),this.game.debug.body(this.player)),this.enemies.forEachAlive((function(e){this.game.debug.body(e,"rgba(255, 0, 0, 0.5)")}),this))}}]),a}(y.a.State),_=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"init",value:function(){this.stage.disableVisibilityChange=!0,this.scale.scaleMode=y.a.ScaleManager.SHOW_ALL,this.scale.fullScreenScaleMode=y.a.ScaleManager.EXACT_FIT,this.scale.pageAlignHorizontally=!0,this.game.input.keyboard.addKeyCapture([y.a.Keyboard.LEFT,y.a.Keyboard.RIGHT,y.a.Keyboard.UP,y.a.Keyboard.DOWN,y.a.Keyboard.SPACEBAR]),this.fontsReady=!1,this.fontsLoaded=this.fontsLoaded.bind(this),this.state.add("Splash",v),this.state.add("Game",P)}},{key:"preload",value:function(){var e=this;w.a.load({google:{families:["Bangers"]},active:function(){return e.fontsLoaded()}}),this.add.text(this.world.centerX,this.world.centerY,"loading fonts",{font:"16px Arial",fill:"#dddddd",align:"center"}).anchor.setTo(.5,.5),this.load.image("loaderBg","./assets/images/loader-bg.png"),this.load.image("loaderBar","./assets/images/loader-bar.png")}},{key:"render",value:function(){this.fontsReady&&this.state.start("Splash")}},{key:"fontsLoaded",value:function(){this.fontsReady=!0}}]),a}(y.a.State),L={width:"100%",height:"100%",renderer:y.a.CANVAS,state:_},R=Object(l.g)((function(){var e=Object(s.useRef)(null);return function(e,t){var a=Object(s.useState)(),i=Object(u.a)(a,2),o=i[0],n=i[1];Object(s.useEffect)((function(){if(!o&&t.current){var a=new y.a.Game(Object(h.a)(Object(h.a)({},e),{},{parent:t.current}));n(a)}return function(){null===o||void 0===o||o.destroy()}}),[e,t,o])}(L,e),Object(d.jsx)("section",{className:"min-h-screen flex flex-col",children:Object(d.jsx)("div",{ref:e,className:"flex-1"})})}));a(65);var F=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/home",component:c,exact:!0}),Object(d.jsx)(l.b,{path:"/game",component:R,exact:!0}),Object(d.jsx)(l.b,{path:"/",render:function(){return Object(d.jsx)(l.a,{to:"/home"})},exact:!0})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),o(e),n(e)}))};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),W()}},[[66,1,2]]]);
//# sourceMappingURL=main.4bc03f15.chunk.js.map