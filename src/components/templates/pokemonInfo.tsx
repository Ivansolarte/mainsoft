import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ModalAbilities } from "../organisms/modal/modal";
import { Links } from "../atoms/link/links";

interface PokemonData {
  id: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string; url: string } }[];
}

const PokemonInfo = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [modalShow, setModalShow] = useState(false);
  const [pokemonSound, setPokemonSound] = useState({audio1:"",audio2:""});

  const getPokemonDetails = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await resp.json();
    setPokemonData(data);
    setPokemonSound({
        audio1: data.cries?.latest || '',
        audio2: data.cries?.legacy || ''
    });    
   
  };

  const openModal = () => {
    setModalShow((state) => !state)
    if (pokemonSound.audio1) {
        const audio = new Audio(pokemonSound.audio1);
        audio.volume = 0.03; // Controla el volumen (0 = silencio, 1 = volumen máximo)
        audio.play().catch(error => console.error('Error reproduciendo el sonido:ivan', error));
    }
  }

  const closeModal = () => {
    setModalShow((state) => !state)
    if (pokemonSound.audio2) {
        const audio = new Audio(pokemonSound.audio2);
        audio.volume = 0.03; // Controla el volumen (0 = silencio, 1 = volumen máximo)
        audio.play().catch(error => console.error('Error reproduciendo el sonido:', error));
    }
  }

  useEffect(() => {
    getPokemonDetails();
    return () => {};
  }, []);


  return (
    <div>
      <div className="bg-white h-screen">
        <Links to="/"  >
          <p className="text-black font-semibold ml-5 pt-2 underline">Volver</p>
        </Links>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl  tracking-tight text-gray-900">
            Pokemon <strong className="uppercase">{params.id}</strong>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {pokemonData && (
              <div className="group relative">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData?.id}.png`}
                  alt={params.id}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto "
                />
                <div className="mt-4 flex justify-between">
                  <div className="">
                    <h3 className="text-sm text-gray-700">
                      Tipo:
                      <strong className="ml-1">
                        {pokemonData.types.map((t) => t.type.name).join(", ")}
                      </strong>
                    </h3>
                    <p
                      className="mt-1 text-lg text-black font-bold cursor-pointer "
                      onClick={openModal}
                    >
                      Habilidades
                    </p>
                  </div>
                  <p className="text-sm  text-gray-900">
                    Peso: <strong>{pokemonData.weight / 10} kg</strong>
                  </p>
                </div>
                {modalShow && (
                  <ModalAbilities
                    pokemonsAbil={pokemonData.abilities}
                    setModalShow={closeModal}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
