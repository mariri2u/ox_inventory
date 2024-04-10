import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { inventorySlice } from '../store/inventory';
import { InventoryType, Slot, State } from '../typings';
import { PlayerData } from '../typings/playerdata';

export type ItemsPayload = { item: Slot; inventory?: InventoryType };

interface Payload {
  player?: PlayerData;
}

export const refreshPlayerReducer: CaseReducer<State, PayloadAction<Payload>> = (state, action) => {
  if (action.payload.player) {
    inventorySlice.caseReducers.setupInventory(state, {
      type: 'setupInventory',
      payload: {
        playerData: action.payload.player,
      },
    });
  }
};
