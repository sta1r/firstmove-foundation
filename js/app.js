jQuery(document).ready( function($) {

	console.log(job_seeker);
	var _form = $('form');

	if (_form.data('fill')) {
		console.log($(this));
		// loop thru input elements, populating with job-seeker data

		input_array = $(this).find('input');
		input_array.each( function(i, item) {
			_id = $(item).attr('id');
			console.log(_id);
			
			$('#' + _id).val(job_seeker._id);

		});
	}

	//$('#firstName').val(job_seeker.firstName);

	//console.log(_form);

});