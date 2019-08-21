import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Election from '../../ethereum/election';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';
import Layout from '../../components/Layout';


class createCandidateList extends Component{
	
	state = {
    	name: '',
		id:'',
    	errorMessage: '',
    	loading: false
  };
	
  onSubmit = async event => {
	  
    event.preventDefault();
	const{name,id } = this.state;  
    this.setState({ loading: true, errorMessage: '' });

    try {
		const accounts = await web3.eth.getAccounts();
		
      await Election.methods
        .addCandidate(this.state.name,this.state.id)
        .send({
          from: accounts[0]
        });
	Router.pushRoute(`/`);
		
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };



  render() {
	  
	  
    return (
      <Layout>	
			<div className="ui one column stackable page grid">
   					<div className="column twelve wide">
				<div className="ui card">
		 			<div className="content">
    					<div className="header">Add Candidates</div>
  					</div>
  				<div className="content">
	  			
	<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
  	<div className="ui equal width form">
    <div className="fields">
		<div className="field">
			<Form.Field>
            <label>Full Name of Candidate</label>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>
    	</div>
	</div>
	  
  <div className="fields">
    <div className="field">
	<Form.Field>
            <label>Candidate ID</label>
            <Input
              value={this.state.id}
              onChange={event => this.setState({ id: event.target.value })}
            />
          </Form.Field>  
    	</div>
	</div>
		<Message error header="Oops!" content={this.state.errorMessage} />
		<button loading={this.state.loading}  className="fluid ui blue button">
  				<i className="user icon"></i>
 				Add Candidate
			</button>
	</div>
	</Form>
			</div>
				 </div>
			
					 </div>
				 </div>
      </Layout>
    );
  }
}

export default createCandidateList;