import web3 from './web3';
import Election from './build/Election.json';


const instance = new web3.eth.Contract(
  JSON.parse(Election.interface),
  '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a'
);

export default instance;