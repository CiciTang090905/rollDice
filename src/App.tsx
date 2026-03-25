import Die from "./components/Die";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-700">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>

      <div className="flex gap-6"> {/* 👀 Wrap dice in a flex container */}
        <Die initialValue={3} />
        <Die initialValue={5} /> {/* 👀 Add a second die run independenly*/}
      </div>
    </div>
  );
}

export default App;
