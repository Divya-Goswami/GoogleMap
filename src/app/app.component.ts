import { Component, OnInit, ViewChild } from '@angular/core'
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'

import { ApiService } from './api.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild(GoogleMap, { static: false }) map: GoogleMap
	@ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

	zoom = 5
	center: google.maps.LatLngLiteral

	options: google.maps.MapOptions = {
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeId: 'hybrid',
		maxZoom: 15,
		minZoom: 5,
	}
	markers = []
	infoContent = ''

	constructor(private apiService: ApiService) {
	}

	ngOnInit() {
		navigator.geolocation.getCurrentPosition(position => {
			this.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};

			this.apiService.getRows().subscribe((res) => {
				let res_length = Object.keys(res).length;
				if (res_length > 0) {
					Object.entries(res).forEach(([key, container]) => {
						Object.entries(container.container_detail).forEach(
							([key, val]) => {
								this.infoContent = '<div><img src="' + container.img_src + '"alt="thumbnail" class="img-thumbnail" style="width: 200px"><br/>Container Type : <b>' + val['type'] + '</b><br/>Container Size : <b>' + val['size'] + '</b><br/>Ageing Days : <b>' + val['ageing_day'] + '</b></div>'
							});

							this.markers.push({
								position: {
									lat: container.lat,
									lng: container.lgn
								},
								label: {
									color: "black",
									text: container.container_no
								},
								title: container.container_no,
								info: this.infoContent,
								options: {
									animation: google.maps.Animation.BOUNCE
								}
							});
						});
				}
			}, (err) => {
				console.log(err);
			});
		})
	}

	click(event: google.maps.MouseEvent) {
		console.log(event)
	}

	openInfo(marker: MapMarker, content) {

		this.infoContent = content
		this.info.open(marker)
	}
}