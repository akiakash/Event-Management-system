import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Dashbord from "./components/Dashbord";
import HotelAdd from "./components/Hotel/HotelAdd";
import HotelView from "./components/Hotel/HotelView";
import HotelReport from "./components/Hotel/HotelReport";
import HotelUpdate from "./components/Hotel/HotelUpdate";
import VehicleReport from "./components/Vehicle/VehicleReport";
import VehicleAdd from "./components/Vehicle/VehicleAdd";
import VehicleUpdate from "./components/Vehicle/VehicleUpdate";
import VehicleView from "./components/Vehicle/VehicleView";
import FoodAdd from "./components/Food/FoodAdd";
import FoodReport from "./components/Food/FoodReport";
import FoodUpdate from "./components/Food/FoodUpdate";
import FoodView from "./components/Food/FoodView";
import PackageView from "./components/Package/PackageView";
import PackageAdd from "./components/Package/PackageAdd";
import PackageReport from "./components/Package/PackageReport";
import PackageUpdate from "./components/Package/PackageUpdate";
import EventAdd from "./components/Event/EventAdd";
import EventReport from "./components/Event/EventReport";
import EventUpdate from "./components/Event/EventUpdate";
import EventView from "./components/Event/EventView";
import AgentAdd from "./components/Agent/AgentAdd";
import AgentReport from "./components/Agent/AgentReport";
import AgentUpdate from "./components/Agent/AgentUpdate";
import AgentView from "./components/Agent/AgentView";
import FlightAdd from "./components/Flight/FlightAdd";
import FlightReport from "./components/Flight/FlightReport";
import FlightUpdate from "./components/Flight/FlightUpdate";
import FlightView from "./components/Flight/FlightView";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/HotelAdd" component={HotelAdd} />
      <Route exact path="/HotelView" component={HotelView} />
      <Route exact path="/HotelReport" component={HotelReport} />
      <Route exact path="/HotelUpdate" component={HotelUpdate} />
      <Route exact path="/VehicleReport" component={VehicleReport} />
      <Route exact path="/VehicleView" component={VehicleView} />
      <Route exact path="/VehicleAdd" component={VehicleAdd} />
      <Route exact path="/VehicleUpdate" component={VehicleUpdate} />
      <Route exact path="/FoodAdd" component={FoodAdd} />
      <Route exact path="/FoodReport" component={FoodReport} />
      <Route exact path="/FoodUpdate" component={FoodUpdate} />
      <Route exact path="/FoodView" component={FoodView} />
      <Route exact path="/PackageView" component={PackageView} />
      <Route exact path="/PackageAdd" component={PackageAdd} />
      <Route exact path="/PackageReport" component={PackageReport} />
      <Route exact path="/PackageUpdate" component={PackageUpdate} />
      <Route exact path="/EventAdd" component={EventAdd} />
      <Route exact path="/EventReport" component={EventReport} />
      <Route exact path="/EventUpdate" component={EventUpdate} />
      <Route exact path="/EventView" component={EventView} />
      <Route exact path="/AgentAdd" component={AgentAdd} />
      <Route exact path="/AgentReport" component={AgentReport} />
      <Route exact path="/AgentUpdate" component={AgentUpdate} />
      <Route exact path="/AgentView" component={AgentView} />
      <Route exact path="/FlightAdd" component={FlightAdd} />
      <Route exact path="/FlightReport" component={FlightReport} />
      <Route exact path="/FlightUpdate" component={FlightUpdate} />
      <Route exact path="/FlightView" component={FlightView} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
