"use strict";

$('.thumbnails>img').on('click', function (e) {
  // 主圖src屬性(attribute) 替換成 當前點擊縮圖的src
  $('.main-img>img').attr('src', $(this).attr('src'));
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
}); // .thumbnails>img end