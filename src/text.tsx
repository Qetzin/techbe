import { Button } from "./components/ui/button";

export default function Test() {
    return (
        <div className="text-center w-screen bg-amber-300">
            <h1 className="text-5xl my-7 font-bold">Testowy komponent</h1>
            <Button>Testowy przycisk</Button>
            <Button variant={'destructive'}>Testowy przycisk</Button>
        </div>
    );
}