import { useState } from "react";
// this toggle button switches the background between 2 trhee.js designs
export default function ToggleBtn() {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={dark} onChange={handleToggle} />
      <span className="slider round" />
    </label>
  );
}
