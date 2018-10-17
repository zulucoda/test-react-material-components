import React, { Component } from 'react';
import logo from './logo.svg';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab/dist/tab.css';


class App extends Component {
  render() {
    return (
	<div>
        <TabBar 
          activeIndex={0}
        >
          <Tab>
            <span className='mdc-tab__text-label'>One</span>
          </Tab>

           <Tab>
            <span className='mdc-tab__text-label'>Tone</span>
          </Tab>  

        </TabBar>
      </div>
    );
  }
}

export default App;
