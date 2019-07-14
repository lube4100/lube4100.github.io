window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-111120698-1', {
    'page_title': '首頁',
    'page_path': '/index'
});

$(function () {

    var data = [{
        "name": "不一樣乾麵",
        "img": "food_01.jpg",
        "purpose": "一般",
        "index": 0,
        "price": "100~200",
        "tel": "02 8773 1781",
        "addr": "106台北市大安區延吉街70巷5弄10號"
    }, {
        "name": "廖嬌米粉湯",
        "img": "food_02.jpg",
        "purpose": "一般",
        "index": 1,
        "price": "100~200",
        "tel": "02 2740 3714",
        "addr": "106台北市大安區延吉街72之12號"
    }, {
        "name": "台北城第1家炒泡麵",
        "img": "food_03.jpg",
        "purpose": "一般",
        "index": 2,
        "price": "100內",
        "tel": "0936 201 240",
        "addr": "106台北市大安區光復南路200巷25號"
    }, {
        "name": "建宏雞肉飯",
        "img": "food_04.jpg",
        "purpose": "部門聚餐",
        "index": 3,
        "price": "100內",
        "tel": "02 2773 9922",
        "addr": "106台北市大安區延吉街178號"
    }, {
        "name": "阿財魚翅羹",
        "img": "food_05.jpg",
        "purpose": "部門聚餐",
        "index": 4,
        "price": "100內",
        "tel": "02 2776 9930",
        "addr": "106台北市大安區延吉街157號"
    }, {
        "name": "5味臭臭鍋 延吉店",
        "img": "food_06.jpg",
        "purpose": "慶生",
        "index": 5,
        "price": "100~200",
        "tel": "02 2709 0286",
        "addr": "106台北市大安區延吉街242-4號"
    }, {
        "name": "Okaeri お帰り 你回來啦拉麵",
        "img": "food_07.jpg",
        "purpose": "慶生",
        "index": 6,
        "price": "200以上",
        "tel": "02 8772 7832",
        "addr": "106台北市大安區延吉街60號"
    }]

    var app = new Vue({
        el: '#wrap',
        data: {
            newtitle: '',
            subscriptionIsShow: false,
            subscriptionIsOpen: false,
            setting_button: {
                text: 'more setting'
            },
            selectIsSeen: false,
            select1IsOpen: false,
            select2IsOpen: false,
            selectTitle: {
                price: '價錢區間',
                type: '主食'
            },
            selectItem: {
                price: '',
                type: ''
            },
            priceItem: [
                { price: '100內' },
                { price: '100~200' },
                { price: '200以上' }
            ],
            typeItem: [
                { type: '麵食' },
                { type: '米飯' },
                { type: '麵包' }
            ],
            menu_iconIsOpen: false,
            list: {
                title: ''
            },
            status: {
                IsNoodle: false,
                IsRice: false,
                IsBread: false,
                IsAll: false
            },
            lightboxIsOpen: false,
            theTop: '',
            hasClick: false,
            subscription: {
                email: ''
            },
            mailAlert: '',
            contact: {
                name: '',
                email: '',
                text: ''
            },
            eat_box_data: null,
            type: '',
            stores: null
        },
        watch: {},
        computed: {},
        mounted() {
            this.init();
            this.GetRequest();
            $('#kv .slider').slick({
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: $('.arrow-left'),
                nextArrow: $('.arrow-right'),
                appendDots: $('.dots-nav'),
                customPaging: function (slider, i) {
                    return $('<button></button>');
                }
            });

            // 訂閱按鈕出現/隱藏
            window.addEventListener('scroll', () => {
                this.theTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (this.theTop > 150) {
                    this.subscriptionIsShow = true;
                } else {
                    this.subscriptionIsShow = false;
                }
            }, true);
        },
        methods: {
            init() {
                //wow進場動態
                new WOW().init();
            },
            //取網址後的參數
            GetRequest() {
                var ary = '';
                var url = location.search; //獲取url中"?"符後的字符串
                var theRequest = new Object();
                if (url.indexOf("?") != -1) { //判斷是否有參數
                    ary = (url.split('?food=')[1].split('&'))[0]; //獲取所有除問號的所有符串
                } else {
                    location
                        .search
                        .indexOf("?")
                    ary = '';
                }
                (ary === '') ?
                    this.type = 'noodle': this.type = ary;

                this.items();
                // return ary;
            },
            //依網址後的參數篩選類別 //載入店家列表
            items() {
                console.log(this.type);
                if (this.type == "rice") {
                    this.newtitle = "米飯";
                }
                if (this.type == "bread") {
                    this.newtitle = "麵包";
                }
                if (this.type == "all") {
                    this.newtitle = "";
                }
                if (this.type == 'noodle') { //沒有參數時 預設為麵食
                    this.newtitle = "麵食";
                }
                //載入店家列表
                this.new_list();
            },
            menu_btn(now, page) {
                if (now == 'menu' || now == 'menu-m' || now == 'kv_arrow') {
                    //選單點擊下滑
                    var new_page = '#' + page;
                    $('html, body').animate({
                        scrollTop: $(new_page)
                        .offset()
                        .top
                    }, 600);
                    //ga
                    gtag('event', 'click', {
                        event_category: now + '_click',
                        event_action: 'go_' + page
                    });
                    //點完手機版選單後 選單關閉
                    if (now == 'menu-m') {
                        this.menu_iconIsOpen = !this.menu_iconIsOpen;
                    }
                }
            },
            //手機版選單icon
            menu_icon() {
                this.menu_iconIsOpen = !this.menu_iconIsOpen;
            },
            settingOpen() {
                this.selectIsSeen = !this.selectIsSeen;
                this.setting_button.text = this.selectIsSeen ?'close setting' :'more setting';
                if (this.selectIsSeen == true) {
                    this.selectTitle.price = '價錢區間';
                    this.selectTitle.type = '主食';
                }
            },
            select_out(item) {
                $('.select' + item + '-1').slideToggle();
                if (item == '1') {
                    this.select1IsOpen = !this.select1IsOpen;
                }else {
                    this.select2IsOpen = !this.select2IsOpen;
                }
            },
            select_in(item,option) {
                $('.select' + item + '-1').slideToggle();
                if (item == '1') {
                    this.selectItem.price = option;
                    this.selectTitle.price = option;
                    this.select1IsOpen = !this.select1IsOpen;
                } else {
                    this.selectItem.type = option;
                    this.selectTitle.type = option;
                    this.select2IsOpen = !this.select2IsOpen;
                }
            },
            //eat_lightbox
            eat_box() {
                gtag('event', 'click', {
                    event_category: 'eat_btn',
                    event_action: 'choose_eat'
                });
                var nel = this;

                $.ajax({
                    method: "POST",
                    url: "https://php.webgene.com.tw:82/food/backend/api2.php",
                    data: {
                        price: this.selectItem.price,
                        type: this.selectItem.type
                    },
                    success: function (result) {

                        nel.eat_box_data = result;
                        // console.log(nel.eat_box_data.data[0]);
                        nel.lightboxIsOpen = true;
                        nel.selectIsSeen = false;
                        nel.setting_button.text = nel.selectIsSeen ?'close setting' :'more setting';
                        nel.selectItem.price = '';
                        nel.selectItem.type = '';
                        
                    },
                    error: function (result) {
                        console.log(result)
                    }
                });

            },
            //依list選取到的項目 //載入店家列表
            food_list(item, now) {
                gtag('event', 'click', {
                    event_category: 'list_click',
                    event_action: 'item_' + now
                });
                this.newtitle = item;
                this.type = now;
                

            },
            //載入店家列表  //api.php
            new_list() {
                var $this = this;
                // console.log(title)
                $.ajax({
                    method: "GET",
                    url: "https://php.webgene.com.tw:82/food/backend/api.php",

                    success: (result) => {
                        this.stores = result;
                        console.log(result);
                        
                    },
                    error: function (result) {
                        //console.log(result)
                        console.log('error')
                    }
                });
            },
            //subscription //發信到填寫的email  //mail_select.php
            sub_btn() {

                var rul = this;
                //取input中的mail
                var your_mail = rul.subscription.email;
                //email格式正則
                var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                //驗證email格式
                if (your_mail.search(emailRule) != -1) {

                    $.ajax({
                        method: "POST",
                        url: "https://php.webgene.com.tw:82/food/backend/mail_select.php",
                        data: {
                            your_mail: your_mail
                        },
                        success: function (result) {
                            gtag('event', 'click', {
                                event_category: 'subscription_btn',
                                event_action: 'subscription_submit'
                            });

                            console.log(result);

                            if (result.isdescribe == "ok") {
                                rul.mailAlert = '您的信箱已經訂閱囉！';
                            }
                            if (result.isdescribe == "no") {
                                rul.subscriptionIsOpen = false;
                                rul.subscription.email = '';
                                rul.mailAlert = '';
                            }

                        },
                        error: function (result) {
                            console.log(result)
                            alert('error');
                        }
                    });
                } else {
                    this.mailAlert = '請填入正確的email格式';
                }
            },

            //把留言內容寄信給自己  //mail_me.php
            contact_btn() {
                gtag('event', 'click', {
                    event_category: 'contact_btn',
                    event_action: 'contact_submit'
                });
                if (this.hasClick)
                    return;
                this.hasClick = true;
                var ral = this;

                console.log(ral.contact.name, ral.contact.email, ral.contact.text)

                $.ajax({
                    method: "POST",
                    url: "https://php.webgene.com.tw:82/food/backend/mail_me.php",
                    data: {
                        contact_name: this.contact.name,
                        contact_email: this.contact.email,
                        contact_text: this.contact.text
                    },
                    success: function (result) {
                        console.log(result);
                        alert('Thank you for your reply!');
                        ral.contact.name = '';
                        ral.contact.email = '';
                        ral.contact.text = '';
                        ral.hasClick = false;
                    },
                    error: function (result) {
                        console.log(result)
                        ral.hasClick = false;

                    }
                });
            }
        }

    })

    })