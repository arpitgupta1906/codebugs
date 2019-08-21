import React, { Component } from 'react';
import { Card, Grid, Button,Table } from 'semantic-ui-react';
import { Form, Message, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Election from '../../ethereum/election';
import web3 from '../../ethereum/web3';
import { Link,Router } from '../../routes';
import CandidateRow from '../../components/CandidateRow';



class voting extends Component {
	state = {
    		index: '',
			id:'',
    		errorMessage: '',
    		loading: false
  		};

	onSubmit = async event => {
	  
    event.preventDefault();
	const{index,id } = this.state;  
    this.setState({ loading: true, errorMessage: '' });

    try {
		const accounts = await web3.eth.getAccounts();
		const _index = parseInt(this.state.index, 10);
		const _id = parseInt(this.state.id, 10);
      await Election.methods
        .vote(_index,_id)
        .send({
          from: accounts[0]
        });
	Router.pushRoute(`/`);
		
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };
	

		
  static async getInitialProps(props) {
    
    const candidateCount = await Election.methods.getNumCandidate().call();
	const summary = await Election.methods.getSummary().call();
	
    const candidates = await Promise.all(
      Array(parseInt(candidateCount))
        .fill()
        .map((element, index) => {
          return Election.methods.candidates(index).call();
        })
    );

    return { candidates, candidateCount, ready: summary[4]};
  }

  renderRows() {
    return this.props.candidates.map((candidate, index) => {
      return (
        <CandidateRow
          id={index}
          candidate={candidate}
        />
      );
    });
  }

  render() {
	  
	  
    const { Header, Row, HeaderCell, Body } = Table;
	if(!!this.props.ready)
		{
    return (
      <Layout>
        <h3>Candidates contesting in the election</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Index</HeaderCell>
              <HeaderCell>Candidate</HeaderCell>
              <HeaderCell>ID</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
			<br></br>
			<br></br>
		<div>
		<h3>Voting Portal </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          
			  <Form.Field>
            <label>Voter Unique Indentification Number: </label>
            <Input
			
             placeholder='UID'
              value={this.state.id}
              onChange={event =>
                this.setState({ id: event.target.value })}
            />
          </Form.Field>
			 <Form.Field>
            <label>Index of Candidate you wish to vote: </label>
            <Input
              placeholder='Index'
              value={this.state.index}
              onChange={event =>
                this.setState({ index: event.target.value })}
            />
				 
          </Form.Field>
			 <Message error header="Oops!" content={this.state.errorMessage} />
			<Button loading={this.state.loading}  primary button>Vote!</Button>
           </Form> 
      </div>
      </Layout>
    );
		}
	  else{
		  return(
			  <Layout>
				  <h3>Portal Not ready yet, check again</h3>
			  </Layout>
		  );
	  }
  }
}

export default voting;