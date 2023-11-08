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

/**
 * Handles data querying and conditionally rendering the application
 * components.
 */
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
    <div className="flex flex-row justify-between w-full">
      <div className="basis-2/3">
        {stationsData && (
          <StationListComponent
            stations={stationsData.stations}
            onStationClick={onStationClick}
          />
        )}
      </div>
      <div className="basis-1/3">
        {selectedStationData && (
          <StationComponent station={selectedStationData.station} />
        )}
      </div>
    </div>
  );
};

/**
 * Stations view base component, which also gives access to the
 * Apollo provider
 */
export const Stations = () => (
  <ApolloProvider client={client}>
    <Content />
  </ApolloProvider>
);
