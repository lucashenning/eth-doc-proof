<template>
  <div class="comp">
    <h1>Read hash from Ethereum Blockchain at address:</h1>
    <input class="form-control" type="text" v-model="txId" placeholder="Enter Tx Id here..."/>
    <button @click="readHash" type="submit" class="btn btn-primary">Read Hash from Blockchain</button>
    <p>Hash retrieved from Blockchain: <span id='hash' >{{hash}}</span></p>
  </div>
</template>

<script>
import { web3 } from './web3helper';

export default {
  name: 'BcHashReader',
  
  data: function () {
    return {
      txId: '',
      hash: ''
    }
  },

  methods: {
    readHash() {
      if (loadMetaMask()) {
        web3.eth.getTransaction(this.txId).then( tx => {
          console.log(tx);
          this.hash = web3.utils.toAscii(tx.input);
        })
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
