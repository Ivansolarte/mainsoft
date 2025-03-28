import { useState } from "react";
import { ButtonClasses } from "../../atoms/button/buttonClasses";

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
};
};

export const ModalAbilities = ({
  pokemonsAbil,
  setModalShow,
}: {
  pokemonsAbil: PokemonAbility[];
  setModalShow: () => void;
}) => {
  const [abilityInfo, setAbilityInfo] = useState<string>("");

  const getAbilityDetails = async (url: string) => {
    const resp = await fetch(url);
    const data = await resp.json();
    const effect = data.effect_entries.find(
      (e: { language: { name: string } }) => e.language.name === "en"
    )?.effect;
    setAbilityInfo(effect || "Sin descripción");
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          className="flex min-h-screen items-center justify-center p-4 text-center "
          onClick={() => setModalShow()}
        >
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:w-1/2 max-w-96 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white px-4 pt-5 pb-4 ">
              <div className="border py-5">
                <div className="mt-3 text-center ">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Habilidades
                  </h3>
                  <div className=" flex justify-around my-3 py-3 ">
                    {pokemonsAbil.map((a, i) => (
                      <ButtonClasses
                        key={i}
                        type="success"
                        text={a.ability.name}
                        onClick={() => getAbilityDetails(a.ability.url)}
                      />
                    ))}
                  </div>
                  {abilityInfo && (
                    <div className="my-2 px-1">
                      <p>
                        <strong className="mr-1">
                          Efecto de la habilidad:
                        </strong>{" "}
                        {abilityInfo}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
