import Image from "next/image";
import FirstImage from "./components/FirstImage";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen	 space-x-20  ">
      <FirstImage />
      <LoginForm />
    </div>
  );
}
