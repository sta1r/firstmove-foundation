jQuery(document).ready( function($) {

	
	function scanDomAndPopulate(DOMnode, dataSegment) {

		var object = job_data[dataSegment];

		// cache
		var node = $(DOMnode);

		// loop
		for (var key in object){
		    if (object.hasOwnProperty(key)) {

		console.log(key);
		        if (node.find('#' + key).length) {

		        	node.find('#' + key).val(object[key]);
		        	
		        } else if (node.find('*[data-id="' + key + '"]').length) {

		        	node.find('*[data-id="' + key + '"]').html(object[key]);

		        }
		    }
		}

	}

	function GetURLParameter(sParam)
	{
	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++) 
	    {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam) 
	        {
	            return sParameterName[1];
	        }
	    }
	}


	if (GetURLParameter('logged-in')) {
		$('.logged-in').show();
	}



	$('.populate').each( function(i) {
		scanDomAndPopulate($(this), $(this).data('populate'));
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

	// PUSH DUMMY STUDENTS INTO TABLE ROWS
	if ($('#students-list').length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Flag</th><th>Name</th><th>Course</th><th>Email address</th><th>Actions</th></tr></thead><tbody>';
		
		for (i = 0; i < 20; i++) {
			
			output += '<tr><td><span class="glyphicon glyphicon-flag"></i></td><td>Dave Jones</td><td>BA Fashion Management</td><td><a href="mailto:davatron4000@hotmail.com">davatron4000@hotmail.com</a></td><td><a class="btn btn-primary btn-xs" href="admin-view-job-seeker.html">View detail</a></td></tr>';
			
		}
		
		output += '</table>';
		
		$('#students-list').html(output);
		
		
	}

	// PUSH DUMMY PLACEMENTS INTO TABLE ROWS
	if ($('#admin-placements-list').length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Status</th><th>Date posted</th><th>Company</th><th>Role</th><th>Duration</th><th>Students interested</th></tr></thead><tbody>';
		
		for (i = 0; i < 10; i++) {
			
			output += '<tr><td><span class="label label-success">Live</span></td><td>10 October 2012</td><td>Debenhams</td><td>Retail assistant</td><td>6-8 weeks</td><td><span class="badge badge-info">16</span></td>';
			
			// Actions and buttons
			output += '<td><div class="btn-group"><a class="btn btn-small dropdown-toggle" data-toggle="dropdown" href="#">Status <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Draft</a></li><li><a href="#">Private</a></li></ul></div></td><td><button class="btn btn-small btn-info">View detail</button></td><td><button class="btn btn-small btn-danger" data-role="delete-item">Delete</button></td></tr>';
			
		}
		
		output += '</table>';
		
		$('#admin-placements-list').html(output);
		
		
	}


	// DATEPICKER
	$('#dateFrom').datepicker();
	$('#dateTo').datepicker();
});