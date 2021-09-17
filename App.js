import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        source={require ('./src/assets/logologin.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
 );
}

const styles = StyleSheet.create ({
  background : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  containerLogo : {
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    
    
  },

  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
  },

  input: {
    backgroundColor:'#D3D3D3',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:14,
    borderRadius:7,
    padding:10
  },
  btnSubmit: {
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center'

  }


});



  

