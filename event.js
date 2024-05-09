// Creates an event series for jAVASCRIPT CLASSES, taking place every Monday to Friday in 2024.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Javascript Classes',
    new Date('May 6, 2024 08:00:00 PM EAT'),
    new Date('May 6, 2013 10:00:00 PM EAT'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.MONDAY, CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.WEDNESDAY, CalendarApp.Weekday.THURSDAY, CalendarApp.Weekday.FRIDAY])
        .until(new Date('May 30, 20124')),
    {location: 'Conference Room'});
Logger.log('Event Series ID: ' + eventSeries.getId());