import './style.scss';

import ColorList from '../ColorList';

function ColorsUsage({children, value, index, ...other}) {
    return (
    <div 
      className="colorsUsage"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div className="colorsUsage__title">Colors Usage</div>
          <div className="colorsUsage__wrapper">
            
          </div>
        </>
        )}
     
    </div>
  );
}

export default ColorsUsage;
