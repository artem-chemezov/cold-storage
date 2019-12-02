import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { ethers, Wallet } from 'ethers';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ChoicePrompt } from './src/navigation/ChoicePrompt';
import { ButtonsScreenEther } from './src/navigation/Ethereum/ButtonsScreenEther';
import {ButtonScreenBitcoin} from './src/navigation/Bitcoin/ButtonScreenBitcoin';
import { BarcodeScan } from './src/navigation/Ethereum/BarcodeScan';
import {BarcodeScanForBitcoin} from './src/navigation/Bitcoin/BarcodeScanForBitcoin';
import { BarcodeGeneration } from './src/navigation/Ethereum/BarcodeGeneration';

let barcode;

const MainNavigator = createStackNavigator({
  Home: {screen: ChoicePrompt},
  Ethereum: {screen: ButtonsScreenEther},
  Bitcoin: {screen: ButtonScreenBitcoin},
  ScanBarcode: {screen: BarcodeScan},
  ScanBarcodeForBitcoin: {screen: BarcodeScanForBitcoin},
  BarcodeGeneration: {screen: BarcodeGeneration},
});

const App = createAppContainer(MainNavigator);

export default App;
