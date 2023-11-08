import { Station } from "../types";

type StationListComponentProps = {
  stations: Station[];
  onStationClick: (props: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Is respponsible for showing the station listing in the left side. Sorts
 * the given list alphabetically, which is something that might be better
 * to do in the parent component.
 */
export const StationListComponent: React.FC<StationListComponentProps> = ({
  stations,
  onStationClick,
}) => (
  <div>
    <h1>Asemat</h1>
    <div className="flex flex-col items-start overflow-auto">
      {[...stations]
        .sort((a, b) => a.name.localeCompare(b.name, "fi"))
        .map((station) => (
          <button
            id={station.id}
            key={`station-${station.id}`}
            onClick={onStationClick}
          >
            {station.name}
          </button>
        ))}
    </div>
  </div>
);
