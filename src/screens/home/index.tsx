import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavegacaoPrincipalParams } from '../../navigation';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';
import joaogomes from './../../assets/imgs/joaogomes.jpg';
import { StackNavigationProp } from '@react-navigation/stack';


export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = StackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();

    ///Renderizando
    return (
      <View style={styles.body}>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Top 3 musicas mais tocadas:</Text>
          
        </View> 
        <View style={styles.music} >
          <Image source={joaogomes} style={styles.background}></Image>
          <Text style={styles.texto}>Eu Tenho a Senha</Text>
          <Text style={styles.texto}>João Gomes</Text>
          <Button title="Letra" onPress={() => nav.navigate("tarefa",{tarefa: {id:1}})} />
        </View>
        <View style={styles.music} >
          <Image source={joaogomes} style={styles.background}></Image>
          <Text style={styles.texto}>Digo Ou Não Digo</Text>
          <Text style={styles.texto}>João Gomes</Text>
          <Button title="Letra" />
        </View>
        <View style={styles.music} >
          <Image source={joaogomes} style={styles.background} ></Image>
          <Text style={styles.texto}>Mete um block nele </Text>
          <Text style={styles.texto}>João Gomes</Text>
          <Button title="Letra"  />
          
        </View>
        <View style={styles.btn} >
          <Button title="Voltar" onPress={() => nav.goBack()}  />
        </View>
        
        
          
        
        
      </View>
    );
}


const styles = StyleSheet.create({
  texto: { fontSize: 13, color: 'white', marginTop: 10, padding: 7, fontFamily: 'Arial'},
  inputContainer:{
      backgroundColor:'rgba(255,255, 255, 0.3)',
      borderRadius: 30,
      paddingLeft: 10,
      marginBottom: -15
  },
  body: {
    flex: 1,
    paddingVertical: 30,
  },
  
  background: {width:100, height:100},
  music: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    
  },
  titleText:{
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: 'blue',
    fontFamily: "Arial"
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
    
  },
  btn: {
    backgroundColor: 'black',
    marginBottom: -30
  },
  ultima: {
    
  }
 
});