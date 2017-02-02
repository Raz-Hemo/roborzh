/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Button from 'react-native-button';
import Joystick from './joystick';
import styles from './styles';

export default class roborzh extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} containerStyle={styles.buttonContainer}>Button 1</Button>
        <Button style={styles.button} containerStyle={styles.buttonContainer}>Button 2</Button>
        <Button style={styles.button} containerStyle={styles.buttonContainer}>Button 3</Button>
        <Joystick />
      </View>
    );
  }
}

AppRegistry.registerComponent('roborzh', () => roborzh);
