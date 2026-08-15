import { useState } from "react";

function PasswordToggler() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Password Toggle</h2>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggler;