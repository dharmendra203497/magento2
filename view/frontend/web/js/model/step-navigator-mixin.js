define([ 
    'jquery', 
    'mage/utils/wrapper' 
], function ($, wrapper) { 
    'use strict'; 
    return function(stepNavigator){ 
        var customGetActiveItemIndex = wrapper.wrap(stepNavigator.getActiveItemIndex, function(originalGetActiveItemIndex){ 
            var activeIndex = originalGetActiveItemIndex(), 
                body = $('body'), 
                shippingClass = 'checkout-shipping-step', 
                paymentClass = 'checkout-payment-step'; 
            if (activeIndex){ 
                body.removeClass(shippingClass); 
                body.addClass(paymentClass); 
            } else { 
                body.removeClass(paymentClass); 
                body.addClass(shippingClass); 
            } 
            return activeIndex; 
        }); 
        stepNavigator.getActiveItemIndex = customGetActiveItemIndex; 
        return stepNavigator; 
    };
    
});