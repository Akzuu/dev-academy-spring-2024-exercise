import { sql } from './database';

export type Station = {
  id: string;
  stationName: string;
  stationAddress: string;
  coordinateX: string;
  coordinateY: string;
};

const STATION_COLUMNS = [
  'id',
  'station_name',
  'station_address',
  'coordinate_x',
  'coordinate_y',
];

export const getStations = async (): Promise<Station[]> => sql<Station[]>`
  SELECT
    ${sql(STATION_COLUMNS)}
  FROM station`;

export const getStation = async (id: string): Promise<Station> => {
  const result = await sql<Station[]>`
    SELECT
      ${sql(STATION_COLUMNS)}
    FROM station
    WHERE id = ${id}
  `;

  return result[0];
};
