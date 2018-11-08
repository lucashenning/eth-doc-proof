import Web3 from 'web3';

export const web3 = new Web3();

export const defaultAccount = window.web3.eth.defaultAccount;

export function loadMetaMask() {
    const isMetaMaskEnabled = () => !!window.web3;
    if (!isMetaMaskEnabled()) {
        alert('MetaMask is not enabled.');
        return false;
    }
    
    web3.setProvider(window.web3.currentProvider);
    return true;
}

export function loadGanache() {
    web3.setProvider( new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545') );
    return true;
}
