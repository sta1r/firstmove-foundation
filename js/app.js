jQuery(document).ready( function($) {

	
	function scanDomAndPopulate(DOMnode, dataSegment) {

		var object = job_data[dataSegment];

		// cache
		var node = $(DOMnode);

		if (node.hasClass('form-categories')) {

			var checkboxes = '';

        	object.forEach(function(item) {

        		checkboxes += '<div class="col-sm-12"><div class="checkbox"><label><input type="checkbox">' + item.name + '</label></div></div>';

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

        else if (node.hasClass('dropdown-list')) {

        	var ddItems = '<option>Select</option>';

        	object.forEach(function(item) {

        		ddItems += '<option value="' + item.shortcode + '">' + item.name + '</option>';

        	});

        	node.find('select').html(ddItems);

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
	    if (sPageURL.length) {
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
	    else
	    {
	    	return false;
	    }
	    
	}

	$('.populate').each( function(i) {
		scanDomAndPopulate($(this), $(this).data('populate'));
	});

	// Populate bulk email list
	var list = "";
	var email = "davatron3000@gmail.com";
	for (var i = 0; i < 20; i++) {
		list += email + '\n';
	}
	$('#bulkEmailList').html(list);


	if (GetURLParameter('logged-in')) {
		var loginID = GetURLParameter('logged-in');
		//console.log(loginID);

		//$('.hidden-control').addClass('logged-in');
		$('.state--logged-out').hide();
		$('.state--logged-in').show();
		$('.' + loginID + '-control').show();

		// if logged in, populate any relevant elements accordingly
		$('*[data-populate="' + loginID + '"]').addClass('populate');

	}

	// if (GetURLParameter('logged-in') == 'admin') {
	// 	$('.admin-control').show();
	// }

	if (GetURLParameter('logged-in') == 'recruiter') {
		$('.apply-button').addClass('disabled');
	}

	if (GetURLParameter() === false) {
		//$('.apply-button').addClass('disabled');
	}

	// Toggle Developer Notes
	$('#toggle-dev-notes').click(function(e) {
		$('.dev-footer').toggle();
	});

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


	

	// PUSH DUMMY STUDENTS INTO TABLE ROWS
	if ($('#students-list').length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Flag</th><th><a href="#" title="Click to sort">Name</a></th><th>Course</th><th>Email address</th><th><a href="#" title="Click to sort">Last logged in</a></th><th>Actions</th></tr></thead><tbody>';
		
		for (i = 0; i < 20; i++) {
			
			output += '<tr><td><a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a></td><td>Dave Jones</td><td>BA Fashion Management</td><td><a href="mailto:davatron4000@hotmail.com">davatron4000@hotmail.com</a></td><td>10/5/2014</td><td><a class="btn btn-info btn-sm" href="admin-view-job-seeker.html">View detail</a></td></tr>';
			
		}
		
		output += '</table>';
		
		$('#students-list').html(output);
		
	}

	// PUSH DUMMY RECRUITERS INTO TABLE ROWS
	if ($('#recruiters-list').length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Flag</th><th><a href="#" title="Click to sort">Name</a></th><th>Company name</th><th>Email address</th><th><a href="#" title="Click to sort">Last logged in</a></th><th>Actions</th></tr></thead><tbody>';
		
		for (i = 0; i < 20; i++) {
			
			output += '<tr><td><a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a></td><td>Adam Watling</td><td>Wingman Industries</td><td><a href="mailto:davatron4000@hotmail.com">davatron4000@hotmail.com</a></td><td>10/5/2014</td><td><a class="btn btn-info btn-sm" href="admin-view-recruiter.html?logged-in=admin">View detail</a></td></tr>';
			
		}
		
		output += '</table>';
		
		$('#recruiters-list').html(output);
		
	}

	// PUSH DUMMY PLACEMENTS INTO TABLE ROWS
	var tabular_jobs = $('#tabular-jobs-list');
	var tabular_jobs_count = tabular_jobs.data('count');

	if (tabular_jobs.length) {
		
		var output = '<table class="table table-striped"><thead><tr><th>Status</th><th>Date posted</th><th>Company</th><th>Role</th><th>Views</th><th>Applications</th><th>Vacancy filled by us?</th><th>Actions</th></tr></thead><tbody>';
		
		for (i = 0; i < tabular_jobs_count; i++) {
			
			output += '<tr><td><span class="label label-success">Live</span></td><td>10/10/2012</td><td>Debenhams</td><td>Retail assistant</td><td><span class="badge badge-info">16</span></td><td><span class="badge badge-info">5</span></td><td><span class="glyphicon glyphicon-ok"></span></td>';
			
			// Actions and buttons
			output += '<td><button class="btn btn-sm btn-info">View detail</button> <button class="btn btn-sm btn-danger" data-role="delete-item">Expire</button></td></tr>';
			
		}
		
		output += '</table>';
		
		tabular_jobs.html(output);
		
		
	}


	// DATEPICKER
	// $('#dateFrom').datepicker();
	// $('#dateTo').datepicker();
	// $('#deadline').datepicker();
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

	// Add a flag 
	$('.flag').click(function(e) {
		e.preventDefault();
		$(this).find('.glyphicon').toggleClass('active');
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