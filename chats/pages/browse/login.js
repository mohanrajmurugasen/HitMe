// @flow
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import 'localstorage-polyfill';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";
import store, { buy, decrement, ema, increment } from '../../store/action';

function Login(props) {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [number, setNumber] = React.useState({});
  const submit = () => {
    let collection = {};
    collection.email = email;
    collection.password = password;
    axios.post("http://192.168.43.101:7000/login",collection).then(res => {
        if(res.data === "Password mismatch") {
          alert(res.data);
      }else {
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigation.navigate("Protected");
        props.socket.emit("new_user",collection.email);
        props.buy(number);
        props.ema(email);
      }
      }).catch(err => {
        navigation.navigate("Protected");
      })
  }
   useEffect(() => {
    store.dispatch({ type: increment });
    props.socket.on("all_user", (users) => {
      setNumber(users);
    })
   }, [])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingHorizontal:30}}>
        <Text style={{fontSize:20,marginVertical:25}}>Login</Text>
        <Input 
          placeholder="Enter email..."
          leftIcon={
            <Icon name="mail-sharp" style={{color:"gray",fontSize:25,paddingRight:10}} />
          }
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input 
          placeholder="Enter password..."
          leftIcon={
            <Icon name="lock-closed" style={{color:"gray",fontSize:25,paddingRight:10}} />
          }
          value={password}
          onChangeText={text => setpassword(text)}
          secureTextEntry
        />
        <View style={{flexDirection:"row"}}>
          <Button title='Sign In' onPress={submit} />
          <Text style={{fontSize:25,paddingHorizontal:20}}>or</Text>
          <Button title='Register' onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
  );
};

const connecting = (state) => {
  return{
      socket: state.counter.socket,
      pass: state.testers.name,
      maps: state.setusers.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buy: numbers => dispatch(buy(numbers)),
    ema: emas => dispatch(ema(emas))
  }
}

export default connect(connecting,mapDispatchToProps)(Login);