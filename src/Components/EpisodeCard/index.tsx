import { MouseEvent } from "react";
import { Episode } from "../../Apollo/graphql/character";
import CharacterCard from "../CharacterCard";

import "./index.scss";

interface Props {
  episode: Episode;
}

const EpisodeCard = (props: Props) => {
  const { name, episode, characters } = props.episode;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.scrollIntoView();
  };

  return (
    <button className="episode-card" onClick={handleClick}>
      <p>
        {name} - {episode}
      </p>
      <div className="episode-characters">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </button>
  );
};

export default EpisodeCard;
