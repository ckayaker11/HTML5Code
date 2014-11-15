
	function changeBackground(from, to) {
		var img;
		img = 'Images/AlaskaKayaker.jpg';
        $('#cf3 img').attr("src", img);
		$("#cf2 img.top").toggleClass("transparent");
		//$('#mainBackground').removeClass('background').addClass('background2');	
		//$('#mainBackground').animate({
		//	opacity: 0.01,
		//	height: "toggle"
		// }, 1, function() {
			// Animation complete.
		//  });
		
		//$('#mainBackground').animate({
		//	opacity: 1,		
		//	height: "toggle"
		// }, 2000, function() {
		//	// Animation complete.
		//  });  
	  
	}
	
	function changeBackground2() {
		var img;
		img = 'Images/DSCF0176.jpg';
        $('#cf3 img').attr("src", img);
		$("#cf2 img").addClass("transparent");
		$("#cf3 img").addClass("visible");
		//$("#cf3 img").addClass("visible");
		//$("#cf3 img").addClass("visible");
		//$("#cf3 img").toggleClass("transparent");
	}
	
$(document).ready(function() {
	$("#liEnv").click(function() {
		//$("#cf2 img.top").toggleClass("transparent");
		$("#cf2 img").addClass("transparent");
		$("#cf3 img").addClass("visible");		
	});
	
	$("#downPointer").click(function() {
		//alert("Down Pointer Clicket");
	});	
});
	
 
 
