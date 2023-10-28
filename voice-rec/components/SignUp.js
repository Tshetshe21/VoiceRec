import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    TextInput
  } from 'react-native';
  
  function SignUp() {
    return  (
   <View style={styles.main}>
    
    <Text  style={styles.sign}>
    Create account
    </Text>
    
    <Image source={require('../assets/icons8-intelligence-30.png')}   style={styles.image}   />
        <View style={styles.inputbox}>
  
          
          <TextInput
            style={styles.email}
         
            placeholder="E-mail"
            keyboardType="numeric"
          />
        </View>
  
        <View style={styles.inputbox}>
        
         <TextInput
          style={styles.password}
        
         
          placeholder="Password"
          keyboardType="numeric"
        />
        </View>
  
        
        <Text  style={styles.logged}> Keep me logged in </Text>
  
        <TouchableOpacity style={styles.btn1}>
          {' '}
          <Text style={styles.SignUp} > GO! </Text>{' '}
        </TouchableOpacity>
  
        <Text  style={styles.terms}> Forgot Password? </Text>
        
     </View>
    )
   
  }
  
  
  
  const styles=StyleSheet.create({
  main: {
   backgroundColor: "#8ca4cc",
   
  },
  
  sign:{
    paddingLeft: 10, 
    fontSize: 30,
    fontWeight: 'bold'
  },
  
  image: {
   marginLeft: 80,
   height: 150,
   width: 150,
  },
  
   email: {
      width: 200,
      backgroundColor: 'skyblue',
      height: 40,
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft:60,
      marginBottom: 20,
      
      
   },
  
   inputbox: {
     flexDirection: "row",
     backgroundColor:'skyblue',
     width: 1,
   },
  
  emailImg: {
    width:20,
    height:20,
    marginLeft:10,
  
    
  },
  lock:{
      width:20,
    height:20,
    marginLeft:40,
    
  },
  
      password: {
      width: 200,
      backgroundColor: 'skyblue',
      height: 40,
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft:60,
      marginBottom: 20,
      },
  
      logged: {
      paddingLeft: 100,
      color: 'grey',
      fontSize: 15,
    },
  
    btn1: {
      width: 200,
      backgroundColor: 'purple',
      height: 40,
      borderRadius: 20,
      paddingTop: 15,
      paddingLeft: 30,
      marginLeft: 60,
    
    },
  
     terms: {
      paddingLeft: 100,
      color: 'grey',
      fontSize: 15,
    },
  
  
  });
  
  export default SignUp