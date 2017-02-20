;
(function(win) {
    'use strict';

    // console.log($);



    var baseURI = './'


    var app = {
        isdev: true,
        container: document.getElementById('game-container'),
        stats: null,
        controls: null,
        camera: null,
        scene: null,
        renderer: null,
        raycaster: null,
        guiControls: null,
        flag: false,
        flag2: false,
        camertZ: 200,
        mainTween: null,
        h: null,
        isAnimate: false,
        isMove:false,
        preladoImgs: [
            baseURI+'img/homeinner.jpg',
            baseURI+'img/bg1_1.jpg',
            baseURI+'img/bg1_2.jpg',
            baseURI+'img/jiutongl.png',
            baseURI+'img/jiutongr.png',
            baseURI+'img/door.png',
            baseURI+'img/bg3.jpg'
        ], 
        mouse: new THREE.Vector2(),
        start: function() {

            var that = this
            this.preload(this.preladoImgs, function() {
                $('.loading').hide()
                that.initEvent();




            })

            this.init();
            this.animate();
            this.createObj();
            this.doMove();




        },
        init: function() {


            var width = window.innerWidth;
            var height = window.innerHeight;
            // 初始化相机
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
            // this.camera =new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 200 );
            this.camera.position.set(0, -5, this.camertZ)

            // 初始化场景
            this.scene = new THREE.Scene();
            this.scene.position.set(0, 2, 0)

            // 初始化渲染器
            this.renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true
            });

            this.renderer.setClearColor(0xFFFFFF, 0.0);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.sortObjects = false;
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMapSoft = true;



            // 初始化灯光
            var light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(1, 1, 1).normalize();
            this.scene.add(light);


            this.createObj()

            // 状态插件
            // this.stats = new Stats();
            // this.container.appendChild(this.stats.dom);
            this.container.appendChild(this.renderer.domElement);




            // 调试
            // 
            /*    this.guiControls = new function() {
                    this.camertZ = 0.01
                }

                var datGUI = new dat.GUI();

                datGUI.add(this.guiControls, 'camertZ', -40, 40)*/

            this.renderer.render(this.scene, this.camera)




        },

        initEvent: function() {
            var that = this
            $('#home_page').on('click', function() {
                $('#home_page').addClass('active')
                var st = setTimeout(function() {
                    clearTimeout(st)
                    that.isMove = true
                    $('#home_page').hide()
                }, 2000);
            });

        },

        createObj: function() {


            var that = this


            // var axis = new THREE.AxisHelper(10);
            // axis.position.set(0, 0, 0)
            // this.scene.add(axis);








            // 葡萄
            var pdmaterial = this.loadMap(baseURI+'img/putao.png')
            var pdmaterial2 = this.loadMap(baseURI+'img/putao1.png')
            for (var i = 1; i < 11; i++) {
                var width = 6.4 * 1.2
                var height = 4.85 * 1.2
                var sprite = new THREE.Sprite(pdmaterial2)
                console.log(width, height);
                sprite.scale.set(width, height, 1);
                sprite.position.set(8, 8, i * -100);
                this.scene.add(sprite)

                var sprite2 = new THREE.Sprite(pdmaterial)
                console.log(width, height);
                sprite2.scale.set(width, height, 1);
                sprite2.position.set(-8, 8, i * -100);
                this.scene.add(sprite2)
            }

            var doormaterial = this.loadMap(baseURI+'img/door.png')
            for (var i = 1; i < 9; i++) {
                var width = 12.26
                var height = 12.26
                var sprite = new THREE.Sprite(doormaterial)
                console.log(width, height);
                sprite.scale.set(width, height, 1);
                sprite.position.set(0, -7.5, (i - 1) * -150 - 18);
                this.scene.add(sprite)


            }




            /*奥地利红酒*/
            for (var i = 1; i < 8; i++) {
                var textmaterial = this.loadMap(baseURI+'img/guoyan/' + i + '.png')
                var width = 2.84 * .6
                var height = 2.98 * .6
                var isleft = i % 2 == 0 ? 1 : -1
                var sprite = new THREE.Sprite(textmaterial)
                sprite.scale.set(width, height, 1);
                sprite.position.set(0, -7.5, (i) * -150 - 18);
                this.scene.add(sprite)


            }

            // 年份红酒
            for (var i = 1; i < 13; i++) {

                var drinkmaterial = this.loadMap(baseURI+'img/drink/d' + i + '.png')

                var width = 6.32
                var height = 9.07


                var sprite = new THREE.Sprite(drinkmaterial)
                sprite.scale.set(width, height, 1);
                var isleft = i % 2 == 0 ? 1 : -1
                sprite.position.set(2 * isleft, -10, i * -80 - 140);
                this.scene.add(sprite)

                // var sprite2 = new THREE.Sprite(pdmaterial)
                // sprite2.scale.set(width, height, 1);
                // sprite2.position.set(-10, 15, i * -100);
                // this.scene.add(sprite2)
            }
            // 年的text
            for (var i = 1; i < 13; i++) {

                var textmaterial = this.loadMap(baseURI+'img/drink/t' + i + '.png')
                var width = 2.57
                var height = .84
                var sprite = new THREE.Sprite(textmaterial)

                sprite.scale.set(width, height, 1);
                sprite.position.set(0, -6, i * -80 - 140);
                this.scene.add(sprite)

            }


            // 酒桶

            var jiutonglmaterial = this.loadMap(baseURI+'img/jiutongl.png')
            for (var i = 1; i < 13; i++) {
                var width = 3.27
                var height = 2.39
                var sprite = new THREE.Sprite(jiutonglmaterial)
                var isleft = i % 2 == 0 ? 1 : -1
                sprite.scale.set(width, height, 1);
                sprite.position.set(3 * -isleft, -10, i * -80 - 140);
                this.scene.add(sprite)

            }

            var people1material = this.loadMap(baseURI+'img/people1.png')
            var people2material = this.loadMap(baseURI+'img/people2.png')
            var people3material = this.loadMap(baseURI+'img/people3.png')
            var people33material = this.loadMap(baseURI+'img/jiutongl.png')
            var people44material = this.loadMap(baseURI+'img/bgn.png')



            var people1sprite = new THREE.Sprite(people1material)
            people1sprite.scale.set(5.65, 8.88, 1);
            people1sprite.position.set(-5, -7.5, -100);
            this.scene.add(people1sprite)


            var people2sprite = new THREE.Sprite(people2material)
            people2sprite.scale.set(5.65, 8.88, 1);
            people2sprite.position.set(5, -7.5, -100);
            this.scene.add(people2sprite)


            var people3sprite = new THREE.Sprite(people3material)
            people3sprite.scale.set(8.76, 12.26, 1);
            people3sprite.position.set(-5, -8, -1300);
            this.scene.add(people3sprite)

            var people33sprite = new THREE.Sprite(people33material)
            people33sprite.scale.set(3.27 * 3, 2.39 * 3, 1);
            people33sprite.position.set(-5, -13, -1295);
            this.scene.add(people33sprite)


            var people44sprite = new THREE.Sprite(people44material)
            people44sprite.scale.set(10.24, 8.59, 1);
            people44sprite.position.set(0, -6, -1345);
            this.scene.add(people44sprite)

            // 开始阶段
            var odl1material = this.loadMap(baseURI+'img/imgs/gz.png')
            // var odl2material = this.loadMap(baseURI+'img/imgs/hourse1.png')
            // var odl3material = this.loadMap(baseURI+'img/imgs/hourse2.png')
            var odl4material = this.loadMap(baseURI+'img/imgs/hourse1.png')
            var odl5material = this.loadMap(baseURI+'img/imgs/dimeo.png')

            var odl1sprite = new THREE.Sprite(odl1material)
            odl1sprite.scale.set(3, 4.04, 1);
            odl1sprite.position.set(2, -6, 50);
            this.scene.add(odl1sprite)

            // var odl2sprite = new THREE.Sprite(odl2material)
            // odl2sprite.scale.set(4.00, 3.36, 1);
            // odl2sprite.position.set(-2, -8, 180);
            // this.scene.add(odl2sprite)

            // var odl3sprite = new THREE.Sprite(odl3material)
            // odl3sprite.scale.set(6.9, 4.59, 1);
            // odl3sprite.position.set(5, -8, 150);
            // this.scene.add(odl3sprite)


            var odl4sprite = new THREE.Sprite(odl4material)
           odl4sprite.scale.set(4.00, 3.36, 1);
            odl4sprite.position.set(-2, -8, 100);
            this.scene.add(odl4sprite)

              var odl5sprite = new THREE.Sprite(odl5material)
            odl5sprite.scale.set(3, 3.79, 1);
            odl5sprite.position.set(-2, -8, 20);
            this.scene.add(odl5sprite)




        },

        numRandom: function(num1) {
            var res = (Math.random > 0.5 ? 1 : -1) * Math.random() * num1
            console.log(res);

            return res
        },
        doTween: function(dist) {

            var that = this
            if (this.isAnimate) {
                return false
            }

            if (this.mainTween) {
                this.mainTween.stop()
                this.mainTween = null
                console.log(this.mainTween);
            }


            var timeDist = Math.abs(dist)
            console.log(timeDist);

            var cameraZ = this.camera.position.z;

            var cameraDist = dist * 2.5

            console.log(timeDist, cameraZ, cameraDist);

            this.mainTween = new TWEEN.Tween({ pos: 0 }).to({ pos: cameraDist }, timeDist * 50);
            this.mainTween.easing(TWEEN.Easing.Cubic.Out);
            this.mainTween.onUpdate(function() {

                if (cameraZ - this.pos > 200) {
                    that.camera.position.z = 200
                } else {
                    that.camera.position.z = cameraZ - this.pos

                }

            });
            this.mainTween.start();
            this.mainTween.onComplete(function() {
                // that.isAnimate = false
            })
            return this.mainTween;
        },
        render: function() {
            if(this.isMove){
                this.camera.position.z -= .15

            }
                
            // console.log( this.camera.position.z );
            // 
            // this.camera.position.z 
            // this.camera.position.z = this.camertZ
            // console.log( this.camera.position.z);
            // 


            // if (this.camera.position.z < -2900) {
            if (this.camera.position.z < -1325) {

                if ($('.bg .two').hasClass('active')) {

                } else {

                    $('.bg .one').removeClass('active')
                    $('.bg .two').addClass('active')
                }

            } else {

                if ($('.bg .one').hasClass('atcive')) {} else {
                    $('.bg .two').removeClass('active')
                    $('.bg .one').addClass('active')
                }


            }

            if (this.camera.position.z < -1325) {
                // console.log(1);
                // WWWESSEE
                if (this.flag2) {

                } else {
                    // $('.game-container').remove()
                    $('.swiper-container').addClass('active')
                    this.h.destroy()
                    // $('#music').get(0).play()
                    // $('.music_icon').data('on', 1)
                    // $('.music_icon').on('touchend', function() {
                    //     if ($(this).data('on') == 1) {
                    //         $('#music').get(0).pause()
                    //         $('.music_icon').data('on', 0)
                    //     } else {
                    //         $('#music').get(0).play()
                    //         $('.music_icon').data('on', 1)
                    //     }
                    // })



                }
                this.flag2 = true;

            }



            // if(this.camera.position.z<540){
            //      this.camera.position.z  -=1
            // }else{
            //     this.camera.position.z  -=1

            // }
            this.renderer.render(this.scene, this.camera);

        },

        doMove() {

            document.addEventListener('touchmove', function(e) {
                e.preventDefault()
                return false
            }, false);




            this.h = new Hammer(document);
            // h.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

            var startX;
            var that = this
                // this.h.on('panstart', function() {

            //     startX = that.camera.position.z

            // })

            // this.h.on('panmove', function(e) {
            //     // console.log(e);
            //     // that.camertZ = startX - e.deltaY

            //     // if ((startX - e.deltaY * .12) > 0) {
            //     //     that.camertZ = 0
            //     //     startX = 0
            //     // }
            // })
            this.h.on('panend', function(e) {

                console.log(e.deltaY);
                this.doTween(e.deltaY)
                    // startX = that.camera.position.z
            }.bind(this))


        },
        animate: function() {
            // app.stats.update();
            requestAnimationFrame(app.animate);
            app.render();
            TWEEN.update();
        },
        loadMap: function(url) {

            // var that = this

            // var textureLoader = new THREE.TextureLoader();

            // var texture = textureLoader.load(url)

            // var material = new THREE.SpriteMaterial({ map: texture });


            // return material;




            var texture = new THREE.TextureLoader().load(url)

            var material = new THREE.SpriteMaterial({
                map: texture,
            })

            return material;






        },
        preload: function(data, cb) {
            var imageArr = []
            var loadedimages = 0
            var imageloadpost = function() {
                console.log(parseInt(loadedimages / len * 100));
                loadedimages++;
                console.log(loadedimages);
                $('.loading p').html(parseInt(loadedimages / len * 100) + '%')
                if (loadedimages >= len - 1) {
                    cb && cb()
                }
            }

            var len = data.length
            for (var i = 0; i < len; i++) {
                imageArr[i] = new Image()
                imageArr[i].src = data[i]
                imageArr[i].onload = function() {
                    imageloadpost()
                }

            }
        },
        preloadAnimate() {

            var temp = 1

            var si = setInterval(function() {
                temp++;
                $('.loading img').attr('src', './img/loading' + temp % 2 + '.png')

            }, 100);
        }

    };

    app.start()







})(window)
