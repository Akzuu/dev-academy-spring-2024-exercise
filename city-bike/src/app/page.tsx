"use client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import { ButtonHTMLAttributes, useCallback, useState } from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/",
});

const Asd = () => {
  const [selectedStationId, setSelectedStationId] = useState<string>();
  const { data: stationsData } = useQuery(gql`
    query StationsQuery {
      stations {
        address
        id
        name
        x
        y
      }
    }
  `);

  const { data: selectedStation } = useQuery(
    gql`
      query stationQuery($stationId: ID!) {
        station(id: $stationId) {
          id
          name
          address
          x
          y
          avgDepartureDistance
          avgTripDuration
          totalArrivals
          totalDepartures
        }
      }
    `,
    {
      variables: {
        stationId: selectedStationId,
      },
    }
  );

  const onStationClick = useCallback(
    (props: React.MouseEvent<HTMLButtonElement>) => {
      console.log(props.currentTarget);
      setSelectedStationId(props.currentTarget.id);
    },
    []
  );
  return (
    <>
      <div>
        <h1>Asemat</h1>
        {stationsData?.stations &&
          stationsData.stations.map((station) => (
            <button
              id={station.id}
              key={`station-${station.id}`}
              onClick={onStationClick}
            >
              {station.name}
            </button>
          ))}
      </div>
      <div>
        {selectedStation?.station && (
          <>
            <h1>{selectedStation.station.name}</h1>
            <h2>{selectedStation.station.address}</h2>
            <div className="flex flex-row justify-between">
              <h3>Kaikki lähdöt: </h3>
              <span>{selectedStation.station.totalDepartures}</span>
            </div>
            <div className="flex flex-row justify-between">
              <h3>Kaikki saapumiset: </h3>
              <span>{selectedStation.station.totalArrivals}</span>
            </div>
            <div className="flex flex-row justify-between">
              <h3>Matkan keskimääräinen pituus:</h3>
              <span>{selectedStation.station.avgDepartureDistance}</span>
            </div>
            <div className="flex flex-row justify-between">
              <h3>Matkan keskimääräinen aika:</h3>
              <span>{selectedStation.station.avgTripDuration}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-start justify-between p-24">
      <ApolloProvider client={client}>
        <Asd />
      </ApolloProvider>
    </main>
  );
}
