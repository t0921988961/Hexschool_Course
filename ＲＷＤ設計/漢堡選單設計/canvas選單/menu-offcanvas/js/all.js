$(document).ready(function() {
  // 打開左側選單
  $('.mobile-link').click(function(event) {
    $('body').addClass('open');
  });
  // 關閉左側選單
  $('.mobile-close').click(function(event) {
    $('body').removeClass('open');
  });
});