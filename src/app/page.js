import Image from "next/image";
import FirstImage from "../components/FirstImage";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen	">
      <FirstImage />
      <LoginForm />
    </div>
  );
}
