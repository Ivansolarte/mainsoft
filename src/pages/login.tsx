import { useState, ChangeEvent } from "react";
import { ButtonClasses } from "../components/atoms/button/buttonClasses";
import { useAuthStore } from "../lib/store/authStore";

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
    setAlertModal(false)
    if (form.email == "admin" && form.password == "123") {
      login();
      return;
    }
    setAlertModal(true)
  };
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://ia800505.us.archive.org/14/items/PokemonIcon/pokemon%20icon.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Inicia session
          </h2>
       {alertModal&&   <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-1 w-96 border"
            role="alert"
          >
            <p className="font-bold">Información</p>
            <p>El correo y la contraseña son incorrectas</p>
          </div>}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-900">
                Contrasenna
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <ButtonClasses
              onClick={onSubmit}
              text="Enviar"
              type="success"
              classes="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
