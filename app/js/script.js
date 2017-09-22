$(document).ready(function(){
  /*spoiler*/
  $(".purchasing-information__row-title").click(function () {
      $(this).next(".purchasing-information__row-hide").slideToggle();
        if(  $(this).children().hasClass('chevron-icon__rotate') ){
           $(this).parent('.purchasing-information__row').find('.chevron-icon').removeClass('chevron-icon__rotate');
         }else{
             $(this).parent('.purchasing-information__row').find('.chevron-icon').addClass('chevron-icon__rotate');
         }
         return false;
    });
  $(".profile-anketa__wrap_row-title").click(function () {
      $(this).next(".profile-anketa__wrap_row-hide").slideToggle();
        if(  $(this).children().hasClass('chevron-icon__rotate') ){
           $(this).parent('.profile-anketa__wrap_row').find('.chevron-icon').removeClass('chevron-icon__rotate');
         }else{
             $(this).parent('.profile-anketa__wrap_row').find('.chevron-icon').addClass('chevron-icon__rotate');
         }
         return false;
    });
  /*spoiler*/

  $(".rating-count").starRating({
    initialRating: 4.5,
    disableAfterRate: false,
    useGradient: false,
    starSize: 20,
    strokeWidth: 1,
    emptyColor: '#e6e6e6',
    hoverColor: '#ffc11c',
    activeColor: '#ffc11c',
    onHover: function(currentIndex, currentRating, $el){
      $('.live-rating').text(currentIndex);
    },
    onLeave: function(currentIndex, currentRating, $el){
      $('.live-rating').text(currentRating);
    }
  });

/*select*/

  $('.select_wrapper input.select').focusout(function() {
      var dropdownHovered = $('#select_dropdown').is(":hover");
      if ($('.select_wrapper input.select').val() != '') {
          $('.select_wrapper .select_btn').addClass('clear');
      } else {
          $('.select_wrapper .select_btn').removeClass('clear');
      }
      if (dropdownHovered == false) {
          $('.select_wrapper .select_dropdown').css('display', 'none');
      }
  });

  $('.select_wrapper .select_dropdown').mouseleave(function(){
      var inputFocus = $('.select_wrapper input.select').is(":focus");
      if (inputFocus == false) {
          $('.select_wrapper .select_dropdown').css('display', 'none');
      }
  });

  $('.select_wrapper input.select').focus(function(){
      $('.select_wrapper .select_btn').removeClass('clear');
      $('.select_wrapper .select_dropdown').css('display', 'block');
  });

  $('.select_btn').click(function(e){
      e.preventDefault();
      $('.select_wrapper input.select').val('');
      $('.select_wrapper .select_btn').removeClass('clear');
  });

  $('.select_name').click(function(e){
      e.preventDefault();
      $('.select_wrapper input.select').val($(this).html());
      $('.select_wrapper .select_dropdown').css('display', 'none');
      $('.select_wrapper .select_btn').addClass('clear');
  });

/*select*/

/*city select*/

  $('.city_wrapper input.city').focusout(function() {
      var dropdownHovered = $('#city_dropdown').is(":hover");
      if ($('.city_wrapper input.city').val() != '') {
          $('.city_wrapper .city_btn').addClass('clear');
      } else {
          $('.city_wrapper .city_btn').removeClass('clear');
      }
      if (dropdownHovered == false) {
          $('.city_wrapper .city_dropdown').css('display', 'none');
      }
  });

  $('.city_wrapper .city_dropdown').mouseleave(function(){
      var inputFocus = $('.city_wrapper input.city').is(":focus");
      if (inputFocus == false) {
          $('.city_wrapper .city_dropdown').css('display', 'none');
      }
  });

  $('.city_wrapper input.city').focus(function(){
      $('.city_wrapper .city_btn').removeClass('clear');
      $('.city_wrapper .city_dropdown').css('display', 'block');
  });

  $('.city_btn').click(function(e){
      e.preventDefault();
      $('.city_wrapper input.city').val('');
      $('.city_wrapper .city_btn').removeClass('clear');
  });

  $('.city_name').click(function(e){
      e.preventDefault();
      $('.city_wrapper input.city').val($(this).html());
      $('.city_wrapper .city_dropdown').css('display', 'none');
      $('.city_wrapper .city_btn').addClass('clear');
  });

  /*city select*/

  $(".card-about-company").click(function(){
    $(this).next('.about-company-hide').slideToggle();
      return false;
  });
  $("body").click(function(e) {
    if($(e.target).closest(".about-company-hide").length==0) $(".about-company-hide").hide(100);
  });
  $(".open-hide").click(function(){
    $(this).next('.product-requests__form_more-hide').slideToggle(100);
      return false;
  });
  $("body").click(function(e) {
    if($(e.target).closest(".product-requests__form_more-hide").length==0) $(".product-requests__form_more-hide").hide(100);
  });


/*datetimepicker*/
  jQuery('.datepicker-inner').datetimepicker({
   timepicker:false,
   todayButton: false,
   format:'d.m.Y',
   defaultTime:'00:00'
  });
  jQuery.datetimepicker.setLocale('ru');
/*datetimepicker*/
/*time datetimepicker*/
  $('.timepicker').datetimepicker({
  	datepicker:false,
  	format:'H:i',
  	step:5
  });
/*time datetimepicker*/

});
