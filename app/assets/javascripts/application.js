// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery/dist/jquery.js
//= require bootstrap/dist/js/bootstrap.min
//= require_tree .

// $(function(){
//
//     $('.login').click(function(){
//         $('.login-modal-wrapper').show();
//     });
//
//     $('.signup').click(function(){
//         $('.signup-modal-wrapper').show();
//     });
//
//
// })



$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  });

  $('.change-btn').click(function() {
    // 変数$displaySlideを定義してください
    var $displaySlide = $(".active");

    // 変数$displaySlideからactiveクラスを取り除いてください
    $displaySlide.removeClass("active");

    // ifとelseを用いて、$displaySlideの前もしくは次の要素に
    // activeクラスをつけてください
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    }else {
      $displaySlide.prev().addClass('active');
    }

  });
});
$(function() {

  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
});
// $(function() {
//   // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
//   $("#language-wrapper").hover(
//       function() {
//         $(".language-text").fadeIn();
//       },
//       function() {
//         $(".language-text").fadeOut();
//       });
//
//
// $('.faq-list-item').click(function(){
//         var $answer = $(this).find('.answer');
//         console.log('push number :' + questionIndex);
//         console.log($answer);
//         if ($answer.hasClass('open')){
//             $answer.removeClass('open');
//             $answer.slideUp("slow");
//             $(this).find('span').text('+');
//         } else {
//             $answer.addClass('open');
//             $answer.slideDown("slow");
//             $(this).find('span').text('-');
//             console.log($answer);
//         }
//     })
//   });
//
//

$(function() {
  // 「#change-text」要素に対するclickイベントを作成してください
   $("#change-text").click(function() {
     $("#text").text("人生を変えよう");
   });

  // 「#change-html」要素に対するclickイベントを作成してください
  $("#change-html").click(function() {
     $("#text").html('<a href="#">ようこそ、人生へ</a>');
   });

});
$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $("#language-wrapper").hover(
      function() {
        $(".language-text").fadeIn();
      },
      function() {
        $(".language-text").fadeOut();
      });

});
