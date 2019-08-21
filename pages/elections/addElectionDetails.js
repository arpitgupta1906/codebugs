import React,{ Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Icon} from 'semantic-ui-react';
import { Link} from '../../routes';

class addElectionDetails extends Component{
	
	render(){
		 return (
      <Layout>

	<div class="ui one column stackable center aligned page grid">
   <div class="column twelve wide">
    <div class="ui card">
  		
		<div class="content">
    		<h2 class="ui header">
  		<i class="settings icon"></i>
  			<div class="content">
    			Election Settings
    		<div class="sub header">Add participants</div>
  			</div>
	 </h2>
  		</div>
		
  		<div class="content">
			<Link route="/elections/createVoterList">
				<a>
			<button class="fluid ui black button">
  				<i class="user icon"></i>
 				 Add Candidate
			</button>
					</a>
			</Link>
		</div>
		
		<div class="content">
			<Link route="/elections/createVoterList">
				<a>
			<button class="fluid ui blue button">
  				<i class="users icon"></i>
 				Add Voters
			</button>
					</a>
			</Link>
		</div>
	</div>
		</div>
				 </div>
      </Layout>
    );
	}
}
export default addElectionDetails;
