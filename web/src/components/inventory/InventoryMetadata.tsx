import React, { useState } from 'react';
import { PlayerData } from '../../typings/playerdata';
import { selectPlayerData } from '../../store/inventory';
import { useAppSelector } from '../../store';

const InventoryMetadata: React.FC = () => {
  const playerdata = useAppSelector(selectPlayerData);

  return (
    <div className="playerdata">
      <div className="playerdata-wrapper">
        <div className="playerdata-box">ID: {playerdata.source}</div>
        <div className="playerdata-box">
          所持金:
          <br />$ {playerdata.cash.toLocaleString()}
        </div>
        <div className="playerdata-box">
          銀行:
          <br />$ {playerdata.bank.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default InventoryMetadata;
