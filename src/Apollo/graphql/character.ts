import { gql } from "@apollo/client";

//Types

export interface GetCharacters {
  characters: {
    results: Array<CharacterWithEpisode>;
    info: {
      pages: number;
    };
  };
}

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

export interface Episode {
  name: string;
  episode: string;
  characters: Array<Character>;
}

export interface CharacterWithEpisode extends Character {
  episode: Array<Episode>;
}

//GraphQL

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        image
        name
        status
        episode {
          name
          episode
          characters {
            id
            image
            name
            status
          }
        }
      }
      info {
        pages
      }
    }
  }
`;
