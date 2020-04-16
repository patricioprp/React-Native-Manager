import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmpleoyeeList";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial/>
        <Scene key="employeeList" component={EmployeeList} title="Employee List"/>
      </Scene>
    </Router>
  );
};
export default RouterComponent;
