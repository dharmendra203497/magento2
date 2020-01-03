var config = {
	    config: {
		mixins: {
		    'Magento_Checkout/js/view/shipping': {
		        'Tigren_AdvancedCheckout/js/view/shipping': true
		    },
		}
	    }
	};
	var config = { 
    config: { 
        mixins: { 
            'Magento_Checkout/js/model/step-navigator': { 
                'Tigren_AdvancedCheckout/js/model/step-navigator-mixin': true 
            } 
        } 
    } 
};