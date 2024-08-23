import Image from "next/image";

const FirstImage = () => {
    return ( 
    <div className="space-y-6">
        <h1 className="text-center text-xl font-extralight">Encuentra al influencer ideal para tu<br /> emprendimiento</h1>
        <Image
            src="/first-image-nichemate.svg"
            alt="First Image"
            width={504}
            height={367}
        />
    </div> 
    );
}
 
export default FirstImage;