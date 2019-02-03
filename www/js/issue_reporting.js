

function submit_report()
{
	app.dialog.alert('Report submitted! Thank you for your time','Report Submission',function(){
		$$("input").each(function(id,elem){ elem.value = ""; });
		$$("textarea").each(function(id,elem){ elem.value = ""; });	
	});
}