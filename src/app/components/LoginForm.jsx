import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import SignInApp from "./SignInApp";
import Logo from "./Logo";



const LoginForm = () => {
    return ( 
        <div className="flex flex-col items-center p-10 px-20 space-y-3 bg-white rounded-3xl shadow ">
            <Logo />
            <h2 className="text-xl font-semibold">Inicia Sesión</h2>
            <Input className="rounded-2xl" type="text" placeholder="Correo Electrónico"/>
            <Input className="rounded-2xl" type="text" placeholder="Contraseña"/>   
            <Button className="rounded-2xl bg-[#5B99C2] text-color-[#1A4870] hover:bg-[#35556a] font-bold text-[#1A4870] ">Iniciar Sesión</Button>
            <p className="text-xs">o inicia sesión con:</p>
            <div className="flex space-x-4">
                <SignInApp app="google"/>
                <SignInApp app="windows"/>
                <SignInApp app="github"/>
            </div>
            <div className="flex flex-col items-center w-96 space-y-3">
                <p className="text-center text-xs break-normal font-medium">Al crear una cuenta aceptas nuestros <span className="text-[#5B99C2] font-bold">Terminos de Servicio</span> y <span className="text-[#5B99C2] font-bold">Politicas de Privacidad</span>, tranquilo no es como Disney Plus.</p>
                <p className="text-center text-xs break-normal font-medium">No tienes una cuenta?<span className="text-[#5B99C2] font-bold"> Crear Cuenta</span></p>

            </div>
            
        </div>
     );
}
 
export default LoginForm;