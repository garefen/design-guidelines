import './style.scss';

import ColorItem from '../ColorItem';

function colorList({color}) {
  return (
    <div className="colorList">
      <div className="colorList__title">{color}</div>
      <ColorItem />
      <ColorItem />
      <ColorItem />
      <ColorItem />
      <ColorItem />
      <ColorItem />
      <ColorItem />
      <ColorItem />
    </div>
  );
}

export default colorList;
