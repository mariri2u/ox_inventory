import React from 'react';
import { selectPlayerData } from '../../store/inventory';
import { useAppSelector } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSackDollar, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const InventoryMetadata: React.FC = () => {
  const playerdata = useAppSelector(selectPlayerData);

  return (
    <div className="playerdata">
      <div className="playerdata-wrapper">
        <div className="playerdata-box">
          <div className="playerdata-box-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="playerdata-box-text">{playerdata.source}</div>
        </div>
        <div className="playerdata-box">
          <div className="playerdata-box-icon">
            <FontAwesomeIcon icon={faSackDollar} />
          </div>
          <div className="playerdata-box-text">$ {playerdata.cash.toLocaleString()}</div>
        </div>
        <div className="playerdata-box">
          <div className="playerdata-box-icon">
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <div className="playerdata-box-text">$ {playerdata.bank.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryMetadata;
