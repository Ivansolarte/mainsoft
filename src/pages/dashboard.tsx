import { useEffect, useState } from "react";
import { Table } from "../components/organisms/table/table";
import { GetPokemons, searchPokemons } from "../services/service.pokemons";
import { InputClasses } from "../components/atoms/input/inputClasses";
import { ButtonClasses } from "../components/atoms/button/buttonClasses";
import { useAuthStore } from "../lib/store/authStore";

interface PokemonData {
  sprites: string;
  name: string;
  img: string;

}

export const Dashboard = () => {
  const {logout}=useAuthStore()
  const [arrayPokemons, setArrayPokemons] = useState<PokemonData[]>([]);
  const [paginationValue, setPaginationValue] = useState({
    limit: "10",
    offset: "0",
    count: 0,
  });
  const [textSeach, setTextSeach] = useState("");
  const [stateSearch, setStateSearch] = useState(false);
  const title = ["Nombre", "Imagen"];

  const getPokemos = () => {
    setTextSeach("");
    setStateSearch(false);
    GetPokemons(paginationValue)
      .then(async (resp) => {
        const updatedResults = await Promise.all(
          resp.results.map(async (item: {name:string}) => {
            const data = await fetch(
              `https://pokeapi.co/api/v2/pokemon-form/${item.name}`
            )
              .then((res) => res.json())
              .catch(() => ({ sprites: { front_shiny: "" } }));
            return { ...item, img: data.sprites.front_shiny };
          })
        );
        setPaginationValue((prev) => ({
          ...prev,
          count: resp.count,
        }));
        setArrayPokemons(updatedResults);
      })
      .catch((err) => {
        if (err) {
          console.log(err, "erro");
          return;
        }
      });
  };

  const search = () => {
    if (textSeach) {
      searchPokemons(textSeach)
        .then(async (resp) => {
          setStateSearch(false);
          const data = await fetch(
            `https://pokeapi.co/api/v2/pokemon-form/${resp.name}`
          ).then((res) => res.json());
          setPaginationValue((prev) => ({
            ...prev,
            count: 1,
          }));
          resp.img = data.sprites.front_shiny;
          setArrayPokemons([resp]);
        })
        .catch((err) => {
          if (err) {
            setStateSearch(true);
            return;
          }
        });
    }
  };

  useEffect(() => {
    getPokemos();
    return () => {};
  }, [paginationValue.offset]);

  return (
    <div className="px-4 text-center ">
      <div className="bg-slate-100 mt-5 py-2 ">
      <div className="w-full  text-end">
        <p className="text-lg font-semibold underline cursor-pointer" onClick={()=>logout()}>Cerrar session</p>
      </div>
        
        <h1 className="text-center font-bold text-lg sm:text-star  sm:text-2xl py-6">
          "¡Encuentra tu Pokémon favorito! 🔍"
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-1 px-10">
          <div className=" text-end flex items-center justify-center sm:justify-end">
            <InputClasses
              name="search"
              placeholder="Buscar"
              value={textSeach}
              onChange={(e) => setTextSeach(e.target.value)}
            />
          </div>
          <div className=" text-center sm:text-start">
            <ButtonClasses
              type="success"
              text="Buscar"
              onClick={search}
              classes="mr-2"
            />
            <ButtonClasses text="Limpiar" onClick={getPokemos} />
          </div>
        </div>
        {stateSearch && (
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-1"
            role="alert"
          >
            <p className="font-bold">Información</p>
            <p>No se encontró el Pokemon que estas buscando.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-1">
        <Table
          data={arrayPokemons}
          title={title}
          pagination={paginationValue}
          setPaginationValue={setPaginationValue}
        />
      </div>
    </div>
  );
};
