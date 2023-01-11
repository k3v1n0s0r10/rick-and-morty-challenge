import { selectCharacter } from "Redux/character/characterSlice";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import EpisodeCard from "../EpisodeCard";

import "./index.scss";

const Modal = () => {
  const { selectedCharacter } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const { image, name, status, episode: episodes } = selectedCharacter!;

  return (
    <div className="modal" data-testid="modal">
      <div className="modal-container">
        <img src={image} alt={`${name} face`} />

        <div className="character-info">
          <h2>{name}</h2>
          <h3 className={status.toLowerCase()}>{status}</h3>
          <button onClick={() => dispatch(selectCharacter(null))}>
            Go Back
          </button>
        </div>

        <div className="episode-list">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.episode} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
