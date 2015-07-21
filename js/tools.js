$(document).ready(function() {

/* dropdown menu */
    function DropDown(el) {
            this.dd = el;
            this.initEvents();
    }
    DropDown.prototype = {
            initEvents : function() {
                    var obj = this;

                    obj.dd.on('click', function(event){
					        $('.wrapper_dropdown').removeClass('active');  //вырубить все сначала
                            $(this).toggleClass('active');
                            event.stopPropagation();
                    });
            }
    }

	var ddsort = new DropDown( $('#ddsort') );
	var ddcity = new DropDown( $('#ddcity') );
	var ddcard = new DropDown( $('#ddcard') );
	var ddpays = new DropDown( $('#ddpays') );
    
	$(document).click(function() {
		// all dropdowns
		$('.wrapper_dropdown').removeClass('active');
	});
				



/* modal version 2  uses arcticmodal */
$('a.popupv2').click(function() {

        var popupid = $(this).attr('rel');
		//hide all open popup
		$.arcticmodal('close');   
		$('#'+popupid).arcticmodal({
		    afterClose: function(){				
			}
		});
		
        return false;
});

$('a.popupblocker').click(function() {

        var popupid = $(this).attr('rel');
		$('#'+popupid).arcticmodal({
		    closeOnOverlayClick: false,
			closeOnEsc: false,
		    afterClose: function(){				
			}
		});
		
        return false;
});
		


		
});

