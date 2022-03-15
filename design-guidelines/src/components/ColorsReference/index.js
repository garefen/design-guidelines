import './style.scss';

import ColorList from '../ColorList';

function ColorsReference() {
  return (
    <div className="colorsReference">
      <div className="colorsReference__title">Colors Reference</div>
      <div className="colorsReference__wrapper">
        <ColorList color={'purple'}/>
        <ColorList color={'gray'}/>
        <ColorList color={'red'}/>
        <ColorList color={'blue'}/>
      </div>
    </div>
  );
}

export default ColorsReference;
