import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Button, Input } from "./common";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Lunes" }); //por defecto el picker carga el lunes pero si no locargamos asi da error
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Nombre"
            value={this.props.name}
            onChangeText={value => {
              this.props.employeeUpdate({ prop: "name", value });
            }}
            //Es equivalente a onChangeText={text => {this.props.employeeUpdate({prop: 'name', value: text})}}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555-5555"
            value={this.props.phone}
            onChangeText={value => {
              this.props.employeeUpdate({ prop: "phone", value });
            }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => {
              this.props.employeeUpdate({ prop: "shift", value });
            }}
          >
            <Picker.Item label="Lunes" value="Lunes" />
            <Picker.Item label="Martes" value="Martes" />
            <Picker.Item label="Miercoles" value="Miercoles" />
            <Picker.Item label="Jueves" value="Jueves" />
            <Picker.Item label="Viernes" value="Viernes" />
            <Picker.Item label="Sabado" value="Sabado" />
            <Picker.Item label="Domingo" value="Domingo" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = ({ employeeFromReducer }) => {
  const { name, phone, shift } = employeeFromReducer;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeCreate
  }
)(EmployeeCreate);
