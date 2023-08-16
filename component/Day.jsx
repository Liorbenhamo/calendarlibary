import { useEffect, useState } from "react";
import "./calendar.css";
function Day({ item, setClicked, chosen, setClickedsame }) {
  const [color, setColor] = useState(false);
  function handleclick() {
    setClicked(item.num);
    setClickedsame((perv) => !perv);
    setColor((perv) => !perv);
  }
  useEffect(() => {
    if (!chosen[0]) {
      setColor(false);
    }
  }, [chosen]);
  return (
    <div
      onClick={() => handleclick()}
      className={
        color
          ? `calendarplace${item.place} red`
          : "calendarplace" + `${item.place}`
      }
    >
      {item.num}
    </div>
  );
}

export default Day;
