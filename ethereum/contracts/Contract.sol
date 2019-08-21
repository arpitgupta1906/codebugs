pragma solidity ^0.4.19;

contract Election {
    
    struct Candidate {
        string name;
        string id;
        uint voteCount;
    }
    
    struct InfoVoter{
        string name;
        uint256 aadhar;
        uint256 age;
    }
    
    uint voted;
    address public owner; //owner is whoever deploys the contract
	function verifyAdmin() public view returns (bool)
    {
        if(msg.sender==owner) return true;
        else return false;
    }
    string public electionName;
     
  
     bool public complete;
     Candidate [] public candidates;
     InfoVoter [] public infoVoters;
     mapping(uint256 => bool) public voterList;
     uint public maxVotes;
     string public maxId;
     string public maxName;
     bool public ready;
     
     
     modifier ownerOnly () {                
         require(msg.sender == owner);
         _;
     }
     //ownerOnly implies only owner can addCandidate
     
    function Election (string _name)  public {
         owner = msg.sender;
         electionName = _name;
         complete=false;
         voted=0;
         maxVotes=0;
         maxId='';
         maxName='';
         ready=false;
     }
     
     function addCandidate(string _name, string _id) ownerOnly public {
         candidates.push(Candidate(_name, _id,0));
     }
     
     function getNumCandidate() public view returns(uint){
         return candidates.length;
     }
  
    
    function addInfoVoters(string _name, uint256 _id, uint256 _age) ownerOnly public {
         infoVoters.push(InfoVoter(_name, _id,_age));
         voterList[_id]= true;
     }
     
     function getNumInfoVoters() public view returns(uint){
         return infoVoters.length;
     }
     
     function getOwner() public view returns(address){
         return owner;
     }
    
    
     
     function vote(uint _voteIndex,uint256 _id) public {
         require(voterList[_id]);
         require(!complete);//to make sure voted field is false
         voterList[_id]=false;
         candidates[_voteIndex].voteCount +=1;
         voted +=1;
         if(candidates[_voteIndex].voteCount>maxVotes)
         {
            maxVotes=candidates[_voteIndex].voteCount;
            maxId=candidates[_voteIndex].id;
            maxName=candidates[_voteIndex].name;
         }
     }
     
         function getSummary() public view returns (
      string, uint, uint, address, uint,bool,bool
      ) {
        return (
          electionName,
          candidates.length,
          infoVoters.length,
          owner,
          voted,
          complete,
          ready
        );
    }
     
     function end(bool _complete) ownerOnly public {
         complete=_complete; //end the contract and remaining ether will be send to owner
    
     }
     
       function ready(bool _ready) ownerOnly public {
         ready=_ready; //end the contract and remaining ether will be send to owner
    
     }
     
     function declareResult() public view returns(
        string, string, uint
         )
         {
             return(
                 maxName,
                 maxId,
                 maxVotes
                 );
         }
     
}