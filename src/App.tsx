import { useQuery } from "@apollo/client";

import { CharacterCard, Modal, Pagination } from "./Components";
import { useAppSelector } from "./Redux/hooks";
import { GetCharacters, GET_CHARACTERS } from "./Apollo/graphql/character";

import "./App.scss";

function App() {
  const { selectedCharacter } = useAppSelector((state) => state.characters);

  const { loading, error, data } = useQuery<GetCharacters>(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="App">
      <h1>Characters</h1>
      <div className="character-list">
        {data &&
          data.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>

      <Pagination pages={data?.characters.info.pages || 0} />

      {selectedCharacter !== null && <Modal />}
    </div>
  );
}

export default App;
