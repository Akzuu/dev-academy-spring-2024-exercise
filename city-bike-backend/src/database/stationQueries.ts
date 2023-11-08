import { sql } from './database';

export type Station = {
  id: string;
  stationName: string;
  stationAddress: string;
  coordinateX: string;
  coordinateY: string;
};

export type EnrichedStation = Station & {
  avgDepartureDistance: number;
  avgTripDuration: number;
  totalArrivals: number;
  totalDepartures: number;
};

const STATION_COLUMNS = [
  's.id',
  's.station_name',
  's.station_address',
  's.coordinate_x',
  's.coordinate_y',
];

export const getStations = async (): Promise<Station[]> => sql<Station[]>`
  SELECT
    ${sql(STATION_COLUMNS)}
  FROM station s`;

export const getStation = async (id: string): Promise<Station> => {
  const result = await sql<Station[]>`
    SELECT
      ${sql(STATION_COLUMNS)}
    FROM station s
    WHERE s.id = ${id}
  `;

  return result[0];
};

export const getEnrichedStation = async (
  id: string,
): Promise<EnrichedStation> => {
  const result = await sql<EnrichedStation[]>`
    WITH arrivals AS (
      SELECT
        return_station_id,
        COUNT(j.id) AS total_arrivals
      FROM journey j
      GROUP BY return_station_id 
    ), 
    departures AS (
      SELECT
        departure_station_id,
        COUNT(j.id) AS total_departures,
        AVG(j.distance) AS avg_departure_distance,
        AVG(j.return_date_time - j.departure_date_time) as avg_trip_duration
      FROM journey j
      GROUP BY departure_station_id  
    )

    SELECT
      ${sql(STATION_COLUMNS)},
      a.total_arrivals,
      d.total_departures,
      d.avg_departure_distance,
      d.avg_trip_duration
    FROM station s
    JOIN arrivals a ON a.return_station_id = s.id
    JOIN departures d ON d.departure_station_id = s.id
    WHERE s.id = ${id}
  `;

  return result[0];
};
