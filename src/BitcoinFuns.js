import Bitcoin from 'react-native-bitcoinjs-lib';

export function createNewRandomBitcoinWallet(){
    console.log("creating wallet...");
    let keyPair = Bitcoin.ECPair.makeRandom({ network: Bitcoin.networks.testnet })
    let publicKey = keyPair.getAddress()
    let privateKey = keyPair.toWIF()
    console.log("adress: ", publicKey)
    console.log("privateKey: ", privateKey)
    return keyPair
}
// I use
// address moLbrdBC2Hjn9mTHsuZkMmQop7G5E2USAy
//private key cVprc5L1k8XeZn6ehrP5D7QKYRX8pZVUNLujLkvTtJuDUvVRF3Y7
export function createBitcoinTransaction(
  hashLastTransaction,
  sendValue,
  receiver,
) {
    let tx = new Bitcoin.TransactionBuilder(Bitcoin.networks.testnet)
    let amountToSend = sendValue
    tx.addInput(hashLastTransaction, 0)
    tx.addOutput(receiver, amountToSend)
    return tx;
}

export function createBitcoinTransactionFromBarcode(barcode){
    let json = JSON.parse(barcode);
    let tr_data = createBitcoinTransaction(json.Previous, json.Value, json.ScriptPubKey)
    return tr_data;
}
