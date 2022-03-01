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
      flexdir: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
      text: {
        color: 'white',
        textAlign: 'center'
      },
});

export default styles;