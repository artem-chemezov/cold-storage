import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
                    this.props.navigation.navigate('Ethereum', {barcode: barcode});
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
