$(function() {
  //GA
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-111120698-4', {
    page_title: '首頁',
    page_path: '/index',
  })

  //vue
  var app = new Vue({
    el: '#wrap',
    data: {
      screenWidth: document.body.clientWidth,
      activeExperience: 'ruten',
    },
    watch: {
      screenWidth(val) {
        this.screenWidth = val
      },
    },
    computed: {},
    mounted() {
      this.init()
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
          autoScrolling: true,
          scrollHorizontally: true,
          anchors: ['kv', 'about', 'experience', 'portfolio', 'contact'],
          menu: '#nav',
          onLeave: function(origin, destination, direction) {
            if (origin == '2') {
              $('.sec2')
                .find('.pagetag')
                .removeClass('movein')
            } else if (origin == '3') {
              $('.sec3')
                .find('.pagetag')
                .removeClass('movein')
            } else if (origin == '4') {
              $('.sec4')
                .find('.pagetag')
                .removeClass('movein')
            } else if (origin == '5') {
              $('.sec5')
                .find('.pagetag')
                .removeClass('movein')
            }
          },
          afterLoad: function(origin, destination, direction) {
            if (origin === 'kv') {
              setTimeout(function() {
                $('.sec1')
                  .find('.kv-pic')
                  .addClass('show')
              }, 100)
              setTimeout(function() {
                $('.sec1')
                  .find('.kv-pic img')
                  .addClass('show')
                $('.sec1')
                  .find('span')
                  .addClass('show')
              }, 500)
              setTimeout(function() {
                $('.sec1')
                  .find('span')
                  .addClass('movein')
              }, 900)
              setTimeout(function() {
                $('.sec1')
                  .find('.line')
                  .addClass('show')
              }, 1300)

              gtag('config', 'UA-111120698-4', {
                page_title: 'page-kv',
                page_path: '/index_kv',
              })
            } else if (origin === 'about') {
              $('.sec2')
                .find('.pagetag')
                .addClass('movein')

              gtag('config', 'UA-111120698-4', {
                page_title: 'page-about',
                page_path: '/index_about',
              })
            } else if (origin === 'experience') {
              $('.sec3')
                .find('.pagetag')
                .addClass('movein')

              gtag('config', 'UA-111120698-4', {
                page_title: 'page-experience',
                page_path: '/index_experience',
              })
            } else if (origin === 'portfolio') {
              $('.sec4')
                .find('.pagetag')
                .addClass('movein')

              gtag('config', 'UA-111120698-4', {
                page_title: 'page-portfolio',
                page_path: '/index_portfolio',
              })
            } else if (origin === 'contact') {
              $('.sec5')
                .find('.pagetag')
                .addClass('movein')

              gtag('config', 'UA-111120698-4', {
                page_title: 'page-contact',
                page_path: '/index_contact',
              })
            }
          },
        })
      },
      //click btn
      go(now, object) {
        if (object == 'menuOpen' || object == 'menuClose') {
          $('body').toggleClass('menu-open')
        } else if (now == 'web') {
          gtag('event', 'click', {
            event_category: now + '_click',
            event_action: 'web_' + object,
          })
          if (object == 'tamstory') {
            window.open('http://tamstory.azurewebsites.net')
          } else if (object == 'food') {
            window.open('../web/food')
          }
        }
      },
      sendGA(text) {
        gtag('event', 'click', {
          event_category: 'web_click',
          event_action: 'web_' + text,
        })
      },
    },
  })
})
