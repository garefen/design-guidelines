import './style.scss';

import ColorList from '../ColorList';

function ColorsReference({children, value, index, ...other}) {
    return (
    <div 
      className="colorsReference"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div className="colorsReference__title">Colors Reference</div>
          <div className="colorsReference__subtitle">Click on the color to copy it</div>
          <div className="colorsReference__wrapper">
            <ColorList color={'purple'}/>
            <ColorList color={'gray'}/>
          </div>
        </>
        )}
     
    </div>
  );
}

export default ColorsReference;
