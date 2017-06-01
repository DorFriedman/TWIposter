$(document).ready(function() {
	$(".button1").click(function() {
		if ($(".button1").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page1').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page1').fadeIn('slow', 'swing');
		}
	});
	$(".button2").click(function() {
		if ($(".button2").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page2').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page2').fadeIn('slow', 'swing');
		}
	});
	$(".button3").click(function() {
		if ($(".button3").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page3').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page3').fadeIn('slow', 'swing');
		}
	});
	$(".button4").click(function() {
		if ($(".button4").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page4').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page4').fadeIn('slow', 'swing');
		}
	});
	$(".button5").click(function() {
		if ($(".button5").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page5').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page5').fadeIn('slow', 'swing');
		}
	});
	$(".button6").click(function() {
		if ($(".button6").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page6').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page6').fadeIn('slow', 'swing');
		}
	});
	$(".button7").click(function() {
		if ($(".button7").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page7').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page7').fadeIn('slow', 'swing');
		}
	});
	$(".button8").click(function() {
		if ($(".button8").attr('data-selected') === 'false') {
			$(this).closest('ul').find('button').not(this).attr('data-selected', 'false');
			$('.page8').closest('.descContainer').find('.common').not(this).attr('style', 'display:none');
			$(this).attr('data-selected', 'true');
			$('.page8').fadeIn('slow', 'swing');
		}
	});
});