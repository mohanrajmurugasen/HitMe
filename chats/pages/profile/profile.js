// @flow
import * as React from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios'

export function Profile(props) {
    // const [todo, settodo] = React.useState([])
    // React.useEffect(() => {
    //     axios.get('http://192.168.43.101:8000/').then(res => {
    //       settodo(res.data)
    //     }).catch(err => console.log(err))
    // },[])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25,fontWeight: "bold",paddingBottom:10}}>Personal Details</Text>
        {/* {todo.map(item => (
          <View key={item._id}>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Name : {" "}</Text>
              <Text style={{fontSize:18}}>{item.Name}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Age : {" "}</Text>
              <Text style={{fontSize:18}}>{item.Age}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>City : {" "}</Text>
              <Text style={{fontSize:18}}>{item.City}</Text>
            </View>
          </View>
        ))} */}
    </View>
  );
};