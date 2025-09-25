define(['jquery'], ($) => {
    'use strict';

    $.mixinSuper('Magento_PaymentServicesPaypal/js/view/payment/apple-pay-cart', {
        initialize: function (config, element) {
            if (this.buttonContainerId?.includes?.('${')) {
                this.buttonContainerId = (function (t, $) {
                    return eval('`' + t + '`');
                })(this.buttonContainerId, this);
            }

            this._super(config, element);
        }
    });
});
