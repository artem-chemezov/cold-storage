import React from 'react';
import Bitcoin from 'react-native-bitcoinjs-lib';
import {
  createNewRandomBitcoinWallet,
  createBitcoinTransactionFromBarcode,
} from '../../BitcoinFuns';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export class ButtonScreenBitcoin extends React.Component {
    static navigationOptions = {
        title: 'Choose the option',
    }

    onClickSignTransaction = () => {
    console.log(this.props.navigation.getParam('barcode').data);
    let transaction = createBitcoinTransactionFromBarcode(this.props.navigation.getParam('barcode').data);
    //for example
    let privateKey = 'cVprc5L1k8XeZn6ehrP5D7QKYRX8pZVUNLujLkvTtJuDUvVRF3Y7';
    let signPromise = transaction.sign(0, privateKey);
    console.log('wallet : ' + this.state.wallet.address);

    signPromise
        .then(signedTransaction => {
            this.setState({
                name: signedTransaction,
            });
            console.log(signedTransaction);
            console.log('transaction complete');
        })
        .catch(error => console.log('ERROR in singing transaction: ' + error));
    }

    barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonView}>
                    <Text
                        style={styles.button}
                        onPress={() => {
                            this.onClickSignTransaction();
                        }}>
                        Sign Transaction
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <Text
                        style={styles.button}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('ScanBarcodeForBitcoin');
                        }}>
                        Scan
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: -300,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    pickerView: {
        padding: 32,
        fontFamily: 'notoserif',
        backgroundColor: 'black',

    },
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
    buttonView:{
        padding: 32,
    }
});
