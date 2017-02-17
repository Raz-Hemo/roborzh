import React, { Component } from 'react';
import {
  Text,
  View,
  PanResponder,
  TouchableHighlight
} from 'react-native';
import { styles, joystickSize } from './styles';

export default class Joystick extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.onLayout = this.onLayout.bind(this);
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.setState({ x: gestureState.x0 - this.joystickX, y: gestureState.y0 - this.joystickY });
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState({ x: gestureState.moveX - this.joystickX, y: gestureState.moveY - this.joystickY });
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: () => {
        this.setState({ x: 0, y: 0 });
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: () => true,
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
    });
  }

  onLayout() {
    this.jview.measureInWindow((x, y, width, height) => {
      this.joystickX = x + width * 0.5;
      this.joystickY = y + height * 0.5;
    });
  }
  render() {
    const { x, y } = this.state;
    const inputRad = Math.min(Math.sqrt(x * x + y * y), joystickSize * 0.5 - 15);
    let innerJoystickX = x * inputRad / Math.sqrt(x * x + y * y);
    let innerJoystickY = y * inputRad / Math.sqrt(x * x + y * y);
    // zero the axes when not taking any input
    if (isNaN(innerJoystickX)) {
      innerJoystickX = 0;
      innerJoystickY = 0;
    }
    innerJoystickX += joystickSize * 0.5 - 20;
    innerJoystickY += joystickSize * 0.5 - 20;

    return (
      <View ref={(v) => { this.jview = v; }} style={styles.joystick} {...this._panResponder.panHandlers} onLayout={this.onLayout}>
        <TouchableHighlight
          activeOpacity={1}
          onPress={() => undefined}
          onHideUnderlay={() => undefined}
          onShowUnderlay={() => undefined}
        >
          <TouchableHighlight
            style={{
              marginLeft: innerJoystickX,
              marginTop: innerJoystickY,
              width: 30,
              height: 30,
              borderRadius: 15,
              borderWidth: 2,
              backgroundColor: '#a05050'
            }}
            activeOpacity={1}
            onPress={() => undefined}
            onHideUnderlay={() => undefined}
            onShowUnderlay={() => undefined}
          >
            <Text />
          </TouchableHighlight>
        </TouchableHighlight>
      </View>);
  }
}
