import { screen } from "@testing-library/react";
import { Episode } from "Apollo/graphql/character";
import { characterWithoutEpisode } from "Components/CharacterCard/CharacterCard.test";
import { renderWithProviders } from "Utils/testing";

import EpisodeCard from ".";

export const episode: Episode = {
  name: "episode",
  episode: "S01E01",
  characters: [characterWithoutEpisode],
};

describe("<EpisodeCard /> Tests", () => {
  test("Component should render", () => {
    renderWithProviders(<EpisodeCard episode={episode} />);

    expect(screen.getByText("episode - S01E01")).toBeVisible();
  });
});
