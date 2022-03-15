import './style.scss';

import ColorList from '../ColorList';

function ColorsReference() {
  return (
    <div className="colorsReference">
      <div className="colorsReference__title">Colors Reference</div>
      <div className="colorsReference__wrapper">
        <ColorList color={'Purple'}/>
        <ColorList color={'Gray'}/>
        <ColorList color={'Red'}/>
        <ColorList color={'Blue'}/>
      </div>
    </div>
  );
}

export default ColorsReference;
