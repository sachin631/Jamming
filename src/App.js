import { BrowserRouter, Route, Routes } from "react-router-dom";
import One410 from "./pages/mobile/One410";
import Two414 from "./pages/mobile/Two414";
import Three413 from "./pages/mobile/Three413";
import Four from "./pages/mobile/Four";
import PlayInstrument from "./pages/mobile/PlayInstrument";
import InstrDrop from "./pages/mobile/InstrDrop";
import Drum420 from "./pages/mobile/Drum420";
import SelectLan from "./pages/mobile/SelectLan";
import LanDrop from "./pages/mobile/LanDrop";
import Lan423 from "./pages/mobile/Lan423";
import Main210 from "./pages/mobile/Main210";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="md:hidde block">
                <One410 />
              </div>
            }
          />
          <Route
            path="/two"
            element={
              <div className="md:hidde block">
                <Two414 />
              </div>
            }
          />
          <Route
            path="/three"
            element={
              <div className="md:hidde block">
                <Three413 />
              </div>
            }
          />
          <Route
            path="/four"
            element={
              <div className="md:hidde block">
                <Four />
              </div>
            }
          />
          <Route
            path="/play"
            element={
              <div className="md:hidde block">
                <PlayInstrument />
              </div>
            }
          />
          <Route
            path="/dropinstru"
            element={
              <div className="md:hidde block">
                <InstrDrop />
              </div>
            }
          />
          <Route
            path="/drum420"
            element={
              <div className="md:hidde block">
                <Drum420 />
              </div>
            }
          />
          <Route
            path="/selectlanguage"
            element={
              <div className="md:hidde block">
                <SelectLan />
              </div>
            }
          />
          <Route
            path="/landrop"
            element={
              <div className="md:hidde block">
                <LanDrop />
              </div>
            }
          />
          <Route
            path="/lan423"
            element={
              <div className="md:hidde block">
                <Lan423 />
              </div>
            }
          />
          <Route
            path="/main210"
            element={
              <div className="md:hidde block">
                <Main210 />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
