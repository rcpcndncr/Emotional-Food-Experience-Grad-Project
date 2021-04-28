import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/Foundation';

export default function SessionCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const[recordState,setRecordState] = useState(null);


  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.4,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.front
                    ? Camera.Constants.Type.back
                    : Camera.Constants.Type.front
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white',paddingBottom:10,paddingLeft:5  }}> Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                flex: 0.2,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setRecordState(   
                 recordState==='null'
                ?recordAsync()
                :stopRecording()
        


                );
              }}
            >
                <Icon name="record" size='100' color="#900"  />

            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }