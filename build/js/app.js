jQuery(document).ready( function($) {

	
	function scanDomAndPopulate(DOMnode) {

		// cache
		var node = $(DOMnode);

		// loop
		for (var key in job_seeker){
		    if (job_seeker.hasOwnProperty(key)) {

		        if (node.find('#' + key).length) {

		        	node.find('#' + key).val(job_seeker[key]);
		        	
		        } else if (node.find('*[data-id="' + key + '"]').length) {

		        	node.find('*[data-id="' + key + '"]').text(job_seeker[key]);

		        }
		    }
		}

	}

	$('.populate').each( function(i) {
		scanDomAndPopulate($(this));
	});
	

	// ALERTS
	$('.hidden-message').hide();

	setTimeout(function() {
	  if (location.hash) {
	  	$('#message-updated').show();
	    window.scrollTo(0, 0);
	  }
	}, 1);

	// var hash = window.location.hash;
	// console.log(hash);
	// $(hash+':first').show();


	//$('#firstName').val(job_seeker.firstName);

	//console.log(_form);
	// $('.personal-details-widget').find('.populate').append(
	// 	'<p>Name: ' + job_seeker.firstName + ' ' + job_seeker.lastName + '</p>' +
	// 	'<p>Email address: ' + job_seeker.emailAddress + '</p>'
	// );
});