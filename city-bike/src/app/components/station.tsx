import { EnrichedStation } from "../types";

type StationComponentProps = {
  station: EnrichedStation;
};

export const StationComponent: React.FC<StationComponentProps> = ({
  station,
}) => (
  <div className="sticky top-0">
    <h1>{station.name}</h1>
    <h2>{station.address}</h2>
    <br />
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
      {/* Bold assumption that the distance is given in metres */}
      <span>{Math.round(station.avgDepartureDistance ?? 0)} m</span>
    </div>
    <div className="flex flex-row justify-between">
      <h3>Matkan keskimääräinen aika:</h3>
      <span>{station.avgTripDuration?.split(".")[0] ?? "00:00:00"} h</span>
    </div>
  </div>
);
