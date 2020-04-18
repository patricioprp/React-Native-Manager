import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card,CardSection,Button,Input } from './common';

class EmployeeCreate extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Name"
                    placeholder="Nombre"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    label="Phone"
                    placeholder="555-5555-5555"
                    />
                </CardSection>

                <CardSection>
                    <Input />
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default EmployeeCreate;