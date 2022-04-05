import './App.scss';

import ColorList from './components/ColorList';
import ColorsReference from './components/ColorsReference';
import ColorsUsage from './components/ColorsUsage';
import Hero from './components/Hero';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import React from 'react';
import FontsReference from './components/FontsReference';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className="App">
      <Hero />
      <div className="tabs-wrapper">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example">
          <Tab label="Colors Reference" {...a11yProps(0)} />
          <Tab label="Colors Usage" {...a11yProps(1)} />
          <Tab label="Fonts Reference" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <ColorsReference value={value} index={0} />
      <ColorsUsage value={value} index={1}/>
      <FontsReference value={value} index={2}/>
      </div>
    </div>
  );
}

export default App;
