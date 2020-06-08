import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'googlemap';
	zoom = 5;
	markers: any = [];
	// center: {
	// 	lat: 22.839520,
	// 	lng: 69.721329,
	// };
	// map.setCenter({lat: -34, lng: 151});
	// new google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); 
	// center:  google.maps.LatLng;
	center: google.maps.LatLngLiteral | google.maps.LatLng;

		map: google.maps.Map;
	options: google.maps.MapOptions = {
		mapTypeId: 'hybrid',
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		// map:this.map,
		maxZoom: 15,
		minZoom: 8,
	}



	marker = new google.maps.Marker({
		position: {
			lat: 22.839520,
			lng: 69.721329,
		},
		map: this.map,
	});

	// (marker)
	ngOnInit() {
		this.center = new google.maps.LatLng({lat: 22.839520, lng: 69.721329}); //mundra
		this.marker.setMap(this.map);
		// new google.maps.Marker({position: {lat: -34, lng: 151}, map: google.maps}); 
		// this.center = new google.maps.LatLng({lat: 20.5937, lng: 78.9629}); //india
		//   navigator.geolocation.getCurrentPosition(position => {
		//     this.center = {
		//       lat: 22.839520,
		//       lng: 69.721329,
		//     }
		//   })
	}

	addMarker() {
		
	}

	zoomIn() {
		this.markers.push({
			position: {
				lat: (20 + ((Math.random() - 0.5) * 2) / 10),
				lng: (20 + ((Math.random() - 0.5) * 2) / 10),  // lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
				// lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
			},
			label: {
				color: 'red',
				text: 'Marker label ' + (this.markers.length + 1),
			},
			title: 'Marker title ' + (this.markers.length + 1),
			options: { animation: google.maps.Animation.BOUNCE },
		})
		console.log(this.marker)
		// this.center = new google.maps.LatLng({lat: 22.839520, lng: 69.721329}); 
		// this.map.getCenter();
		if (this.zoom < this.options.maxZoom) this.zoom++
	}

	zoomOut() {
		if (this.zoom > this.options.minZoom) this.zoom--
	}


	// addMarker() {
	//   this.markers.push({
	//     position: {
	//       lat: 22.839520,
	//       lng: 69.721329,
	//     },
	//     label: {
	//       color: 'red',
	//       text: 'Marker label ' + (this.markers.length + 1),
	//     },
	//     title: 'Marker title ' + (this.markers.length + 1),
	//     options: { animation: google.maps.Animation.BOUNCE },
	//   })
	// }
}
