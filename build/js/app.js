jQuery(document).ready( function($) {

	
	function scanDomAndPopulate(DOMnode, dataSegment) {

		var object = job_data[dataSegment];

		// cache
		var node = $(DOMnode);

		if (node.hasClass('form-categories')) {

			var checkboxes = '';

        	object.forEach(function(item) {

        		checkboxes += '<div class="checkbox"><label><input type="checkbox">' + item.name + '</label></div>';

        	});

        	node.append(checkboxes);

        }

        else if (node.hasClass('form-categories-inline')) {

        	var inlineCheckboxes = '';

        	object.forEach(function(item) {

        		inlineCheckboxes += '<div class="col-md-3"><div class="checkbox-inline"><label><input type="checkbox">' + item.name + '</label></div></div>';

        	});

        	node.append(inlineCheckboxes);

        }

        else if (node.hasClass('dropdown-categories')) {

        	var ddItems = '';

        	object.forEach(function(item) {

        		ddItems += '<li><a href="#">' + item.name + '</a></li>';

        	});

        	node.append(ddItems);

        }

        else if (node.hasClass('list-categories')) {

        	var listItems = '';

        	object.forEach(function(item) {

        		listItems += '<a href="#" class="list-group-item"><span class="badge">' + item.total + '</span>' + item.name + '</a>';
        	
        	});

        	node.append(listItems);

        } 







        else {

			// loop
			for (var key in object){
			    if (object.hasOwnProperty(key)) {

			        if (node.find('#' + key).length) {

			        	node.find('#' + key).val(object[key]);
			        	
			        } else if (node.find('*[data-id="' + key + '"]').length) {

			        	node.find('*[data-id="' + key + '"]').html(object[key]);

			        }

		        }

			}

		}

	}

	//console.log(job_data['job_categories']);


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

	$('.admin-control, .recruiter-control').hide();


	if (GetURLParameter('logged-in')) {
		$('.hidden-control').addClass('logged-in');
	}

	if (GetURLParameter('logged-in') == 'admin') {
		$('.admin-control').show();
	}

	if (GetURLParameter('logged-in') == 'recruiter') {
		$('.recruiter-control').show();
		$('.apply-button').addClass('disabled');
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
	var tabular_jobs = $('#tabular-jobs-list');
	var tabular_jobs_count = tabular_jobs.data('count');

	if (tabular_jobs.length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Status</th><th>Date posted</th><th>Company</th><th>Role</th><th>Views</th><th>Actions</th></tr></thead><tbody>';
		
		for (i = 0; i < tabular_jobs_count; i++) {
			
			output += '<tr><td><span class="label label-success">Live</span></td><td>10 October 2012</td><td>Debenhams</td><td>Retail assistant</td><td><span class="badge badge-info">16</span></td>';
			
			// Actions and buttons
			output += '<td><button class="btn btn-sm btn-info">View detail</button> <button class="btn btn-sm btn-danger" data-role="delete-item">Expire</button></td></tr>';
			
		}
		
		output += '</table>';
		
		tabular_jobs.html(output);
		
		
	}


	// DATEPICKER
	$('#dateFrom').datepicker();
	$('#dateTo').datepicker();



	//$('.hidden-form-field').css('visibility', 'visible'); // override for style on .hidden in style.css

	var LDAP_opt_fields = $('.job-seeker-sign-up').find('.LDAP-optional');
	LDAP_opt_fields.hide();

	$('.LDAP-account-select').find('input').change( function() {

		if (!$(this).is(':checked')) {
			$(this).attr("checked", "checked");
		} else {
			$(this).attr("checked", "");
		}
		// $(this).attr("checked", "checked");
		console.log($(this).attr('id') + ' is ' + $(this).attr('checked'));

		if ($('#LDAPAccountNo').is(':checked')) {
			LDAP_opt_fields.show();
		} else {
			LDAP_opt_fields.hide();
		}
	});


});