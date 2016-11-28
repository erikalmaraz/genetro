jQuery(document).ready(function(){
	console.log('kss')
	//
	jQuery('.home.post-type-archive-tc_events .fusion-page-title-bar-none').addClass('CoursesBg');

	jQuery('.BarceloMethod--Insemination--Form--First--NextBtn').click(function(){
		jQuery('.BarceloMethod--Insemination--Form--Second').fadeIn();
		jQuery('.BarceloMethod--Insemination--Form--First').fadeOut();		
		console.log('sksk')
	});
})
