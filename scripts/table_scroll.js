$(document).ready( function () 
{
	var iStart = new Date().getTime();
	var oTable = $('table').dataTable( 
	{
		"sScrollY": "500px",
		"sScrollX": "100%",
		"sScrollXInner": "150%",
		"bPaginate": false,
        "bFilter": false,
        "bInfo" : false
	} );
} );