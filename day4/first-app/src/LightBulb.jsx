import { useState } from "react";

function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Light Bulb</h2>

      <img
        src={isOn ?  "/light2.gif":"/light1.jpg" }
        alt="bulb"
        width="100"
      />

      <p>{isOn ? "Bulb is ON" : "Bulb is OFF"}</p>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default LightBulb;