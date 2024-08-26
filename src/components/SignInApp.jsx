import { FaGoogle, FaGithub } from 'react-icons/fa';
import { SiWindows } from 'react-icons/si';
import Link from 'next/link';

const SignInApp = ({app}) => {

    const renderIcon = () =>{
        switch(app){
            case 'google':
                return <FaGoogle className='text-[#1A4870]'/>
            case 'windows':
                return <SiWindows className='text-[#1A4870]'/>
            case 'github':
                return <FaGithub className='text-[#1A4870]'/>
        }
    }
    return (
        <Link href={`https://www.${app}.com`}>
            <button className=' hover:bg-[#35556a] p-3 bg-[#5B99C2] rounded-xl'>
                {renderIcon()}   
            </button>
        </Link>   
     );
}
 
export default SignInApp;