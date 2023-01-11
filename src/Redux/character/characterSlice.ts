import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CharacterWithEpisode } from "../../Apollo/graphql/character";

export interface CharactersState {
  selectedCharacter: CharacterWithEpisode | null;
}

const initialState: CharactersState = {
  selectedCharacter: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    selectCharacter: (
      state,
      action: PayloadAction<CharacterWithEpisode | null>
    ) => {
      state.selectedCharacter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
