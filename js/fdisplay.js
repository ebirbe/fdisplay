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
	$('#module-info').hide('slide', {'direction': 'down'}, 'fast', function(){
		$('.img-module').show('slide', {'direction': 'up'}, 'slow');
	});
}

$('#module-info').hide();
$('.viewport').height($(window).height());

$(document).ready(function(){

	$('.img-module')
		.mouseover(function(){
			$(this).effect('bounce', {'times':1, 'distance':10}, 'slow');
		})
		.click(function(){
			$('.img-module').hide('slide', {'direction': 'down'}, 'fast', function(){
				$('#module-info').show('slide', {'direction': 'down'}, 'slow');
			});
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
