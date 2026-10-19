import { meny } from "./data/meny";
import Menu from "./components/Menu";
import "./App.css";

export default function App() {
  return (
    <>
      <Menu meny={meny} />
    </>
  );
}
