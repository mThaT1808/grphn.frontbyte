(function() {

  function documentReady() {
    @@include('partials/utilites/mediaHandler.js');
    @@include('partials/utilites/ClassEvent.js');
    @@include('partials/utilites/defineSetter.js');
    @@include('partials/utilites/AnimationQueue.js');
    @@include('partials/utilites/onscrollAnimate.js');

    @@include('partials/popup.js');
    @@include('partials/ie-detect.js');
    @@include('partials/video.js');
    @@include('partials/tab.js');
    @@include('partials/news-slider.js');
    @@include('partials/header-mobile.js');
    @@include('partials/scrollbar.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();