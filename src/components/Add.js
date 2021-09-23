import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import './Add.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg';


  const geojson = {
    "type": "FeatureCollection",
    "name": "Petrolio Val d'Agri_Eni",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "Name": "COVA", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.89995753117867, 40.312319147741107 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 1 N - Monte Enoc 3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.93330711340939, 40.336090076816177 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 1-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.936690381478449, 40.327815361416377 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 3D", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.93688776402821, 40.316088140344483 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi E1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.957397861804701, 40.306183167025701 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 6-7-8", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.93390807864087, 40.305559258739819 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 5", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.904584657621591, 40.316341056116762 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Enoc 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.91813089065422, 40.371942821950867 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Enoc 4 - Monte Alpi W1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.89587222013219, 40.32829877614472 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Enoc 10 - Alli 4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.87709402833627, 40.381838276942119 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Enoc 1W-2-9", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.894899150728561, 40.382252824025578 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Volturino 1-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.86793919397234, 40.40547084863708 ] } },
    { "type": "Feature", "properties": { "Name": "Cerro Falcone 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.802008930119911, 40.459759997741173 ] } },
    { "type": "Feature", "properties": { "Name": "Cerro Falcone 2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.799301980472849, 40.4372502606277 ] } },
    { "type": "Feature", "properties": { "Name": "Cerro Falcone 3-4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.784084539781601, 40.471732408471489 ] } },
    { "type": "Feature", "properties": { "Name": "Cerro Falcone 5-8", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.83289459452522, 40.438545959893098 ] } },
    { "type": "Feature", "properties": { "Name": "Agri 1 - Cerro Falcone 6-9", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.74879639978437, 40.42861002711259 ] } },
    { "type": "Feature", "properties": { "Name": "Pergola 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.70213612708068, 40.441980572129992 ] } },
    { "type": "Feature", "properties": { "Name": "Innesto 2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.784834092620679, 40.362796049566008 ] } },
    { "type": "Feature", "properties": { "Name": "Alli 2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.838423450237739, 40.363385933410022 ] } },
    { "type": "Feature", "properties": { "Name": "Sezionamento 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.9291081233916, 40.313416016890073 ] } },
    { "type": "Feature", "properties": { "Name": "Sezionamento 4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.837776961326851, 40.395924129510973 ] } },
    { "type": "Feature", "properties": { "Name": "Sezionamento 3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.83552438450856, 40.331581408011438 ] } },
    { "type": "Feature", "properties": { "Name": "Sezionamento 6", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.8389215960398, 40.362889971490837 ] } },
    { "type": "Feature", "properties": { "Name": "Alli 1-3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.85146067375077, 40.350905088142127 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Enoc 5", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.87703557459121, 40.338681217767487 ] } },
    { "type": "Feature", "properties": { "Name": "Innesto 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.882464255607211, 40.348137717197872 ] } },
    { "type": "Feature", "properties": { "Name": "Impianto 1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.880984057534789, 40.368442396130277 ] } },
    { "type": "Feature", "properties": { "Name": "Impianto 2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.87742709914783, 40.338110213401002 ] } },
    { "type": "Feature", "properties": { "Name": "Monte Alpi 4 X", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.917893285988219, 40.312103238768898 ] } },
    { "type": "Feature", "properties": { "Name": "Costa Molina 2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.9896162744277, 40.325090831021051 ] } },
    { "type": "Feature", "properties": { "Name": "Ex Sant'Elia 1 - Cerro Falcone 7 ", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.800604581048081, 40.398353125431377 ] } },
    { "type": "Feature", "properties": { "Name": "Civita Marsico Vetere", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.816083371555999, 40.380995206443863 ] } },
    { "type": "Feature", "properties": { "Name": "Neo Cluster S.Elia 1 - CF 7", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.811933000420209, 40.383956855630032 ] } },
    { "type": "Feature", "properties": { "Name": "Villa Romana di Barricelle", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.79936923540764, 40.376642368059841 ] } },
    { "type": "Feature", "properties": { "Name": "Sfiatatoio oleodotto", "description": null }, "geometry": { "type": "Point", "coordinates": [ 16.00060000269767, 40.341310665588352 ] } },
    { "type": "Feature", "properties": { "Name": "POZZO DISMESSO (CM3?)", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.95551175961983, 40.328985707347421 ] } },
    { "type": "Feature", "properties": { "Name": "POZZO DISMESSO 2 (CM1?)", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.983608424827491, 40.332456362417723 ] } },
    { "type": "Feature", "properties": { "Name": "Polle LA ROSSA", "description": null }, "geometry": { "type": "Point", "coordinates": [ 16.013350345904751, 40.328736364307943 ] } }
    ]
    }

    const Popup = ({Name}) => (
      <div className="popup">
        <h3 className="well-name">{Name}</h3>
      </div>
    )


const Addmap = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))

  const [lng] = useState(15.899449873224993);
  const [lat] = useState(40.343370687157524);
  const [zoom] = useState(11);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/comuni-dados/ck87kqz1v0hlt1iptdomrfl1y',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right'); 

  map.on("load", () => {
    map.addSource("oil", {
      type: "geojson",
      data: geojson,
    })

    map.addLayer({
      id: "oil-point",
      type: "circle",
      source: "oil",
      paint: {
        "circle-color": "rgba(0,0,0, 0)",
        "circle-radius": 5,
        "circle-stroke-color": "#ffe54c",
        "circle-stroke-width": 4,
      },
    })
  })

  map.on("click", e => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["oil-point"],
    })
    if (features.length > 0) {
      const feature = features[0]
      // create popup node
      const popupNode = document.createElement("div")
      ReactDOM.render(
        <Popup
          Name={feature?.properties?.Name}
        />,
        popupNode
      )
      popUpRef.current
        .setLngLat(e.lngLat)
        .setDOMContent(popupNode)
        .addTo(map)
    }
  })

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>

    <div id="box">
      <div id="title-map">THE WELLS</div>
      <div id="map-box">
        <div className='map-container' ref={mapContainerRef} />
      </div>
    </div>

      <div id="title-source">SOURCES</div>
      <div className="box-txt-source">
        <div className="txt-source">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    

    </div>
  );
  
};

export default Addmap;