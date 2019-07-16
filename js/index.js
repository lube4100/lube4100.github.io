$(function(){

    //GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-111120698-4', {
        'page_title': '首頁',
        'page_path': '/index'
    });


    //vue
    var app = new Vue({
        el: '#wrap',
        components:{
            acomp:{
                template:`
<div class="stairs-content ss1">
<span class="title">《解靈人》</span>
<span class="word">在畢業製作時與組員共同完成了一套結合淡水古蹟的實境解謎遊戲——《解靈人》，並讓玩家應用解謎網站來闖關，希望藉由科技的形式增添遊戲的樂趣。這個專案從無到有都是我們一起發想、製作到辦活動與展覽，是一段非常艱辛但也很值得的過程。</span>
<span class="word word2">*此作品於2019淡江大學七系聯合資訊週榮獲第一名</span>

</div>
`
            },
            bcomp:{
                template:`
<div class="stairs-content ss2">
<span class="title">網路基因 實習</span>
<span class="word">經過在媒體學到的基礎，大四到網路基因的技術部實習了半年，實際到業界學習才發現自己有許多的不足，很慶幸在網基擁有很自由的學習空間以及很願意教的前輩們，讓我技能level up，並且有了實戰的經驗，也了解到網站專案的流程。</span>

</div>
`
            },
            ccomp:{
                template:`
<div class="stairs-content">
<span class="title">創意數位媒體教學實習中心</span>
<span class="word">因為參與了系上的實習媒體，加入了網站組，才更加燃起了我對架設網站的興趣，透過在讀書會中獲取新知並回家自主學習，在這裡磨練了許多寫網站的技巧，也累積了一些作品。</span>

</div>
`
            },
            dcomp:{
                template:`
<div class="stairs-content">
<span class="title">淡江大學高雄校友會</span>
<span class="word">在社團中擔任幹部，和同伴一起辦過許多大大小小的活動，讓大一新生有個溫暖的第二個家，也讓我在辦活動的過程中更學會人與人的相處與溝通，以及如何在團隊中互相合作、磨合與包容。</span>

</div>
`
            },
            ecomp:{
                template:`
<div class="stairs-content">
<span class="title">淡江大學資訊傳播學系</span>
<span class="word">在系上接觸到許多過去不熟悉技能，包含拍照技巧、照片編修、電腦繪圖、影音剪輯、行銷知識、數位行銷、程式設計等等，讓我能在學習這些技能的同時探索自己對哪方面較有興趣。</span>

</div>
`
            },


        },

        methods:{
            choosencomp:function(x){
                this.whichcomp=x+"comp"}
        },


        data: {
            screenWidth: document.body.clientWidth,
            whichcomp:'',
            whichcomp:'ecomp',
            stairNow:'e',
        },
        watch: {
            screenWidth (val) {
                this.screenWidth = val
                if (val <= 784) {
                    //                    $(".sec4").append("");
                }
            }
        },
        computed: {

        },
        mounted() {
            this.init();
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        methods: {
            init() {
                //fullpage
                $('#fullpage').fullpage({
                    autoScrolling:true,
                    scrollHorizontally: true,
                    anchors:['kv', 'about', 'experience', 'portfolio', 'contact'],
                    menu: '#nav',
                    onLeave: function (origin, destination, direction) {

                        if (origin == "2") {
                            $('.sec2').find('.pagetag').removeClass('movein');
                        }else if (origin == "3") {
                            $('.sec3').find('.pagetag').removeClass('movein');
                        }else if (origin == "4") {
                            $('.sec4').find('.pagetag').removeClass('movein');
                        }else if (origin == "5") {
                            $('.sec5').find('.pagetag').removeClass('movein');
                        }
                    },
                    afterLoad: function (origin, destination, direction) {

                        if (origin === "kv") {

                            setTimeout(function () {
                                $('.sec1').find('.kv-pic').addClass('show');
                            }, 100);
                            setTimeout(function () {
                                $('.sec1').find('.kv-pic img').addClass('show');
                                $('.sec1').find('span').addClass('show');
                            }, 500);
                            setTimeout(function () {
                                $('.sec1').find('span').addClass('movein');
                            }, 900);
                            setTimeout(function () {
                                $('.sec1').find('.line').addClass('show');
                            }, 1300);

                            gtag('config', 'UA-111120698-4', {
                                'page_title': 'page-kv',
                                'page_path': '/index_kv'
                            });

                        }else if(origin === "about") {

                            $('.sec2').find('.pagetag').addClass('movein');

                            gtag('config', 'UA-111120698-4', {
                                'page_title': 'page-about',
                                'page_path': '/index_about'
                            });


                        }else if(origin === "experience") {

                            $('.sec3').find('.pagetag').addClass('movein');

                            gtag('config', 'UA-111120698-4', {
                                'page_title': 'page-experience',
                                'page_path': '/index_experience'
                            });
                        }else if(origin === "portfolio") {

                            $('.sec4').find('.pagetag').addClass('movein');

                            gtag('config', 'UA-111120698-4', {
                                'page_title': 'page-portfolio',
                                'page_path': '/index_portfolio'
                            });
                        }else if(origin === "contact") {

                            $('.sec5').find('.pagetag').addClass('movein');

                            gtag('config', 'UA-111120698-4', {
                                'page_title': 'page-contact',
                                'page_path': '/index_contact'
                            });
                        }
                    }});

            },
            //experience more tag
            choosencomp(x) {
                this.whichcomp=x+"comp";
                this.stairNow=x;

            },
            //click btn
            go(now,object){

                if(object == 'menuOpen' || object == 'menuClose'){
                    $('body').toggleClass('menu-open');
                }
                else if(now == 'web'){
                    gtag('event', 'click', {
                        event_category: now + '_click',
                        event_action: 'web_' + object
                    });
                    if(object == 'tamstory'){
                        window.open("http://tamstory.azurewebsites.net");
                    }else if(object == 'soulMan'){
                        $('.sec4').find('.login_text').addClass('mark');
                        setTimeout(function () {
                            window.open("http://tamstory.azurewebsites.net/soulMan");
                            $('.sec4').find('.login_text').removeClass('mark');
                        }, 1000);
                    }else if(object == 'food'){
                        window.open("../web/food");
                    }else if(object == 'golden'){
                        window.open("https://campaign.cathaylife.com.tw/goldenplan/");
                    }else if(object == 'ice'){
                        window.open("../web/ice");
                    }else if(object == 'tkuFood'){
                        window.open("../web/tkuFood");
                    }
                }
            },

        }

    })
    })