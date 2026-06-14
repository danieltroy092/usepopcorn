import { useState } from "react";

import { Button } from "../components/Button";

export const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </Button>

      {isOpen && children}
    </div>
  );
};
