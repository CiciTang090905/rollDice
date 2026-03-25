import Die from "./components/Die";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-700">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>
      <Die value={3} /> {/* 👀 Pass value as a prop */}
    </div>
  );
}

export default App;
