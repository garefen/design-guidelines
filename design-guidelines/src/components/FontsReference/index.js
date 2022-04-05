import './style.scss';

import ColorList from '../ColorList';

function FontsReference({children, value, index, ...other}) {
    return (
    <div 
      className="FontsReference"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div className="fontsReference__title">Fonts Reference</div>
          <div className="fontsReference__wrapper">
            
          </div>
        </>
        )}
     
    </div>
  );
}

export default FontsReference;
