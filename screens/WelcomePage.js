import React,{useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WelcomePage = ({navigation}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Signup');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Supa<Text style={styles.span}>Menu</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9403',
  },

  text:{
    fontSize:30,
    fontWeight:900,
  },

  span:{
    fontSize:30,
    fontWeight:900,
    color: '#fff'
  }

})


export default WelcomePage