import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box.js';
import Anchor from 'grommet/components/Anchor';
import Meter from 'grommet/components/Meter.js';
import Edit from 'grommet/components/icons/base/Edit';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';

import React, { Component } from 'React';

export default class YSWTestLayer extends Component {

  constructor () {
    console.log('Constructor for TestLayer');
    super();
    this.state = {
      showDialog: false
    };
  }

  render () {
    let self = this;
    let layerComponent = self.state.showDialog ? (
        <Layer onClose={() => {
          this.setState({
            showDialog: false
          });
        }} closer={true} align="top">
          <Form>
            <Header>
              <h2>
                Title
              </h2>
            </Header>
            <FormFields>
              <Bricks>
                <Brick colorIndex="neutral-1" type="large">
                  <Meter value={40} type="arc" a11yTitleId="meter-title-3" a11yDescId="meter-desc-3" />
                </Brick>
                <Brick label="Second" colorIndex="neutral-2" type="tall" />
                <Brick label="Third" colorIndex="neutral-3">
                </Brick>
                <Brick label="Fourth" colorIndex="neutral-4" />
              </Bricks>
            </FormFields>
          </Form>
        </Layer>
    ) : null;
    return (
      <Box direction="row" align="center" colorIndex="neutral-1"
          justify="between" reverse={true} tag="aside">
        <Button label="Show dialog" onClick={() => {
          console.log('Enabling dialog...');
          self.setState({
            showDialog: true
          });
        }}/>
        <Anchor href="#" icon={<Edit />} onClick={() => {
          self.setState({
            showDialog: true
          });
        }}/>
        {layerComponent}
      </Box>
    );

  }

}
