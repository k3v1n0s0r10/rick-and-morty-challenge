import { useAppDispatch } from "Redux/hooks";
import { selectCharacter } from "Redux/character/characterSlice";
import { Character, CharacterWithEpisode } from "Apollo/graphql/character";

import "./index.scss";

interface Props {
  character: CharacterWithEpisode | Character;
}

const CharacterCard = ({ character }: Props) => {
  const dispatch = useAppDispatch();
  const { id, image, name, status } = character;

  const selectModalCharacter = () => {
    if ("episode" in character) {
      dispatch(selectCharacter(character));
    }
  };

  return (
    <div
      className="character-card"
      data-testid="character-card"
      key={id}
      onClick={selectModalCharacter}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>{name}</p>
      <p className={status.toLowerCase()}>{status}</p>
    </div>
  );
};

export default CharacterCard;
