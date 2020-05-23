import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Button, Input } from "./common";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Lunes" }); //por defecto el picker carga el lunes pero si no locargamos asi da error
  }

  render() {
    return (
      <Card>        
     <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeFormReducer }) => {
  const { name, phone, shift } = employeeFormReducer;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeCreate
  }
)(EmployeeCreate);