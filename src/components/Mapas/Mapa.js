import React, { useEffect, useRef } from 'react';
import { ScrollToTopButton } from '../ScrollToTopButton';


const Mapa = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapOptions = {
        center: { lat: 40.416775, lng: -3.70379 }, // Madrid coordinates
        zoom: 13,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      const markerData = [
        { id: 1, lat: 40.416775, lng: -3.70379, title: 'Madrid Marker 1' },
        { id: 2, lat: 40.418889, lng: -3.691944, title: 'Madrid Marker 2' },
        { id: 3, lat: 40.4203, lng: -3.705774, title: 'Madrid Marker 3' },
        // Agrega más marcadores según sea necesario
      ];

      const markers = markerData.map(marker => {
        const markerObj = new google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map,
          title: marker.title,
        });

        markerObj.addListener('click', () => {
          map.setZoom(15);
          map.panTo(markerObj.getPosition());
        });

        return markerObj;
      });

      const fitBoundsToMarker = markerId => {
        const marker = markers.find(marker => marker.id === markerId);
        if (marker) {
          const bounds = new google.maps.LatLngBounds();
          bounds.extend(marker.getPosition());
          map.fitBounds(bounds);
        }
      };

      setTimeout(() => {
        fitBoundsToMarker(1);
      }, 1000);
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwagwxR6PPGzFqcl-NG4FPVextZr1Nsds`; // Reemplaza YOUR_API_KEY con tu propia clave de API
    script.async = true;
    script.defer = true;
    script.onload = loadMap;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <ScrollToTopButton />
      <div ref={mapRef} style={{ width: '100%', height: '2000px' }} />
    </div>
  );
};

export default Mapa;
