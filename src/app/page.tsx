import { Button } from "./components/misc/Button";

export default async function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg text-center bg-gray-1000">
        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo ao <span className="text-orange-500">Pochi</span>!
        </h1>
        <div className="flex flex-col items-center">
          <Button />
        </div>
      </div>
    </div>
  );
}
