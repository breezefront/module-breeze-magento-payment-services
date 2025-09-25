define(['jquery'], ($) => {
    'use strict';

    if (!$.breezemap.mageUtils) {
        $.breezemap.mageUtils = {};
    }

    if (!$.breezemap.mageUtils.uniqueid) {
        $.breezemap.mageUtils.uniqueid = () => $.guid++;
    }
});
