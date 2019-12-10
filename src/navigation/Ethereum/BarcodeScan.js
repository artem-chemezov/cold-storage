import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

export class BarcodeScan extends React.Component {  

  render() {  
      return (
        <View style={styles.container}>
          <RNCamera
                  ref={ref => {
                    this.camera = ref;
                  }}
                  style={{
                    flex: 1,
                    width: '100%',
                  }}
                  captureAudio={false}
                  onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    let barcode = barcodes[0];
                    let show = JSON.parse(barcode.data)
                    let from = this.props.navigation.getParam('button').state.wallet.address
                    console.log(from)
                    this.props.navigation.navigate('Ethereum', {barcode: barcode})
                    
                    Alert.alert(
                      'Transaction details',
                      '\n' + 
                      'from: ' + '\n' + from + '\n' + '\n' +
                      'to: ' + '\n' + show.to + '\n' + '\n' +
                      'Gas Limit: ' + show.gasLimit + '\n' +
                      'Gas Price: ' + show.gasPrice + '\n' +
                      'Value: ' + show.value + '\n' +
                      'nonce: ' + show.nonce + '\n' +
                      'data: ' + show.data + '\n' +
                      'chain: ' + show.chainId,

                      [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'Sign', onPress: () => this.props.navigation.getParam('button').onClickSignTransaction()},
                      ],
                      {cancelable: false},
                    );
                    

                    
                  }}
                >
          </RNCamera>
        </View>
      )
  }  
}

const styles = StyleSheet.create({
  container: {
    marginTop: -300,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
});