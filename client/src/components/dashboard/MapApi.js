import 'ol/ol.css';
import React from 'react';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import ZoomSlider from 'ol/control/ZoomSlider';
import { defaults as defaultControls } from 'ol/control';

export const MapApi = () => {
  const view = new View({
    center: [528628.563458, 5821296.662223],
    zoom: 18,
    extent: [-572513.341856, 5211017.966314, 916327.095083, 6636950.728974]
  });
  new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    keyboardEventTarget: document,
    target: 'map',
    view: view,
    projection: 'EPSG:3059',
    controls: defaultControls().extend([new ZoomSlider()])
  });

  return <div id="map" className="map"></div>;
};
