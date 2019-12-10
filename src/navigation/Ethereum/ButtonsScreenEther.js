import React from 'react';
import { ethers, Wallet } from 'ethers';
import  {createNewRandomWallet, createTransaction, createTransactionFromBarcode, saveWallet} from "../../funs";
import Loader from '../../loader';
import { StyleSheet, Text, View, Button, Picker, FlatList, TouchableOpacity, TouchableHighlight, ProgressBarAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DialogInput from 'react-native-dialog-input';



//{ label: 'first', value: '0x6aa6b11778e120f4e856693953c07b2c679397763fa8afc6d5984425bc456f1a' },
  //              { label: 'second', value: '0x1778b368d6847f01cc48dc891598675db61500b31cfe6448eb564ccfdcab698c' },
    //            { label: 'third', value: '0x8358a123d279423f239dc2cbc5dede46975f9de654d800f594cbab4ae8faea34' },


export class ButtonsScreenEther extends React.Component {

  static navigationOptions = {
    title: 'Choose a wallet',
  }

  state = {
    wallet: null,
    pKey: '',
    loading: false
  }

  load = false
  flag = false

  keys = [
    //{key: 'new random wallet', value: 'random'},
    {key: 'first', value: '0x6aa6b11778e120f4e856693953c07b2c679397763fa8afc6d5984425bc456f1a'}, //0x55D73ccA422253a8a287074c6f4857Dd15EFdC46
    {key: 'second', value: '0x1778b368d6847f01cc48dc891598675db61500b31cfe6448eb564ccfdcab698c'}, //0x00F7357E503B6cE0622Cf5311739dA27EDF4a875
    {key: 'third', value: '0x8358a123d279423f239dc2cbc5dede46975f9de654d800f594cbab4ae8faea34'}, //0xCe39AB30911Eeb024eB6316123339A4893337639
    {key: 'fourth', value: '0x51cf48d3ac567c2cf65540d49f92cb8f50bba3a8b9b329814d96ad188dd70da8'}, //0xE704eBE589b6ac907887D1997df7BF69A50D416E
    {key: 'fifth', value: '0x6aa6b11778e120f4e856693953c07b2c679397763fa8afc6d5984425bc456f1a'} //0x55D73ccA422253a8a287074c6f4857Dd15EFdC46
  ]

  async randomWallet(inputText){
    await this.keys.push({key: inputText, value: ethers.Wallet.createRandom().privateKey})
  }

  async changeload(){
     this.load = true
    await this.setState({ state: this.state });
  }

   onClickCreateWallet = () => {
      if (this.state.pKey == 'random')
        this.setState(
          { 
            loading: true,
            wallet: ethers.Wallet.createRandom()}
        )
      else
        this.setState(
          { 
            wallet: new ethers.Wallet(this.state.pKey)
          }
    )
    //address = 0x55D73ccA422253a8a287074c6f4857Dd15EFdC46
    
    //TODO saving wallets
    this.render()

   };

   torandom(){
    this.load = true

    this.render()

    //this.load = false

    this.setState(
      { 
        loading: false,
        wallet: ethers.Wallet.createRandom()
        
      }
    )
   }

   onClickSignTransaction = () => {
    /*
    //TO enter in JSON
    {
              nonce: 0,
              gasLimit: 21000,
              gasPrice: 2000000000,

              to: "0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290",

              value: 0.05,
              data: "0x",

              // This ensures the transaction cannot be replayed on different networks
              chainId: "ropsten"
            }
    */
      let transaction = createTransactionFromBarcode(this.props.navigation.getParam('barcode').data)

      console.log('pKey: ' + this.state.wallet.privateKey)

      let signPromise = this.state.wallet.sign(transaction)
      console.log("address : " + this.state.wallet.address)

      signPromise.then((signedTransaction) => {

        this.props.navigation.navigate('BarcodeGeneration', {transaction: signedTransaction});

        console.log(signedTransaction);
        console.log("transaction complete");   
  })
      .catch((error) => console.log("ERROR in singing transaction: " + error))

   }
   
   //barcodeRecognized = ({ barcodes }) => {
    //barcodes.forEach(barcode => console.warn(barcode.data))
  //};

   render() {
    if (this.newwallet){
       return (
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Wallet name"}
            message={"Enter name for new wallet"}
            hintInput ={"the best wallet"}
            submitInput={ (inputText) => {
              //this.changeload().then()
              //this.load = true
              //this.setState({ state: this.state });
              //this.keys.push({key: inputText, value: ethers.Wallet.createRandom().privateKey})
              this.randomWallet(inputText).then(() => {
                //this.load = false
                //this.setState({ state: this.state });
              })
              
              
            } }
            closeDialog={ () => {
              this.newwallet = false
              this.setState({ state: this.state });
              }}>
        </DialogInput>
       )
     }
     if (this.load){
      return (
        <Loader loading = {this.load} />
      )
     }
   return (
     <View style={styles.container}>
        <View>
          <View  style={styles.pickerView}>
            <FlatList
              
              data = {this.keys}
              renderItem={({item}) => {
                  return(
                    <TouchableHighlight 
                    style={styles.list}
                    onPress={() => {
                      if (item.value == 'random')
                      {
                        //this.torandom()
                        this.newwallet = true
                        this.setState({ state: this.state });
                        //this.flag = false
                      }
                      else
                      {
                        this.setState(
                          { 
                            wallet: new ethers.Wallet(item.value)
                          }
                        )
                        const { navigate } = this.props.navigation;
                        navigate('ScanBarcode', {button: this});
                        }
                      }}>
                        <Text >{item.key}</Text>
                    </TouchableHighlight>
                  )
                }
              }
            />
        </View>
        
      </View>
      <View style={styles.buttonView}>
          <Text
                style={styles.button}
                onPress={() => {this.newwallet = true
                  this.setState({ state: this.state });}}
                >
            Create new random wallet
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
    marginTop: 300,
    height: 500
    //fontFamily: 'notoserif',
   //backgroundColor: 'black',
   
  },
  button: {
   fontFamily: 'notoserif',
   backgroundColor: 'black',
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 12,
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
   overflow: 'hidden',
   padding: 20,
   textAlign:'center',
 },
 buttonView:{
   padding: 32
 },
 list:{
  alignSelf: "stretch",
  flex: 1,
  padding: 8,
  flexDirection: 'column', // main axis
  justifyContent: 'center', // main axis
  alignItems: 'center', // cross axis
   height: 50,
   borderRadius: 4,
  borderWidth: 0.5,
  padding: 20,
  margin: 20
 }
});