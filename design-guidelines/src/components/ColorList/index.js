import './style.scss';

import '../../global/colors/colors.scss';

import ColorItem from '../ColorItem';

function colorList({color}) {
  return (
    <div className="colorList">
      <div className="colorList__title">{color}</div>
      <ColorItem colorClass={`${color}-0`}/>
      <ColorItem colorClass={`${color}-100`}/>
      <ColorItem colorClass={`${color}-200`}/>
      <ColorItem colorClass={`${color}-300`}/>
      <ColorItem colorClass={`${color}-400`}/>
      <ColorItem colorClass={`${color}-500`}/>
      <ColorItem colorClass={`${color}-600`}/>
      <ColorItem colorClass={`${color}-700`}/>
      <ColorItem colorClass={`${color}-800`}/>
      <ColorItem colorClass={`${color}-900`}/>
    </div>
  );
}

export default colorList;
