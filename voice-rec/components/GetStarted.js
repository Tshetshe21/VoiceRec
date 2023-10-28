import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
  
  function GetStarted() {
    return (
      <View>
        <Text style={styles.heading}>Launch Your App</Text>
  <Image
    style={styles.image}
   source={require('../assets/1617.jpg')} />
        <TouchableOpacity style={styles.btn}>
          {' '}
          <Text style={styles.signUpText} > Create account </Text>{' '}
        </TouchableOpacity>
  
         <TouchableOpacity style={styles.btn1}>
          {' '}
          <Text style={styles.signUpText} > SIGN UP </Text>{' '}
        </TouchableOpacity>
        <Text  style={styles.terms}> Terms & Conditions </Text>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingLeft:40,
      marginTop: 50,
  
    },
  
    btn: {
      width: 200,
      backgroundColor: 'skyblue',
      height: 40,
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft:60,
      marginBottom: 20,
    
    },
    
  
    btn1: {
      width: 200,
      backgroundColor: '#d96031',
      height: 40,
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft:60
    
    },
      image: {
      alignContent: 'center',
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft:120,
      width:120,
      height: 120,
    
    
    },
  
    signUpText: {
      color: 'white',
      fontSize: 15  ,
      
      fontWeight:'bold' ,
      paddingLeft: 25
    },
  
    terms: {
      paddingLeft: 100,
      color: 'grey',
      fontSize: 15,
    }
  
    }
  );
  
  export default GetStarted;