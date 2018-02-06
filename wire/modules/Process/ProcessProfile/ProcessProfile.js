$(document).ready(function() {
	// from @horst-n:
	// prevent browser supported autocomplete for password fields (e.g. on Profilepage)
	// to force this, attribute autocomplete='off' needs to be set for the password field
	if($(".FieldtypePassword[autocomplete='off']").length) {	
		// simply set the value empty on document.ready doesn't work in FireFox,
		// but one second later, it works :)
		setTimeout(function() {
			$(".FieldtypePassword[autocomplete='off']").attr('value', '')
				.closest('.Inputfield').removeClass('InputfieldStateChanged'); // @GerardLuskin
		}, 1000);
	}
	
	$("form#ProcessProfile").submit(function() {
		console.log('ProcessProfile');
		var $inputfields = $(".InputfieldStateChanged.InputfieldPassRequired");
		if(!$inputfields.length) return;
		var $pass = $('#_old_pass');
		if($pass.val().length) return;
		var $passWrap = $pass.closest('.InputfieldPassword');
		if($passWrap.hasClass('InputfieldStateCollapsed')) {
			setTimeout(function() {
				$passWrap.find('.InputfieldHeader').click(); 
			}, 200);
		}
		setTimeout(function() { $pass.focus(); }, 400); 
		return false;
	}); 
}); 