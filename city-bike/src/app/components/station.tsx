import { EnrichedStation } from "../types";

type StationComponentProps = {
  station: EnrichedStation;
};

export const StationComponent: React.FC<StationComponentProps> = ({
  station,
}) => (
  <div>
    <h1>{station.name}</h1>
    <h2>{station.address}</h2>
    <div className="flex flex-row justify-between">
      <h3>Kaikki lähdöt: </h3>
      <span>{station.totalDepartures}</span>
    </div>
    <div className="flex flex-row justify-between">
      <h3>Kaikki saapumiset: </h3>
      <span>{station.totalArrivals}</span>
    </div>
    <div className="flex flex-row justify-between">
      <h3>Matkan keskimääräinen pituus:</h3>
      <span>{station.avgDepartureDistance}</span>
    </div>
    <div className="flex flex-row justify-between">
      <h3>Matkan keskimääräinen aika:</h3>
      <span>{station.avgTripDuration}</span>
    </div>
  </div>
);
