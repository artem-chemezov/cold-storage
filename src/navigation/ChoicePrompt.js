import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

export class ChoicePrompt extends React.Component{

    render() {
        return (
          <View style={styles.choicePrompt}>
            <View style={styles.choicePromptView}>
               <Text
                      style={styles.button}
                     onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('Ethereum')
                     }}>Ethereum</Text>
             </View>
             <View style={styles.choicePromptView}>
               <Text
                    style={styles.button}
                     onPress={() => {
                         const { navigate } = this.props.navigation;
                         navigate('Bitcoin')
                     }}>Bitcoin</Text>
             </View>
          </View>
        );
        }
}

const styles = StyleSheet.create({
    button: {
      fontFamily: 'notoserif',
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 20,
      textAlign:'center',
    },
    choicePromptView:{
      marginTop: 100,
      padding: 32,
    }

});
