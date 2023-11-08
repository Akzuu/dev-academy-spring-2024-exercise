import { Stations } from "./components/stations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-start justify-between p-24">
      <Stations />
    </main>
  );
}
