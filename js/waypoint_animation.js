var $index_responsive_websites=$('.feature-wrap');
$index_responsive_websites.waypoint(function(){
  $index_responsive_websites.addClass('feature_wrap_visible');
  $index_responsive_websites.addClass('animated');
  $index_responsive_websites.addClass('fadeInDown');
}, {offset:'70%'});
