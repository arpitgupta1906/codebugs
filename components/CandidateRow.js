import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Election from '../ethereum/election';

class CandidatetRow extends Component {
 
  render() {
    const { Row, Cell } = Table;
    const { id, candidate, candidateCount } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{candidate.name}</Cell>
        <Cell>{candidate.id}</Cell>
      </Row>
    );
  }
}

export default CandidatetRow;