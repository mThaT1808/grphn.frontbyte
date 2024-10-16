// external scripts

// Модернизр
@@include('node_modules/@babel/polyfill/dist/polyfill.js')
@@include('external/modernizr-custom.js')
@@include('node_modules/jquery/dist/jquery.min.js')
@@include('external/ofi.min.js')


/* Select2 */
// (function () {
//     if (!$('.js-select').length) {
//         return;
//     }

//     @ @include('node_modules/select2/dist/js/select2.full.min.js');
// })();

/* Slick */
// function startSlick () {
//     if (!$('.js-popup-slider').length && !$('.js-popup-slider-nav').length && !$('.js-photo-slider-girl').length
//         && !$('.js-photo-slider-background').length && !$('.js-slider-girl').length) {
//         return;
//     }

//     @ @include('node_modules/slick-carousel/slick/slick.js');
// };
// startSlick();

/* Validation */
// function startValidate () {
//     if (!$('.js-form-validate').length) {
//         return;
//     }

//     @ @include('node_modules/jquery-validation/dist/jquery.validate.min.js');
// };
// startValidate();