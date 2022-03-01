import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
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
  hyperlink: {
    color: 'blue',
    margin: 5,
  },
  buttonView: {
    marginHorizontal: 100,
    marginVertical: 30,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f0434c',
    padding: 10,
    color: 'white',
    textAlign: 'center',
    borderRadius: 50, 
  },
  flexdir: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textView: {
    textAlign: 'center', 
    margin: 20, 
    color: 'black', 
    fontSize: 20,
  },
  buttonBlue: {
    backgroundColor: '#2b66c4',
    padding: 15,
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
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
    fontSize: 15
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  whiteButtonText: {
    color: '#f0434c',
    textAlign: 'center',
  },
  textBlue: {
    color: 'white',
    textAlign: 'center'
  },
});

export default style;
