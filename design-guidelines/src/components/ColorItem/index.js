import './style.scss';
import '../../global/colors/colors.scss';
import colorData from '../../global/colors/colors.json';

function colorItem({colorClass}) {
  const colorDataItem = colorData.colors.filter(item => item.name.includes(colorClass));
  return (
    <div className="colorItem">
      <div className={`colorItem__fillColor background-${colorClass}`}></div>
      <div className="colorItem__colorName" >{colorClass}: {colorDataItem[0].hex}</div>
    </div>
  );
}

export default colorItem;
