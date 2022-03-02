// @flow
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";

export function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  // const [imageURL, setimageURL] = React.useState("");
  const submit = () => {
    let collection = {};
    collection.name = name;
    collection.email = email;
    collection.password = password;
    axios.post("http://192.168.43.101:7000/register",collection).then(res => {
        if(res.data === "User already exists") {
            alert(res.data);
        }else {
            alert(res.data);
        }
      }).catch(err => {
          console.error(err.message);
      })
  }
  
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingHorizontal:30}}>
        <Text style={{fontSize:20,marginVertical:25}}>Register</Text>
        <Input 
          placeholder="Enter name..."
          leftIcon={
            <Icon name="sad" style={{color:"gray",fontSize:25,paddingRight:10}} />
          }
          value={name}
          onChangeText={text => setName(text)}
        />
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
          onChangeText={text => setPass(text)}
          secureTextEntry
        />
        {/* <Input 
          placeholder="Enter imageURL..."
          leftIcon={
            <Icon name="person" style={{color:"gray",fontSize:25,paddingRight:10}} />
          }
          value={imageURL}
          onChangeText={text => setimageURL(text)}
        /> */}
        <View style={{flexDirection:"row"}}>
          <Button title='Register' onPress={submit} />
        </View>
    </View>
  );
};