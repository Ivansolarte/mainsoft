import { useState, ChangeEvent } from "react";
import { ButtonClasses } from "../components/atoms/button/buttonClasses";
import { useAuthStore } from "../lib/store/authStore";
import { Img } from "../components/atoms/img/img";
import { H } from "../components/atoms/text/h";
import { P } from "../components/atoms/text/p";
import { Label } from "../components/atoms/text/label";
import { InputClasses } from "../components/atoms/input/inputClasses";

export const Login = () => {
  const { login } = useAuthStore();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alertModal, setAlertModal] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    setAlertModal(false);
    if (form.email == "admin" && form.password == "123") {
      login();
      sessionStorage.setItem("token", btoa(JSON.stringify(form)));
      return;
    }
    setAlertModal(true);
  };
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Img
            classes="mx-auto h-10 w-auto"
            src="https://ia800505.us.archive.org/14/items/PokemonIcon/pokemon%20icon.png"
            alt="Your Company"
          />
          <H classes="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Inicia session
          </H>
          {alertModal && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-1 w-96 border"
              role="alert"
            >
              <P classes="font-bold">Información</P>

              <P>El correo y la contraseña son incorrectas</P>
            </div>
          )}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <Label classes="block text-sm/6 font-medium text-gray-900">
              Correo electrónico
            </Label>
            <div className="mt-2">
              <InputClasses
                classes="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                name="email"
                autoComplete="off"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label classes="block text-sm/6 font-medium text-gray-900">
                Contraseña
              </Label>
            </div>
            <div className="mt-2">
              <InputClasses
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                classes="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <ButtonClasses
              onClick={onSubmit}
              text="Enviar"
              classes="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
