
var page;
var Page = Class.create();

var PageOptions = Object.extend({
}, window.PageOptions || {});


Page.prototype = {
    hide_divs: function() {
        // Hide the necessary divs to be hidden
		a = Array('programmer', 'sysad', 'netphone');
		a.each(function (part) {
			$(part + '_div').hide();
			$(part + '_menu').src = 'img/' + part + '_menu.gif';
		});	
        $('sysad_div').hide();
        $('netphone_div').hide();
    },
    hide_info: function() {
		$('work').hide();
		$('contact').hide();
		a = Array('mw', 'gmc');
		a.each(function (part) {
			$('nav_' + part).src = 'img/' + part + '1.gif';
		});
    },
	hover: function (part) {
		// Hover Nav
		if (this.nav_choice != part) {
			$('nav_' + part).src = 'img/' + part + '2.gif';
		}
	},
    initialize: function() {
        // Initialize attributes
        this.html = $$('html')[0];
        this.body = $$('body')[0];
        this.all = $('all');
        this.start();
		this.nav_choice = '';
    },
	out: function (part) {
		// Unhover Nav
		if (this.nav_choice != part) {
			$('nav_' + part).src = 'img/' + part + '1.gif';
		}
	},
    show_home: function() {
		this.hide_info();
		this.nav_choice = '';
	},
    show_work: function() {
		this.hide_info();
		this.nav_choice = 'mw';
		$('work').show();
		$('nav_mw').src = 'img/mw3.gif';
	},
    show_contact: function() {
		this.hide_info();
		this.nav_choice = 'gmc';
		$('contact').show();
		$('nav_gmc').src = 'img/gmc3.gif';
	},
    show_div: function(part) {
        // Show what needs to be shown, but hide all others
        div = $(part + '_div');
        menu = $(part + '_menu');
        div.show();
		menu.src = 'img/' + part + '_menu2.gif';
        //div.makePositioned();
    },
    start: function() {
        // Start Methods
        this.hide_divs()
		this.hide_info();
    }
}


document.observe('dom:loaded', function() { page = new Page(); });

