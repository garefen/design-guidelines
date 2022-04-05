import './style.scss';
import '../../global/colors/colors.scss';
import colorData from '../../global/colors/colors.json';
import { CopyToClipboard } from "react-copy-to-clipboard";

function colorItem({colorClass}) {
  const colorDataItem = colorData.colors.filter(item => item.name.includes(colorClass));
  return (
    <div className="colorItem">
      <div className={`colorItem__fillColor background-${colorClass}`}></div>
      <div className="colorItem__colorName">
        <CopyToClipboard
          text={colorDataItem[0].hex}>
            <span>{colorClass}: {colorDataItem[0].hex}</span>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default colorItem;
