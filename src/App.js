import React, { Component } from 'react';
import './App.css';

import { StButton, StFooter, StSpinner, StInfoBox, StInfoCard } from './Egeo';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          title: 'Home'
        },
        {
          title: 'Contact'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <div className="App-intro">
          <StButton leftIcon="icon-circle-check" type="button">Button</StButton>

          <br />

          <StSpinner imageUrl="https://stratio.github.io/egeo-web/1.3.1/assets/images/loading_spinner.gif" loading />

          <StInfoBox title="Example">
            <p>You can put any content here</p>
          </StInfoBox>

          <br />

          <StInfoCard title="Example" image="https://stratio.github.io/egeo-web/1.3.1/assets/images/stratio.png">
            <p>You can put any content here</p>
          </StInfoCard>

        </div>
        <StFooter links={this.state.links} image="http://www.stratio.com/wp-content/uploads/2017/01/logo-stratio-white.png" rightsText="prueba" />
      </div>
    );
  }
}

export default App;
