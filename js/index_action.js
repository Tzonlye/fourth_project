$(function(){
	$('#board-operation a').click(function(e){
		$('#content').hide().load($(this).attr('href'), function(){
			$('#content').show();
		});
		return false;
	});
});


var markers=[]; // markers array

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(24.968436, 121.19589),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('board-map'), mapOptions);

	

  	var marker = new google.maps.Marker({
      position: new google.maps.LatLng(24.968436, 121.19589),
      map: map,
      title: 'Machine (No.1)',
      open_by_click:0 //add a flag for good hover effect
  	});
	 
	var contentString = marker.title+'<h1>TODO: computer infomation goes here</h1>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

  	google.maps.event.addListener(infowindow, 'closeclick', function() {
    	marker.open_by_click=0;
  	}); 

 	google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	    marker.open_by_click=1;
	  });

	 google.maps.event.addListener(marker, 'mouseover', function() {
    	if(marker.open_by_click===0) 
    	infowindow.open(map,marker);
  	});
	 google.maps.event.addListener(marker, 'mouseout', function() {
    	if(marker.open_by_click===0) 
    		infowindow.close(map,marker);
  	});
}




/*
	var drawingManager = new google.maps.drawing.DrawingManager({
								drawingMode: google.maps.drawing.OverlayType.MARKER,
								drawingControl: true,
								drawingControlOptions: {
								position: google.maps.ControlPosition.TOP_CENTER,
								drawingModes: [
									google.maps.drawing.OverlayType.MARKER
								]
							}
							,
							markerOptions: {
								icon: 'image/test.png'
							}
						});
	drawingManager.setMap(map);
*/
