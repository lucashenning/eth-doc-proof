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
import { web3, defaultAccount, loadMetaMask } from './web3helper';
import FileUpload from './FileUpload.vue';
import SHA256 from "crypto-js/sha256";

export default {
  name: 'BcHashWriter',
  components: {
    FileUpload
  },
  
  data: function () {
    return {
      hash: 'empty',
      txStatus: ''
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
      if (loadMetaMask()) {
        web3.eth.sendTransaction({
          from: defaultAccount,
          to: "0x91d0c00cc923244ed82ab483acb3f10f9aa345b6", 
          data: web3.utils.asciiToHex(this.hash),
          gasLimit: 50000,
        })
        .on("transactionHash", txHash => {
          console.log("Final Tx Hash: " + txHash + " Waiting for confirmation...");
          this.txStatus = txHash ;
        })
        .on('confirmation', (confirmationNumber , txReceipt ) => {
          console.log("Confirmation received - "+confirmationNumber+" - Tx: "+receipt.transactionHash);
        }) 
        .on('receipt', (txReceipt) => {
          console.log("Public Chain - Confirmation. Tx " + txReceipt.transactionHash + " was mined in block " + txReceipt.blockNumber);
        })
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
