
$$(document).on('page:init', '.page[data-name="classes"]', function (e) {

	var calendar_class = app.calendar.create({
		inputEl: $$('#demo-calendar-default'),
		routableModals: false,
		on: {
			open: function () {
				console.log('Calendar opened');
			}
		}
	});

})

