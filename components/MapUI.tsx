"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MapUI() {
  const defaultState = {
    center: [52.413138, 30.970763],
    zoom: 13,
  };

  return (
    <article className="w-2/3">
      <YMaps>
        <Map defaultState={defaultState} width="100%" height={500}>
          <Placemark geometry={[52.413138, 30.970763]} />
        </Map>
      </YMaps>
    </article>
  );
}
