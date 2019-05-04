import React, { Component } from 'react';
import Choices from './Choices';
import Headline from './Headline';
import TLDR from './TLDR';
import Article from './Article';
import ForestModal from './forestModalElements/ForestModal';
export default class Storyteller extends Component {
  render() {
    return (
      <div>
        {/* <div classNameName="jumbotron">
          <Headline /> <TLDR />
          <hr classNameName="my-4" />
          <Article />
          <Choices /> */}
        {/* </div> */}
        <ForestModal />
      </div>
    );
  }
}
