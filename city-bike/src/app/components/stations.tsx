"use client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import { useCallback, useState } from "react";
import { EnrichedStation, Station } from "../types";
import { StationComponent } from "./station";
import { StationListComponent } from "./stationList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/",
});

const Content: React.FC = () => {
  const [selectedStationId, setSelectedStationId] = useState<string>();
  const { data: stationsData } = useQuery<{ stations: Station[] }>(gql`
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

  const { data: selectedStationData } = useQuery<{ station: EnrichedStation }>(
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
      {stationsData && (
        <StationListComponent
          stations={stationsData.stations}
          onStationClick={onStationClick}
        />
      )}
      {selectedStationData && (
        <StationComponent station={selectedStationData.station} />
      )}
    </>
  );
};

export const Stations = () => (
  <ApolloProvider client={client}>
    <Content />
  </ApolloProvider>
);
