ymaps.ready(init);
  let myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map("map-1", {
    center: [57.586605, 39.900865],
    zoom: 16,
    controls: ['zoomControl']
  });
  myMap.behaviors.disable('scrollZoom');
  myPlacemark = new ymaps.Placemark([57.586605, 39.900865], {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pointer.svg',
    iconImageSize: [45, 45],
    iconImageOffset: [-13, -53]
  });

  myMap.geoObjects.add(myPlacemark);
}







  