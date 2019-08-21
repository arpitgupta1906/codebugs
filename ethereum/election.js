import web3 from './web3';
import Election from './build/Election.json';


const instance = new web3.eth.Contract(
  JSON.parse(Election.interface),
  '0x9de0ad13c4ea1d2e2e1eb7eacb85729f54f4d0ac'
);

export default instance;