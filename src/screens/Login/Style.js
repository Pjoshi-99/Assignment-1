import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    heding: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: '#f0434c',
      },
      centreView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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
      text: {
        color: 'white',
        textAlign: 'center'
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
      textBlue: {
        color: 'white',
        textAlign: 'center'
      },
});

export default styles;