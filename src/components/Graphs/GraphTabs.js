import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const GraphTabs = () => (
  <Tabs>
    <Tab label="Reading Levels" >
      <div className='graph'>
        <h2 style={styles.headline}>READING LEVELS</h2>
        <p>
          Sweet Reading Level Data Visual Here
        </p>
      </div>
    </Tab>
    <Tab label="Some Other Metric" >
      <div className='graph'>
        <h2 style={styles.headline}>GRAPH 2</h2>
        <p>
          This is another sweet data vis
        </p>
      </div>
    </Tab>
    <Tab
      label="Metric #3">
      <div className='graph'>
        <h2 style={styles.headline}>GRAPH 3</h2>
        <p>
          This is a third one
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default GraphTabs
