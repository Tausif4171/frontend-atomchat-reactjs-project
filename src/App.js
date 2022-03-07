import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Contacts from "./pages/Contacts";
import CreateGroup from "./pages/groups/CreateGroup";
import SixthPage from "./pages/SixthPage";
import Groups from "./pages/groups/Groups";

import TenthPage from "./pages/TenthPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { Suspense } from "react";
import "./App.css";
// import "./thirtySeventh.css";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import SeventhPage from "./pages/Seventh";
import EighthPage from "./pages/EighthPage";
import EleventhPage from "./pages/EleventhPage";
import ThirtyPage from "./pages/ThirtyPage";
import ThirtyThreePage from "./pages/ThirtyThreePage";
import TwelfthOne from "./pages/TwelfthOne";
import ThirteenthOne from "./pages/ThirteenthOne";
import NingthPage from "./pages/NingthPage";
import ThirtySeventh from "./pages/ThirtySeventh";
import ThirtyEight from "./pages/ThirtyEight";

function App() {
  return (
    <Routes>
      <Route exact={true} path={"/1"} element={<FirstPage />} />
      <Route exact={true} path={"/2"} element={<SecondPage />} />
      <Route exact={true} path={"/3"} element={<ThirdPage />} />
      <Route exact={true} path={"/4"} element={<FourthPage />} />
      <Route exact={true} path={"/7"} element={<SeventhPage />} />
      <Route exact={true} path={"/8"} element={<EighthPage />} />
      <Route exact={true} path={"/9"} element={<NingthPage />} />
      <Route exact={true} path={"/10"} element={<TenthPage />} />
      {/* <Route exact={true} path={"/11"} element={<EleventhPage />} />
      <Route exact={true} path={"/12"} element={<TwelfthOne />} /> */}
      <Route exact={true} path={"/11"} element={<ThirtySeventh />} />
      <Route exact={true} path={"/12"} element={<ThirtyEight />} />
      <Route exact={true} path={"/13"} element={<ThirteenthOne />} />
      <Route exact={true} path={"/30"} element={<ThirtyPage />} />
      <Route exact={true} path={"/33"} element={<ThirtyThreePage />} />
      <Route exact={true} path={"/contacts"} element={<Contacts />} />
      <Route
        exact={true}
        path={"/create_new_group"}
        element={<CreateGroup />}
      />
      <Route exact={true} path={"/6"} element={<SixthPage />} />
      <Route exact={true} path={"/all_groups"} element={<Groups />} />

      <Route exact={true} path={"/10"} element={<TenthPage />} />
    </Routes>
  );
}

export default App;
