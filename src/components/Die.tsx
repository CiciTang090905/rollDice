// 👀 No more useState import — state is gone: the component no longer manages its own state.
// receive from parent: change the state, based on interaction from UI
//onRoll trigger parent's state update

// important shift is this: Die no longer decides its own value. 
// App owns the dice state, passes the current value down through props, 
// and receives click events back through callbacks. Data flows down; events flow up.


const dotPositions: Record<number, number[]> = {
  1: [4],
  2: [2, 6],
  3: [2, 4, 6],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

interface DieProps {
  value: number; // 👀 Current value from the parent
  onRoll: () => void; // 👀 Callback from parent
}

function Die({ value, onRoll }: DieProps) { // 👀 No internal state
  const dots = dotPositions[value] ?? [];

  return (
    <button
      onClick={onRoll} // 👀 Call parent's handler
      className="grid grid-cols-3 grid-rows-3 gap-2 rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ width: "120px", height: "120px" }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex items-center justify-center">
          {dots.includes(i) && (
            <div className="h-5 w-5 rounded-full bg-gray-800" />
          )}
        </div>
      ))}
    </button>
  );
}

export default Die;
