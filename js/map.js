import datas from '../datas.json';
require('../css/styles.css');

let map = '';
const markerArray = [];

const initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 45.490132, lng: -73.735986}
  });
};
window.initMap = initMap;

const update = (i) => {
  clearMarkers();
  for (let j = 0; j < (Object.keys(datas).length - 1); j++) {
		const marker = new google.maps.Marker({
			position: datas[j][i],
			map: map
		});
	markerArray.push(marker);
  }
};

(() => {
	let i = 0;
	setInterval(() => {
		i = (i === 10) ? 0 : i;
		i++;
		update(i);
	}, 1000);
})();

const clearMarkers = () => {
	if (markerArray) {
		for (let i = 0; i < markerArray.length; i++) {
			markerArray[i].setMap(null);
		}
	}
};
