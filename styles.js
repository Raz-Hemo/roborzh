import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  joystick: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: '#5d5d5d'
  },
  button: {
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonContainer: {
    paddingTop: 2,
    width: 200,
    height: 40,
    borderRadius: 5,
    borderWidth: 5,
    backgroundColor: '#5d5d5d',
    borderColor: '#000000',
  }
});
