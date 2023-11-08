import { Station } from "../types";

type StationListComponentProps = {
  stations: Station[];
  onStationClick: (props: React.MouseEvent<HTMLButtonElement>) => void;
};

export const StationListComponent: React.FC<StationListComponentProps> = ({
  stations,
  onStationClick,
}) => (
  <div>
    <h1>Asemat</h1>
    {stations.map((station) => (
      <button
        id={station.id}
        key={`station-${station.id}`}
        onClick={onStationClick}
      >
        {station.name}
      </button>
    ))}
  </div>
);
