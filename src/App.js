import React, { Component } from 'react';
import './App.css';

import {
  StButton,
  StFooter,
  StSpinner,
  StInfoBox,
  StInfoCard,
  StPagination,
  StDropdownMenu,
  StDropdown,
  StHorizontalTabs,
  StPageTitle,
  StSearch,
  StInput,
  StTooltip,
  StRadio,
  StRadioGroup,
  StCheckbox,
  StTextarea,
  StList,
  StListItem,
  StTip,
  StHelp
} from './Egeo';

const AppComponent = props =>
  <div className="container" style={{ padding: '20px', textAlign: 'left' }}>
    {props.children}
  </div>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOriginal: [
        { icon: 'icon-alert', text: 'Item 1', selected: true },
        { icon: 'icon-alert', text: 'Item 2', selected: false },
        { icon: 'icon-alert', text: 'Name 2', selected: false }
      ],
      list: [
        { icon: 'icon-alert', text: 'Item 1', selected: true },
        { icon: 'icon-alert', text: 'Item 2', selected: false },
        { icon: 'icon-alert', text: 'Name 2', selected: false }
      ],
      links: [{ title: 'Home' }, { title: 'Contact' }],
      items: [
        { label: 'Critical Error', value: 1 },
        { label: 'Warning', value: 2 },
        { label: 'Lorem Ipsum', value: 3 }
      ],
      options: { search: { enabled: true, placeholder: 'Enter your search' } }
    };
  }

  clickItemList(index) {
    this.setState({
      list: this.state.list.map((item, i) => {
        if (index === i) {
          return Object.assign({}, item, { selected: true });
        } else {
          return Object.assign({}, item, { selected: false });
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-intro">
          <AppComponent>
            <StButton leftIcon="icon-circle-check" type="button">
              Button
            </StButton>
          </AppComponent>

          <AppComponent>
            <StSpinner
              imageUrl="https://stratio.github.io/egeo-web/1.3.1/assets/images/loading_spinner.gif"
              loading
            />
          </AppComponent>

          <AppComponent>
            <StInfoBox title="Example">
              <p>You can put any content here</p>
            </StInfoBox>
          </AppComponent>

          <AppComponent>
            <StInfoCard
              title="Example"
              image="https://stratio.github.io/egeo-web/1.3.1/assets/images/stratio.png"
            >
              <p>You can put any content here</p>
            </StInfoCard>
          </AppComponent>

          <AppComponent>
            <StPagination total={200} />
          </AppComponent>

          <AppComponent>
            <StDropdownMenu active items={this.state.items} />
          </AppComponent>

          <AppComponent>
            <div className="dropdown">
              <StDropdown items={this.state.items} button="Select one item" />
            </div>
          </AppComponent>

          <AppComponent>
            <StHorizontalTabs options={[{ text: 'Tab1' }, { text: 'Tab2' }]} />
          </AppComponent>

          <AppComponent>
            <StPageTitle
              title="Page Title"
              leftButton="icon-reply"
              preTitle="Title without left button:"
            />
          </AppComponent>

          <AppComponent>
            <StSearch />
          </AppComponent>

          <AppComponent>
            <StInput label="Name" placeholder="Project Name" required />
          </AppComponent>

          <AppComponent>
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100px'
              }}
            >
              <StTooltip text="example" placement="bottom">
                <p style={{ display: 'inline' }}>example</p>
              </StTooltip>
            </div>
          </AppComponent>

          <AppComponent>
            <StRadioGroup name="options">
              <StRadio value="1" checked={true}>
                Option 1
              </StRadio>
              <StRadio value="2">Option 2</StRadio>
              <StRadio value="3">Option 3</StRadio>
            </StRadioGroup>
          </AppComponent>

          <AppComponent>
            <StCheckbox value="1" checked>
              Option 1
            </StCheckbox>
          </AppComponent>

          <AppComponent>
            <StTextarea
              placeholder="Project name"
              label="Name"
              errorMessage="This field is error"
              validate
              value="Prueba prueba"
              maxLength={5}
            />
          </AppComponent>

          <AppComponent>
            <StList title="Example" options={this.state.options}>
              {this.state.list.map((item, i) =>
                <StListItem
                  icon={item.icon}
                  key={i}
                  selected={item.selected}
                  onClick={() => this.clickItemList(i)}
                >
                  {item.text}
                </StListItem>
              )}
            </StList>
          </AppComponent>

          <AppComponent>
            <StTip>Help</StTip>
          </AppComponent>

          <AppComponent>
            <StHelp>Help</StHelp>
          </AppComponent>
        </div>
        <StFooter
          links={this.state.links}
          image="http://www.stratio.com/wp-content/uploads/2017/01/logo-stratio-white.png"
          rightsText="prueba"
        />
      </div>
    );
  }
}

export default App;
