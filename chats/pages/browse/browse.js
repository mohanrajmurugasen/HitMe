// @flow
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Per from "../../img/person1.jpeg";
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";

function Browse(props) {
  const navigation = useNavigation(); 
  return (
    <View style={{flex:1}}>
      {props.pass && Object.keys(props.pass).map((user,index) => (
        <View key={user}>
          {
            user !== props.maps ? <View>
              <TouchableOpacity
              style={{backgroundColor:"#ccc",padding:15,marginBottom:1}}
              onPress={() => navigation.navigate("Chating")}
              >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row"}}>
                    <Image source={Per} style={{width:40,height:40,borderRadius:50,marginTop:-4}} />
                      <Text style={{fontSize:20,paddingHorizontal:15}}>{user}</Text>       
                  </View>
                  <Text style={{fontSize:17,backgroundColor:"#065fd4",borderRadius:15,paddingHorizontal:8,color:"white",height:26}}>2</Text>
                </View>
              </TouchableOpacity>
            </View> : null
          }
        </View>
        ))}
        <Text>{props.maps}</Text>
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

export default connect(connecting,null)(Browse);