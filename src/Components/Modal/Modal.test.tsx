import { fireEvent, screen } from "@testing-library/react";

import Modal from ".";
import { renderWithProviders } from "Utils/testing";
import { characterWithEpisode } from "Components/CharacterCard/CharacterCard.test";

const initialStoreState = {
  characters: { selectedCharacter: characterWithEpisode },
};

describe("<Modal /> Tests", () => {
  test("Go Back button should close modal & clear store", () => {
    const { store } = renderWithProviders(<Modal />, {
      preloadedState: initialStoreState,
    });

    expect(screen.getByTestId("modal")).toBeVisible();

    fireEvent.click(screen.getByText("Go Back"));

    expect(screen.getByTestId("modal")).not.toBeVisible();
    expect(store.getState().characters.selectedCharacter).toBe(null);
  });
});
