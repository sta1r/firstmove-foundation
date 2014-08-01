jQuery(document).ready( function($) {

	/* -----------------------------
	** Hash-based alerts and actions
	*/
	var hash = window.location.hash;

	// Update alert
	setTimeout(function() {
	  if (hash == '#updated') {
	  	$('#message-updated').show();
	    window.scrollTo(0, 0);
	  } else {
	  	$('#message-updated').hide();
	  }
	}, 1);

	// Go to tab based on location hash
  	hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  	$('.nav-tabs a').click(function (e) {
    	$(this).tab('show');
    	var scrollmem = $('body').scrollTop();
    	window.location.hash = this.hash;
    	$('html,body').scrollTop(scrollmem);
  	});


	/* -----------------------------
	** Alerts and warnings
	*/
	$('a[data-function="alert"]').click(function(e){
		e.preventDefault();
		response = confirm($(this).data('alert'));
		if (response) {
			// continue to destination
			window.location = $(this).attr('href');
			window.location.reload(); // this possibly isn't great 
		}
	});

	// DATEPICKER
	$('.datepicker').datepicker({
		format: "dd/mm/yyyy"
	});
	$('.input-daterange-year').datepicker({
		format: "yyyy",
    	startView: 2,
    	minViewMode: 2
	});


	/* ----------
	** Sign up UI
	*/
	var opt_fields = $('form').find('.sign-up-optional');
	opt_fields.hide();

	$('#signupform').find('input').change( function() {

		if (!$(this).is(':checked')) {
			$(this).attr("checked", "checked");
		} else {
			$(this).attr("checked", "");
		}

		//console.log($(this).attr('id') + ' is ' + $(this).attr('checked'));

		if ($('#accountJobSeeker').is(':checked')) {
			$('.sign-up-ldap').show();
			$('.sign-up-email').hide();
			if ($('#LDAPAccountYes').is(':checked')) {
				$('.sign-up-email').show();
				$('.sign-up-ldap-password').show();
				$('.sign-up-normal-password').hide();
			}
			if ($('#LDAPAccountNo').is(':checked')) {
				$('.sign-up-email').show();
				$('.sign-up-ldap-password').hide();
				$('.sign-up-normal-password').show();
			}
			$('#job-seeker-sign-up-button').show();
			$('#recruiter-sign-up-button').hide();
		}

		if ($('#accountRecruiter').is(':checked')) {
			$('.sign-up-ldap').hide();
			$('.sign-up-email').show();
			$('.sign-up-ldap-password').hide();
			$('.sign-up-normal-password').show();
			$('#job-seeker-sign-up-button').hide();
			$('#recruiter-sign-up-button').show();
		}

	});

	/* -------------
	** Miscellaneous
	*/

	// Toggle categories
	$('#btn-toggle-categories').click( function() {
		var button = $(this);
		if (button.is('.active')) {
			button.parent().next('.list-categories').hide();
			button.text('Show categories');
			button.removeClass('active');
		} else {
			button.parent().next('.list-categories').show();
			button.text('Hide categories');
			button.addClass('active');
		}
	});


	// Add a flag 
	$('.flag').click(function(e) {
		e.preventDefault();
		$(this).find('.glyphicon').toggleClass('active');
	});

	// Mark as appointed
	var applicants = $('.job-dashboard .data-table tr');
	var response = '';

	applicants.each( function(i) {
		$(this).find('.glyphicon-ok').click(function(e) {
			e.preventDefault();
			if ($(this).is('.active')) {
				response = confirm('Are you sure you want to un-mark this applicant as appointed?');
				if (response) {
					$('.glyphicon-ok').removeClass('active');
				}
			} else {
				response = confirm('Are you sure you want to mark this applicant as appointed?');
				if (response) {
					$('.glyphicon-ok').removeClass('active');
					$(this).toggleClass('active');
				}
			}
			
			
			
		});
	});
	

	// Duration field
	$('#jobTypes').change( function() {
		console.log($(this).val());
		if ($(this).val() === 'full-time' || $(this).val() === 'part-time') {
			$('#durationSelect').hide();
		} else {
			$('#durationSelect').show();
		}
	});

});