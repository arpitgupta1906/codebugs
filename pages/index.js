import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Election from '../ethereum/election';
import web3 from '../ethereum/web3';
import { Link,Router } from '../routes';

class index extends Component {
	
  static async getInitialProps(props) {
    

    const summary = await Election.methods.getSummary().call();
	const results = await Election.methods.declareResult().call();

    return {
      electionName: summary[0],
      numCandidate: summary[1],
      numVoter: summary[2],
      manager: summary[3],
	  voted: summary[4],
	  complete: summary[5],
	  wonName: results[0],
	  wonId: results[1],
	  wonVotes: results[2]
    };
  }

  renderCards() {
    const {
      electionName,
      numCandidate,
      numVoter,
      manager,
	  voted,
	  complete
    } = this.props;

    const items = [
      {
        header: electionName,
        meta: 'States purpose of the election',
        description:
          'The purpose of election gives information about the post for which election is being held',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: numCandidate,
        meta: 'Number of Candidates',
        description:
          'States number of candidates contesting for the election'
      },
      {
        header: numVoter,
        meta: 'Number of Voters',
        description:
          'States number of voters currently in the voters list'
      },
      {
        header: manager,
        meta: 'Manager of the election',
        description:
          'Address of the manager responsible for conducting elections smoothly',
		 style: { overflowWrap: 'break-word' }
      },
    ];

    return <Card.Group items={items} />;
  }
	
	 renderResults() {
    const {
      wonId,
      wonName,
      wonVotes,
    } = this.props;

    const items = [
      {
        header: wonName,
        description:
          'won the election',
        
      },
      {
        header: wonId,
        description:
          'ID of the candidate who won'
      },
      {
        header: wonVotes,
        description:
          'Voters in favour of the candidate'
      }
    ];

    return <Card.Group items={items} />;
  }


  render() {
	  
    if(this.props.complete==false){
		
	  return (
      <Layout>
			
        <h3>Election Portal</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <h3>Bad policticians are chosen by good people who don't vote</h3>
				<br></br>
				<div>
					<Link route='/elections/voting'>
            			<a><button className="fluid ui blue button">
  						<i className="user icon"></i>
 						Vote
					</button></a>
          			</Link>
					<br></br>
					
					<Link route='/elections/adminLogin'>
            			<a><button className="fluid ui black button">
  						<i className="user icon"></i>
 						Manager Login
					</button></a>
          			</Link>
					
				</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
			
      </Layout>
    );
	}
	 else {
		 return(
			 <Layout>
				        <h3>Results Portal</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderResults()}</Grid.Column>

            <Grid.Column width={6}>
              <h3>Bad policticians are chosen by good people who don't vote</h3>
			  </Grid.Column>
			</Grid.Row>
				 </Grid>
			 </Layout> 
		 );
	 }
  }
}

export default index;