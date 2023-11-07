import { sql } from './database';

export type Station = {
  id: string;
  name: string;
  address: string;
  coordinateX: string;
  coordinateY: string;
};

export const getStations = async (): Promise<Station[]> => sql`
  SELECT
    id,
    station_name AS name,
    station_address AS address,
    coordinate_x AS x,
    coordinate_y AS y
  FROM station`;
