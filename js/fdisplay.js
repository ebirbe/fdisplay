/**
 * Author: Erick Birbe <erickcion@gmail.com>
 * Date: 2016-08-09
 * */

var modules = [
	'sales',
	'accounting',
	'hr',
	'documents',
	'reports',
	'warehouse'
];
var def_logo = 'img/odoomx.png';

function change_img(new_img){
	$('.img-logo').attr('src', new_img);
}

function start_again(){
	modules.forEach(function(item, index){
			$("#info_mod_" + item).not(":hidden")
				.hide('slide', {'direction': 'down'}, 'fast', function(){
					$('.img-module')
						.show('slide', {'direction': 'up'}, 'slow');
				});
		});
}

function show_module_info(mod_name){
	$('.img-module')
		.hide('slide', {'direction': 'down'}, 'fast', function(){
			$("#info_mod_" + mod_name)
				.show('slide', {'direction': 'down'}, 'slow');
		});
}

// Expand to the size of screen
$('.viewport').height($(window).height());

// Hide info div's
$("div[id^='info_mod_']").hide();

$(document).ready(function(){

	$('.img-module')
		.mouseover(function(){
			$(this).effect('bounce', {'times':1, 'distance':10}, 'slow');
		})
		.click(function(){
			var mod_name = $(this).attr('id').replace('img_mod_', '');
			show_module_info(mod_name);
		});

	$('.img-logo')
		.click(function(){
			start_again();
		});

	$('.fd_back')
		.click(function(){
			start_again();
		});

});
