 jQuery(document).ready(function( $ ) { 
  $('div.form-input-label input, div.form-input-label textarea').each(function(){
		$(this).on('focus', function(){
			$(this).parents('div.form-input-label').addClass('focused');
		});
		$(this).on('blur', function(){
			if($(this).val().length == 0){
				$(this).parents('div.form-input-label').removeClass('focused');
			}
		});
	});
});
