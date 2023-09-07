'use client'

import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, TypeSelector } from '@pbe/react-yandex-maps';

export const Ymaps = () => {

  return (
    <YMaps >
      <Map className="map" defaultState={{
        center: [55.715616, 37.632727],
        zoom: 11
      }}>
        <Placemark geometry={[55.715616, 37.632727]} />
        <ZoomControl options={{ float: "right" }} />
        <TypeSelector options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
};

export default Ymaps;