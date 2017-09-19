/*
$(document).ready(function(){

  // hide our element on page load
  $('.index_browser_icon').css('opacity', 0);

  $('.index_browser_icon').waypoint(function() {
		$('.index_browser_icon').css('opacity', 1);
		$('.index_browser_icon').removeClass('fa-chrome');
    $('.index_browser_icon').addClass('fa-safari');
  }, { offset: '85%' });
	$('.index_browser_icon').waypoint(function() {
		$('.index_browser_icon').removeClass('fa-safari');
		$('.index_browser_icon').addClass('fa-firefox');
	}, { offset: '70%' });
	$('.index_browser_icon').waypoint(function() {
		$('.index_browser_icon').removeClass('fa-firefox');
		$('.index_browser_icon').addClass('fa-internet-explorer');
	}, { offset: '65%' });
	$('.index_browser_icon').waypoint(function() {
		$('.index_browser_icon').removeClass('fa-internet-explorer');
		$('.index_browser_icon').addClass('fa-chrome');
	}, { offset: '55%' });



});
*/


var s = skrollr.init({
	render: function(data) {
	  //Log the current scroll position.
	  $('#info').text(data.curTop);
	}
});
