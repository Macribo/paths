import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export default class Choices extends Component {
  createCharacterhandler = () => {};

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          variant="outline-warning"
          size="lg"
          style={{
            marginLeft: '20px'
          }}
        >
          Slí an dalta
        </Button>
        <Button
          variant="outline-warning"
          size="lg"
          style={{
            marginLeft: '20px'
          }}
        >
          Slí na draoithe
        </Button>
        <Button
          onClick={this.createCharacterhandler}
          variant="outline-warning"
          size="lg"
          style={{
            marginLeft: '20px'
          }}
        >
          Create character
        </Button>
      </div>
    );
  }
}
