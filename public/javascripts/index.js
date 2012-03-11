$(function() {
	var slideSpeed = 5000;
	
	function changeImage(current) {
		var nextImage = (current.next().length != 0)? current.next() : current.closest("ul").find("li:first");
		
		
		current.css({zIndex: 2});
		nextImage.addClass("current").css({zIndex: 1}).show();
		current.removeClass("current").fadeOut(1000, function() {
			nextImage.css({zIndex: 2});
		});
		
		setTimeout(function() { changeImage(nextImage) }, slideSpeed);
	}
	
	var images = $("#slides li"),
		random = Math.floor(Math.random() * images.length),
		first = images.eq(random).show();
	setTimeout(function() {
		changeImage(first);
		}, slideSpeed);
});