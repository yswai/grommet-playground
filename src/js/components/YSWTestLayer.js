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
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';
import WorldMap from 'grommet/components/WorldMap';

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
    let worldMap = (
        <WorldMap series={[
          {
            "continent": "NorthAmerica",
            "label": "North America",
            "value": 40,
            "colorIndex": "graph-1"
          },
          {
            "continent": "SouthAmerica",
            "label": "South America",
            "value": 30,
            "colorIndex": "accent-2"
          },
          {
            "continent": "Europe",
            "label": "Europe",
            "value": 20,
            "colorIndex": "unset"
          },
          {
            "continent": "Africa",
            "label": "Africa",
            "value": 10,
            "colorIndex": "graph-2"
          },
          {"continent": "Asia", "label": "Asia", "value": 15, "colorIndex": "graph-3"},
          {
            "continent": "Australia",
            "label": "Australia",
            "value": 10,
            "colorIndex": "graph-4"
          }
        ]} legend={true} units="B" />
    );
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
            <Tabs>
              <Tab title="First Title">
                <h3>Tiles</h3>
                  <Form>
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
              </Tab>
              <Tab title="Second Title">
                <h3>World Map</h3>
                {worldMap}
              </Tab>
            </Tabs>
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
