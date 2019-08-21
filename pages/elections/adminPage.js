import React,{ Component } from 'react';
import Layout from '../../components/Layout';
import { Form,Message, Button, Icon, Input, Radio} from 'semantic-ui-react';
import { Link } from '../../routes';
import Election from '../../ethereum/election';

class ElectionNew extends Component{
	
 
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
    		<div class="sub header">Add or end elections</div>
  			</div>
	 </h2>
  		</div>
		
  		<div class="content">
			<Link route="/elections/addElectionDetails">
				<a>
			<button class="ui positive basic button">
  				<i class="plus circle icon"></i>
 				 Add Voters and Candidates
			</button>
					</a>
			</Link>
		</div>
		
		<div class="content">
			<Link route="/">
				<a>
			<button class="ui negative basic button">
  				<i class="minus circle icon"></i>
 				 Declare Results
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
export default ElectionNew;
