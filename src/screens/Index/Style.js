import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  centreView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  heding: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: '#f0434c',
  },
  button: {
    backgroundColor: '#f0434c',
    padding: 10,
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  buttonWhite: {
    backgroundColor: 'white',
    padding: 10,
    color: '#f0434c',
    textAlign: 'center',
    borderRadius: 50,
    margin: 10,
    width: 300,
    borderColor: '#f0434c',
    borderWidth: 2,
    fontSize: 15,
  },
  whiteButtonText: {
    color: '#f0434c',
    textAlign: 'center',
  },
});

export default styles;