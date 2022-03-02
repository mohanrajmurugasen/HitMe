// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, ScrollView, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Per from "../../img/person2.png";
import * as ImagePicker from 'expo-image-picker';

export function Chating(props) {
    const [image, setImage] = React.useState(null);
    React.useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
  return (
    <View style={{flex:1}}>
        <ScrollView style={{padding:10}}>
            <View style={{flexDirection:"row",backgroundColor:"#ccc",width:250,paddingHorizontal:8,paddingVertical:8,borderRadius:10}}>
                <Image source={Per} style={{width:30,height:30,borderRadius:50,marginTop:-2}} />
                <Text style={{fontSize:17,paddingHorizontal:10}}>chat</Text>
            </View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </ScrollView>
        <View style={{alignItems:"flex-end",marginBottom:-15}}>
            <View style={{flexDirection:"row",paddingHorizontal:5}}>
                <Input style={{padding:10}}/>
                <TouchableOpacity
                style={{backgroundColor:"gray",height:30,paddingHorizontal:10,borderRadius:10,marginTop:10}}
                onPress={pickImage}
                >
                    <Text style={{fontSize:16,marginTop:2,color:"white"}}>choose</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{backgroundColor:"#065fd4",height:50,paddingHorizontal:10,borderRadius:10}}
                >
                    <Text style={{fontSize:18,marginTop:10,color:"white"}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};