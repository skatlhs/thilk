import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import { authToken } from '../../utils/constants'
import { startMainApp } from '../../Nav';
const COLORS_GRADIENTS = ['#ff3d78', '#ff7537'];

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    header: {
        flex: 0.3,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    content: {
        flex: 1,
        alignSelf: 'stretch'
    },
    
    bgImage: {
        flex: 1,
    },
    
    imageFont: {
        color: 'white'
    },
    
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    
    sectionStart: {
        justifyContent: 'flex-start'
    },
    
    inputWrapper: {
        height: 45,
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        marginBottom: 10,
        padding:10
    },
    
    input: {
        flex: 1,
        padding: 0
    },
    
    loginButton: {
        width: '95%',
        paddingVertical: 15,
                borderRadius: 5
    },
    
    myWidth: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    centerText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    
    forgot: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    
    forgotLink: {
        color: '#ff3d78',
        color: '#ff7537',
    },
    
    orWrapper: {
        width: '90%',
        marginVertical: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
   
    orDivider: {
        height: 1,
        width: '100%',
        flex: 1,
        backgroundColor: '#a7a7a740',
    },
    
    orTextWrapper: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    orText: {
        color: '#a7a7a7'
    },
    
    loginFb: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45
    },
    
    fbText: {
        color: "#318DEE",
        marginLeft: 10
    },
    
    noAccount: {
        height: 50,
        width: '100%',
        borderColor: '#a7a7a740',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})

class LoginScreen extends Component {
    state = { loading: false }

  _onLoginFbPress = async () => {
    this.setState({ loading: true })
    const res = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      
    if (res.grantedPermissions && !res.isCancelled) {
      const data = await AccessToken.getCurrentAccessToken();
        
        
        if (data) {
           const serverResponse = await this.props.loginMutation({
               variables: {
                   provider: 'FACEBOOK',
                   token: data.accessToken,
               },
           });
        
        
      const { token } = serverResponse.data.login;
            
        try {
          await AsyncStorage.setItem(authToken, token);
          state = { loading: false }
          startMainApp();
        } catch (error) {
            throw error;
        }
            
      }
    }
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.root}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return(
           <View style={styles.root}>
            <StatusBar barStyle="light-content" />
            <LinearGradient 
                start={{ x: 0.0, y: 0.0 }} 
                end={{ x: 1.0, y: 1.0 }}
                colors={COLORS_GRADIENTS} 
                style={styles.header}>
                
            <Image source={require('../../../images/thilk-jet-pilot.png')} / > 
            </LinearGradient>

            <View style={styles.content}>
                <View style={styles.section}>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="email" />
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="password" />                        
                    </View>
                    
                    <TouchableOpacity style={styles.myWidth}>
                        <LinearGradient 
                            start={{ x: 0.0, y: 0.0 }} 
                            end={{ x: 1.0, y: 1.0 }}
                            colors={COLORS_GRADIENTS} 
                            style={styles.loginButton}>           
                                <Text style={styles.centerText}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    
                    <View style={styles.forgot}>
                        <Text style={{ color: '#a7a7a7' }}>Forgot your log in?</Text>
                            <TouchableOpacity>
                                <Text style={styles.forgotLink}> Get help signing in</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#a7a7a7' }}>.</Text>
                    </View>
                </View>

                <View style={styles.orWrapper}>
                    <View style={styles.orDivider} />
                    <View style={styles.orTextWrapper}>
                        <Text style={styles.orText}>OR</Text>
                    </View>
                    <View style={styles.orDivider} />
                </View>

          <View style={[styles.section, styles.sectionStart]}>
                   <TouchableOpacity onPress={this._onLoginFbPress} style={styles.loginFb}> 
                     <FontAwesome size={30} name="facebook-square" color="#318DEE"/>
                         <Text style={styles.fbText}>Log in with facebook</Text>
                    </TouchableOpacity> 
                </View>
                
                <View style={styles.noAccount}>
                    <Text style={{ color: '#a7a7a7' }}>Don't have an account?'</Text>
                        <TouchableOpacity>
                            <Text style={styles.forgotLink}> Sign up for free</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#a7a7a7' }}>.</Text>
                </View>
                
            </View>
            </View>

        );
    }
}

const loginMutation = gql`
  mutation($provider: Provider, $token: String) {
    login(provider: $provider, token: $token) {
      token
    }
  }
`;

export default graphql(loginMutation, { name: 'loginMutation' })(LoginScreen);
