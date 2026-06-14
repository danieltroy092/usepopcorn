import { useState } from "react";

import { Button } from "../components/Button";
import { MovieList } from "../components/MovieList";

export const ListBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <Button onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </Button>

      {isOpen1 && children}
    </div>
  );
};
