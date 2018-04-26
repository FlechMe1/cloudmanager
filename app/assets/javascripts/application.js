// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require popper
//= require moment
//= require bootstrap
//= require fullcalendar
//= require fullcalendar/lang/fr
//= require_tree .

$.noConflict();

jQuery(document).ready(function($) {

  "use strict";
  $("[rel='tooltip']").tooltip();

  moment.locale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
  });

  $('#calendar').fullCalendar({
    locale: 'fr',
    selectable: true,
    header: {
      left: 'month,agendaWeek,agendaDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear'
    },
    eventSources: [
      {
        url: '/events.json',
        color: '#007bff',
        textColor: 'white',
        data:{ category: 'appointment' }
      },
      {
        url: '/events.json',
        color: '#17a2b8',
        textColor: 'white',
        data:{ category: 'call' }
      },
      {
        url: '/events.json',
        color: '#868e96',
        textColor: 'white',
        data:{ category: 'meeting' }
      },
      {
        url: '/events.json',
        color: '#dc3545',
        textColor: 'white',
        data:{ category: 'task' }
      },
      {
        url: '/events.json',
        color: '#ffc107',
        textColor: 'white',
        data:{ category: 'mail' }
      }
    ],
    select: function(startDate, endDate){

      var ms = moment(endDate,"DD/MM/YYYY HH:mm:ss").diff(moment(startDate,"DD/MM/YYYY HH:mm:ss"));
      var d = moment.duration(ms);
      var dif = d.valueOf();

      // IF dif > 86400000 more than one day

      if(dif > 86400000){
        $.ajax({
          url: '/events/new',
          data: {start_at: startDate.format(), end_at: endDate.format()}
        });
      }else{
        $.ajax({
          url: '/events/new',
          data: {start_at: startDate.format()}
        });
      }
    },
    eventClick: function(calEvent, jsEvent, view) {
      jsEvent.preventDefault();
      $.ajax({
        url: calEvent.url
      });
    }
  });

  $('.remove_fields').click(function(){
    $(this).parents('tr').fadeOut();
  });

  $('#menuToggle').on('click', function(event) {
    $('body').toggleClass('open');
  });

  $('.search-trigger').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').addClass('open');
  });

  $('.search-close').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').removeClass('open');
  });


});