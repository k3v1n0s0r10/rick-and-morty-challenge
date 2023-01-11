import { screen, fireEvent } from "@testing-library/react";

import CharacterCard from ".";
import { Character, CharacterWithEpisode } from "Apollo/graphql/character";
import { renderWithProviders } from "Utils/testing";

export const characterWithoutEpisode: Character = {
  id: 42,
  image: "image",
  name: "Rick",
  status: "Dead",
};

export const characterWithEpisode: CharacterWithEpisode = {
  id: 16,
  image: "image",
  name: "Rick",
  status: "Dead",
  episode: [
    {
      name: "episode",
      episode: "S01E01",
      characters: [characterWithoutEpisode],
    },
  ],
};

describe("<CharacterCard /> Tests", () => {
  test("Clicking a character with episode should select it in store", () => {
    const { store } = renderWithProviders(
      <CharacterCard character={characterWithEpisode} />
    );

    //Click a character box
    fireEvent.click(screen.getByTestId("character-card"));

    //Assert
    expect(store.getState().characters.selectedCharacter?.id).toEqual(16);
  });

  test("Clicking a character without episode should not select it in store", () => {
    const { store } = renderWithProviders(
      <CharacterCard character={characterWithoutEpisode} />
    );

    //Click a character box
    fireEvent.click(screen.getByTestId("character-card"));

    //Assert
    expect(store.getState().characters.selectedCharacter).toEqual(null);
  });
});
