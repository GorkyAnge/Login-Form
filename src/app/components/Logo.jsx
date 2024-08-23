import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="flex justify-center items-center space-x-4">
            <Image src="/rayo.svg" width={21} height={27} alt="logo"/>
            <h1 className="text-xl font-semibold">NicheMate</h1>
        </div>

    );
}
 
export default Logo;