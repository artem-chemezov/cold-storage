import { ethers } from 'ethers';
//mport * as RNFS from 'react-native-fs';
import bitcore from 'bitcore-lib';

export function createNewRandomWallet(){
    //TODO autentification
    console.log("creating wallet...");

    let wallet = ethers.Wallet.createRandom();

    return wallet
}

export function createTransaction(to, gasLimit, gasPrice, value, chainId, tr_data, nonce){

    let data = {
        nonce: nonce,
        gasLimit: gasLimit,
        gasPrice: gasPrice,
        to: to,
        value: value,
        data: tr_data,
        chainId: chainId
    }

    return data
}


export function createTransactionFromBarcode(barcode){

    let json = JSON.parse(barcode)

    return {
                nonce: json.nonce,
                gasLimit: json.gasLimit,
                gasPrice: ethers.utils.bigNumberify(json.gasPrice)._hex,//.toString(16),//_hex,
                to: json.to,
                value: ethers.utils.parseEther(json.value + "")._hex,//.toString(16),//._hex,
                data: json.data,
                chainId: ethers.utils.getNetwork(json.chainId).chainId

            }



}
/*
export function saveWallet(wallet, name, password){
    //is not working!!!
    let data = {
        name: name,
        privateKey: wallet.privateKey,
        password: password
    }

    let json = JSON.stringify(data)

    let path = RNFS.DocumentDirectoryPath + 'wallets/' + name + '.json';

    RNFS.writeFile(path, json)
                                    .then((success) => {
                                    console.log('FILE WRITTEN!');
                                    })
                                    .catch((err) => {
                                    console.log(err.message);
});

}
*/
