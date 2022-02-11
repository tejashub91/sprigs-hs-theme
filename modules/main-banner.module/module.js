$(document).ready(function(){
  $('.module-main-banner__right_acc_title').on('click',function(){
    $(this).closest('.module-main-banner__right_accordion_box').siblings('.module-main-banner__right_accordion_box').find('.module-main-banner__right_acc_cont_bx').slideUp();
    $(this).next().slideToggle();  
    $(this).closest('.module-main-banner__right_accordion_box').siblings('.module-main-banner__right_accordion_box').removeClass('active');
    $(this).closest('.module-main-banner__right_accordion_box').toggleClass('active');
  })
  $('.module-main-banner__right_accordion_box:first-child .module-main-banner__right_acc_title').click();
})