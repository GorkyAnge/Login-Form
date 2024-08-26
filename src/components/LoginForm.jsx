import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInApp from "./SignInApp";
import Logo from "./Logo";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 md:px-16 lg:px-20 space-y-4 sm:space-y-6 bg-white rounded-3xl shadow-md md:shadow-lg">
      <Logo />
      <h2 className="text-lg sm:text-xl font-semibold">Inicia Sesión</h2>
      <Input
        className="w-full max-w-xs sm:max-w-md rounded-2xl"
        type="text"
        placeholder="Correo Electrónico"
      />
      <Input
        className="w-full max-w-xs sm:max-w-md rounded-2xl"
        type="text"
        placeholder="Contraseña"
      />
      <Button className="w-full max-w-xs sm:max-w-md rounded-2xl bg-[#5B99C2] text-[#1A4870] hover:bg-[#35556a] font-bold">
        Iniciar Sesión
      </Button>
      <p className="text-xs text-center">o inicia sesión con:</p>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        <SignInApp app="google" />
        <SignInApp app="windows" />
        <SignInApp app="github" />
      </div>
      <div className="flex flex-col items-center w-full max-w-md space-y-4">
        <p className="text-center text-xs break-words font-medium">
          Al crear una cuenta aceptas nuestros{" "}
          <span className="text-[#5B99C2] font-bold">Términos de Servicio</span>{" "}
          y{" "}
          <span className="text-[#5B99C2] font-bold">
            Políticas de Privacidad
          </span>
          , tranquilo no es como Disney Plus.
        </p>
        <p className="text-center text-xs break-words font-medium">
          No tienes una cuenta?
          <span className="text-[#5B99C2] font-bold"> Crear Cuenta</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
