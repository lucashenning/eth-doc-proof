<template>
  <div class="hello">
    <h1>Write hash to the Ethereum Blockchain:</h1>
    <FileUpload @fileSpecified="fileSpecified" />
    <p>Hash: <span id='hash'>{{hash}}</span></p>
    <button @click="writeHash" type="submit" class="btn btn-primary">Write Hash to Blockchain</button>
    <p>Transaction Status: <a :href="'https://ropsten.etherscan.io/tx/' + txStatus" target="_blank">{{txStatus}}</a></p>
  </div>
</template>

<script>
/* eslint-disable */

import { web3, defaultAccount, loadMetaMask, loadGanache } from './web3helper';
import FileUpload from './FileUpload.vue';
import SHA256 from "crypto-js/sha256";

import json from '../../blockchain/build/contracts/HashStorage.json'

export default {
  name: 'BcHashWriter',
  components: {
    FileUpload
  },
  
  data: function () {
    return {
      hash: 'empty',
      txStatus: '',
      myContractJson: json
    }
  },

  methods: {

    fileSpecified (file) {
      if (file != undefined) {
        let thisComp = this;
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.addEventListener('load', function () {
          thisComp.hash = SHA256(this.result).toString();
          console.log("File: " + this.result);
        }, false);
      } else {
        this.hash = 'empty';
      }
    },

    writeHash () {
      if (loadGanache()) {

        console.log(this.myContractJson);

        let myContract = new web3.eth.Contract(this.myContractJson.abi);

        console.log(myContract);

        myContract.deploy({
            data: this.myContractJson.bytecode,
            arguments: [ web3.utils.asciiToHex(this.hash) ]
        })
        .send({ 
            from: '0x2e0961641a96e7FFEa3477Ffe798E4bA98b1A34E',
            gas: 1500000,
            gasPrice: '30000000000000'
        }, function(error, transactionHash){ })
        .on('error', function(error){ })
        .on('transactionHash', function(transactionHash){  })
        .on('receipt', function(receipt){
          console.log(receipt.contractAddress) // contains the new contract address
        })
        .on('confirmation', function(confirmationNumber, receipt){  })
        .then(function(newContractInstance){
            console.log(newContractInstance.options.address) // instance with the new contract address
        });

      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
