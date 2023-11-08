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

/**
 * Queries the database and returns all the stations available.
 */
export const getStations = async (): Promise<Station[]> => sql<Station[]>`
  SELECT
    ${sql(STATION_COLUMNS)}
  FROM station s`;

/**
 * Queries so called enriched station (name pending) which basically
 * is a station with some extra information about departures and arrivals.
 *
 * The query is constructed with two CTEs which query the journey table and
 * calculate the necessary averages and totals. I decided to use this approach
 * instead of doing the calculations in node.js runtime since in my experience
 * letting the SQL server do the heavy lifting here helps with the overall
 * performance.
 */
export const getEnrichedStation = async (
  stationId: string,
): Promise<EnrichedStation> => {
  /** Notice that we can use template strings inside the query
   * without worrying about SQL injections.
   * https://github.com/porsager/postgres#query-parameters
   */
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
    WHERE s.id = ${stationId}
  `;

  return result[0];
};
