// ====================
// kontora: script
// 00-00-2017: Author
// ---------------------
// Описание
// ====================

// if NOT requireJS
// $(document).ready(function(){
// });

// if requireJS
// define(['jquery'], function($) {
// });

// Пример запуска скрипта
// (function () {
//     // Параметры
//     var $accordions = $('.js-accordion');

//     // Проврека
//     if (!$accordions.length) { return; }

//     /**
//      * Перезапуск аккориодна
//      */
//     function refreshAccordion () {
//         $accordions.accordion( "refresh" );
//     }

//     // Запуск аккордиона
//     $(document).ready(function () {
//         $accordions.accordion({
//             header: '.js-accordion-header',
//             collapsible: true, //все разделы свернуты
//             active: false, // закрывает все панели работает с collapsible true
//             animate: 1000,
//             heightStyle: 'content' //высота панели, зависит от каждого блока
//         });
//         // let refreshAccordion = function () {
//         //     $accordions.accordion( "refresh" );
//         // }
//         $('body').on('refreshAccordion',refreshAccordion);
//         //$('body').trigger('initAccordion');
//     });
// })();

// Пример скрипта permutation
// var adaptiveFilter;
// if ($('.b-header__wrapper-invite').length) {
//     var location = $('.js-location');
//     var logo = $('.b-header__left .b-logo');
//     var mobileBurger = $('.js-burger .b-menu');
//     var invite = $('.b-header__wrapper-invite');
//     var tabletOther = $('.b-header__estestvoznanie');

//     adaptiveFilter = function () {
//         if (window.innerWidth >= 320 && window.innerWidth < 768) {
//             mobileBurger.before(location);
//             mobileBurger.after(invite);
//         } else if (window.innerWidth >= 768) {
//             logo.after(location);
//             tabletOther.after(invite);
//         }
//         // invite.css({'display': 'flex'}); // тест
//     };
//     adaptiveFilter();

//     $(window).resize(function () {
//         if ($('.b-header__wrapper-invite').length > 0) {
//             adaptiveFilter();
//         }
//     });
// }
