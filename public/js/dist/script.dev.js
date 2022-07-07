"use strict";

// ------------------------------------------------------------------
// -----------------------------menu start
console.log('test');
document.getElementById("btn-nav-toggle").addEventListener('click', openNav); // 函式名稱

function openNav() {
  console.log('點開按鈕打開主導覽');

  if (document.getElementById('primary-navigation').classList.contains('active') == true) {
    // 假如主導覽有active類別時執行
    document.getElementById('primary-navigation').classList.remove('active');
    document.getElementById('btn-nav-toggle').textContent = 'Menu';
  } else {
    // 假如主導覽沒有active類別時執行
    document.getElementById('primary-navigation').classList.add('active');
    document.getElementById('btn-nav-toggle').textContent = 'X';
  } // openNav if end

} // openNav end
// -----------------------------menu end
// -----------------------------------------------------------------
// 定義視窗寬度的變數


var windowWidth = $(window).width(); // 進網頁直接執行一次 判斷

if (windowWidth >= 768) {
  // 大於等於768執行
  // $('nav>ul>li').hover(function(){}, function(){})
  $('nav>ul>li').hover(function () {
    // 滑鼠滑入執行
    $(this).find('.submenu').addClass('active');
  }, function () {
    // 滑鼠滑出執行
    $(this).find('.submenu').removeClass('active');
  });
} else {
  // 小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('nav').toggleClass('active');
  }); // btn-nav-switch end

  $('nav>ul>li').on('click', function () {
    $(this).find('.submenu').toggleClass('active');
  }); // nav>ul>li end
} // windowWidth>=768 end
// 每一次縮放視窗的時候執行


$(window).resize(function () {
  // widthWidth 在每次縮放視窗寬度時，換上當前的視窗寬度的數值
  windowWidth = $(window).width();

  if (windowWidth >= 768) {
    // 大於等於768執行
    // $('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function () {
      // 滑鼠滑入執行
      $(this).find('.submenu').addClass('active');
    }, function () {
      // 滑鼠滑出執行
      $(this).find('.submenu').removeClass('active', '');
    });
  } else {
    // 小於768執行
    $('#btn-nav-switch').on('click', function () {
      $('nav').toggleClass('active');
    }); // btn-nav-switch end

    $('nav>ul>li').on('click', function () {
      $(this).find('.submenu').toggleClass('active');
    }); // nav>ul>li end
  } // windowWidth>=768 end

}); // window resize end
// // 捲軸事件
// // 定義捲軸高變數
// let offsetTop
// let product1Top = $('.product-section-1').offset().top 
// $(window).scroll(function(){
//     offsetTop = $(window).scrollTop()
//     //console.log( '捲軸高', offsetTop )
//     // console.log('product1',product1Top)
// //    if( offsetTop >=  product1Top){
// //         console.log('test')
// //    }
//     // 捲軸高度>=900，會出現page-top的按鈕
//     if( offsetTop >= 900){
//         $('.page-top').addClass('active')
//     }else{
//         $('.page-top').removeClass('active')
//     }
// })//scroll end
// // 點按page-top回到最上方
// $('.page-top').on('click', function(){
//     $('html, body').animate({ scrollTop: 0 })
// })//.page-top
// =============================================Banner輪流播放
// console.log('一開始執行',$('img').height())

$('.child').prepend($('.child>img').last().clone()); //第二層裡面最前面 補上 圖片陣列中的最後一個 的複製元素

$('.child').append($('.child>img').eq(1).clone()); //第二層裡面最後面 補上 圖片陣列中的第二個 的複製元素

var currentNum = 1; //當前的數字

var parentWidth = $('.parent').width(); //父層寬度

var imgLength = $('.child>img').length; //子層圖片個數

var childTotalWidth = parentWidth * imgLength; //父層寬度*子層圖片個數

$('.child').css({
  'margin-left': -parentWidth * currentNum
}); //調整第二層一開始位移的位置

$('.child').width(childTotalWidth); //子層總寬 = 父層寬度*子層圖片個數(進到畫面讀一次)

$('.child>img').width(parentWidth); //子層下的圖片寬 = 父層寬度
// $(window).on('load',function(){
//     // console.log('window load',$('img').height())
//     $('.loading-overlay').addClass('active')
//     parentWidth = $('.parent').width()
//     childTotalWidth = parentWidth * imgLength
//     $('.child').css({'margin-left': -parentWidth * currentNum})
//     $('.child').width( childTotalWidth ) 
//     $('.child>img').width( parentWidth )
// })// window load end
// for 迴圈 從0到圖片總數-2 的條件下，i累加1

for (var i = 0; i < imgLength - 3; i++) {
  $('.indicator>li.active').after('<li></li>');
} // 縮放時的變化


$(window).resize(function () {
  parentWidth = $('.parent').width();
  childTotalWidth = parentWidth * imgLength;
  $('.child').css({
    'margin-left': -parentWidth * currentNum
  });
  $('.child').width(childTotalWidth);
  $('.child>img').width(parentWidth);
}); //window resize end

$('.right-arrow').on('click', function () {
  if (currentNum == imgLength - 1) {//假如當前的數字相等於圖片總數
  } else {
    // console.log(currentNum, imgLength)
    currentNum = currentNum + 1; //當前數字累加1

    common(); // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
  } //if currentNum == imgLength end

}); // .right-arrow end

$('.left-arrow').on('click', function () {
  if (currentNum == 0) {} else {
    currentNum = currentNum - 1;
    common(); // $('.child').animate({'margin-left': -parentWidth * (currentNum - 1)})
  } //if currentNum == 1 end

}); // .left-arrow end

$('.indicator>li').on('click', function () {
  // console.log( '當前的',currentNum )
  // console.log( '跟現在點擊的',$(this).index() ) //序列號
  // index() //序列號
  // eq() //第幾個的元素
  currentNum = $(this).index() + 1; // 當前的數字 = 點擊的序列號 + 1

  common(); // $('.indicator>li').eq(currentNum - 1).addClass('active')
  // $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active')
}); //.indicator>li end

function common() {
  // $('.child').animate({'margin-left': -parentWidth * currentNum},callback)
  $('.child').animate({
    'margin-left': -parentWidth * currentNum
  }, 400, function () {
    //==== callback 函式執行完之後執行=====
    // 假如當前的數字 相等於 總數 - 1 
    if (currentNum == imgLength - 1) {
      currentNum = 1;
    }

    if (currentNum == 0) {
      currentNum = imgLength - 2;
    } // 前面動畫跑完時執行


    $('.child').css({
      'margin-left': -parentWidth * currentNum
    });
    $('.indicator>li').eq(currentNum - 1).addClass('active');
    $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active');
  }); //callback end
} // common() end


setInterval(function () {
  $('.right-arrow').click();
}, 5000); // 卷軸事件 與相對應高度

$('.row>ul>li').on('click', function (e) {
  e.preventDefault(); //當前的li，底下的a，屬性href  / #pipa #guzheng
  // console.log( $(this).find('a').attr('href') )
  // 指定叫做 "當前的li，底下的a，屬性href" 的選取器
  // console.log( $( $(this).find('a').attr('href') ) )
  // console.log($( $($(this).find('a').attr('href')).offset().top ))
  // 指定一個名為currentAHref變數找到當前的 href (字串)

  var currentAHref = $(this).find('a').attr('href'); // 包在$()內變成選取器找到的元素名稱，並得到位移的高度
  // console.log( $(currentAHref).offset().top)
  // $('html,body').animate({scrollTop: $(currentAHref).offset().top - 180 })
}); // nav>ul>li end