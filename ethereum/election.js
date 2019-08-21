import web3 from './web3';
import Election from './build/Election.json';


const instance = new web3.eth.Contract(
  JSON.parse(Election.interface),
  '0x9e96074e565b087ec3c77968aae078788d988bf8'
);

export default instance;