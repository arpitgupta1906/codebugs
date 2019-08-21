import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
        <Link route="/">
		  <a className="item">Virtual Election</a>
			</Link>

      <Menu.Menu position="right">
	<Link route="/elections/addElection">
          <a className="item">Elections</a>
	</Link>
		  	
	<Link route="/elections/adminLogin">
		<a className="item">AdminLogin</a>
	</Link>
      </Menu.Menu>
    </Menu>
  );
};
