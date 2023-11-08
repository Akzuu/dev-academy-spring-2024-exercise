export type Station = {
  id: string;
  name: string;
  address: string;
  x: string;
  y: string;
};

export type EnrichedStation = Station & {
  avgDepartureDistance?: number;
  avgTripDuration?: string;
  totalArrivals?: number;
  totalDepartures?: number;
};
