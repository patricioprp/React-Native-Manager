import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({ children, visible, onAcept, onDecline }) => {
    const { cardSectionStyles, textStyles, containerStyles } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyles}>
        <CardSection style={cardSectionStyles}>
          <Text style={textStyles}>
          {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAcept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyles: {
      justifyContent:'center'
  },
  textStyles: {
      flex: 1,
      fonstSize: 18,
      textAlign:'center',
      lineHeight:40
  },
  containerStyles: {
      backgroundColor:'rgba(0,0,0,0.75)',
      position:'relative',
      flex:1,
      justifyContent:'center'
  }
};

export { Confirm };
