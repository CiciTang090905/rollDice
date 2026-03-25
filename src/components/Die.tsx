const diceSrc = `${import.meta.env.BASE_URL}dice.svg`;

function Die() {
  return (
    <img src={diceSrc} alt="Dice" className="h-28 w-28" draggable={false} />
  );
}

export default Die;
