import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';

export interface TarefaScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function TarefaScreen (props: TarefaScreenProps) {

    //Constantes  
    const nav = useNavigation<NativeStackNavigationProp<TarefaNavegacaoParams, "home">>();

    //Renderizando
    return (
      <View style={styles.body}>
        <Button title="Voltar" onPress={() => nav.goBack()} />
        <ScrollView >
        <Text style={styles.text}>Levanta cedo pra labuta que eu 'to pronto {'\n'}
                Eu muito conto com meu Deus que 'tá no céu{'\n'}
                Eu tenho a senha pra correr em todo canto{'\n'}
                Humildade e a disciplina dos sermão que mãe me deu{'\n'}
                Eu tenho a senha e meu cavalo já 'tá pronto{'\n'}
                E em cima da cela eu mostro que eu mereço meu troféu{'\n'}
                Eu vou, eu vou, colar na vaquejada{'\n'}
                Segunda-feira com certeza 'to por cá{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Eu 'to perdido nas curvas de uma morena{'\n'}
                Vou chegar junto pra sentir o seu perfume{'\n'}
                É a minha sina, é a força da natureza{'\n'}
                Mulher bonita é a fraqueza dos vaqueiros desse mundo{'\n'}
                Se a minha sina é a força da natureza{'\n'}
                Tenho a senha e a certeza, vou dar conta disso tudo{'\n'}
                Eu vou, eu vou, colar na vaquejada{'\n'}
                Segunda-feira com certeza 'to por cá{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Levanta cedo pra labuta que eu 'to pronto{'\n'}
                Eu muito conto com meu Deus que 'tá no céu{'\n'}
                Eu tenho a senha pra correr em todo canto{'\n'}
                Humildade e a disciplina dos sermão que mãe me deu{'\n'}
                Eu tenho a senha e meu cavalo já 'tá pronto{'\n'}
                E em cima da cela eu mostro que eu mereço meu troféu{'\n'}
                Eu vou, eu vou, colar na vaquejada{'\n'}
                Segunda-feira com certeza 'to por cá{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Eu 'to perdido nas curvas de uma morena{'\n'}
                Vou chegar junto pra sentir o seu perfume{'\n'}
                É a minha sina, é a força da natureza{'\n'}
                Mulher bonita é a fraqueza dos vaqueiros desse mundo{'\n'}
                Se a minha sina é a força da natureza{'\n'}
                Tenho a senha e a certeza que eu dou conta disso tudo{'\n'}
                Eu vou, eu vou, colar na vaquejada{'\n'}
                Segunda-feira com certeza 'to por cá{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar{'\n'}
                Pessoal e uma galera animada{'\n'}
                Quem gosta de comer água{'\n'}
                'Tá em brasa a me esperar</Text>
      </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: 100
  },
  text: {
    paddingHorizontal: 10,
  },
});