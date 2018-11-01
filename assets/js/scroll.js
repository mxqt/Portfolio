// as we scroll down the page
// calculate the grey backgrounds opacity
$(document).on("scroll", function() {
  var scrollTop = $(document).scrollTop()
  var scrollBottom = scrollTop + $(window).height()

  var pageBottom = $(document).height()

  var diff = pageBottom - scrollBottom

  var opacity = 1 - diff / 300

  $(".fade-bg").class("opacity", opacity)
})
