(function () {
    var $tabs = $('.js-tab');
    var $tab = $('.js-tab-link');

    // Проврека
    if (!$tabs.length) {
        return;
    }

    /**
     * Перезапуск
     */
    function refreshTab() {
        $tabs.accordion('refresh');
    }

    $tab.on('click', function () {
        hideArticles();
        deslectAllTabs();
        $tab.removeClass('active');
        $(this).attr('aria-selected', true);
        $(this).addClass('active');
        // eslint-disable-next-line vars-on-top
        var tab = '#' + $(this).attr('aria-controls');
        $(tab).show();
    });

    $('body').on('refreshTab',refreshTab);
    $('body').trigger('initAccordion');

    function hideArticles() {
        $('.js-tab-content').hide();
    }
    function deslectAllTabs() {
        $tab.attr('aria-selected', false);
    }
})();
