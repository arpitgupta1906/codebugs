import React,{Component} from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Router } from '../../routes';

class adminLogin extends Component{
	state = { username: '', 
			 password: '',
			 errorMessage: '',
			 loading: false
			};
  
onSubmit = event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      if(this.state.username === "admin" && this.state.password === "codefundoo"){
		        Router.pushRoute('/elections/adminPage');

	  }else{
		  	  Router.pushRoute('/');

	  }

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

	render(){

		return (
			<Layout>
		 <div align="center">
			 <h3>Administrator Login </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          
			  <Form.Field>
            
            <Input
			label='adminId'
             placeholder='Username'
              value={this.state.username}
              onChange={event =>
                this.setState({ username: event.target.value })}
            />
          </Form.Field>
			 <Form.Field>
            
            <Input
				type="password"
				label='Password'
              placeholder='Password'
              value={this.state.password}
              onChange={event =>
                this.setState({ password: event.target.value })}
            />
          </Form.Field>
			 <Message error header="Oops!" content={this.state.errorMessage} />
			<Button loading={this.state.loading} green basic button>Login</Button>
           </Form>
       
        
      </div>
		</Layout>
		
		);
	}
}

export default adminLogin;