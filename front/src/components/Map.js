import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {

    useEffect(() => {
      const container = document.getElementById('myMap');
		  const options = {
        center: new kakao.maps.LatLng(37.587, 127.031698331241),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
      
      console.log(map);
    }, []);

    return (
        <div id='myMap' style={{
            height: '350px'
        }}></div>
    );
}

export default Map; 