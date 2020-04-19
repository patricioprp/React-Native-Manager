import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
          label="Name" 
          placeholder="Nombre" 
          value={this.props.name}
          onChangeText={value => {this.props.employeeUpdate({prop: 'name', value})}}
          //Es equivalente a onChangeText={text => {this.props.employeeUpdate({prop: 'name', value: text})}}
          />
        </CardSection>

        <CardSection>
          <Input 
          label="Phone" 
          placeholder="555-5555-5555" 
          value={this.props.phone}
          onChangeText={ value => {this.props.employeeUpdate({prop: 'phone', value})}}
          />
        </CardSection>

        <CardSection>
          <Input />
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (employeeFromReducer) =>{
    const { name, phone, shift } = employeeFromReducer;

    return { name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);
