import { View, Text, ImageBackground, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import bg from './../../assets/imgs/bg.jpg';
import { useState } from 'react';
import { InputRound } from './input';
import { Button } from '@rneui/base';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

export interface LoginScreenProps {
}

export function LoginScreen(props: LoginScreenProps) {

    //Navegação
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login'>
    const nav = useNavigation<navProps>();

    const [ erro, setErro ] = useState<null|string>(null);

    //Funções
    const logar = async ({email, senha}) => {
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (email.trim() == 'teste@teste.com' && senha == '123456')
        nav.navigate('app', {email: 'teste'})
      else
        setErro('Email ou senha incorreta!');
    }

    return (
        <ImageBackground source={bg} style={styles.background}>
          <Formik 
              initialValues={{email:'', senha:''}}
              validationSchema={Yup.object({
                email: Yup.string().required('Informe o email').email('Email inválido'),
                senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa de 6 caracteres')
              })}
              onSubmit={logar}>
              {({errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting}) => (
                    <View style={styles.container}>
                        <Text style={styles.logo}>music.br</Text>

                        {/* EMAIL  */}
                        <InputRound placeholder='Digite seu email' icone='person' onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
                        {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        {/* SENHA */}
                        <InputRound placeholder='Digite sua senha' icone='lock' senha  onChangeText={handleChange('senha')} onBlur={handleBlur('senha')}/>
                        {touched.senha && errors.senha && <Text style={styles.error}>{errors.senha}</Text>}

                        {erro && <Text style={styles.erroLogin}>{erro}</Text>}

                        {isSubmitting && <ActivityIndicator size="large" color="blue" />}
                        {!isSubmitting && <Button title="Logar" onPress={() => handleSubmit()} containerStyle={styles.btn} />}

                        <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                    </View>
              )}
          </Formik>
        </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
      cadastrar: {
        fontSize: 20,
        color: 'white',
        margin: 30,
        textAlign: 'center',
        textDecorationLine: 'underline',
        
      },
      background: {width:'100%', height:'100%'},
      container: {
          flex: 1,
          justifyContent: 'center',
          padding: 10,
          alignItems: 'stretch'
      },
      error:{color:'white', fontSize: 15, textAlign:'right', marginBottom: 5, marginTop: -10, marginRight: 20, padding: 5},
      erroLogin:{color:'white', fontSize: 20, marginBottom: 5, textAlign:'center'},
      btn: {borderRadius:30, marginTop: 10, marginHorizontal: 10},
      logo: { color: 'white', fontSize: 50, textAlign: 'center', marginBottom: 30}
});
  
