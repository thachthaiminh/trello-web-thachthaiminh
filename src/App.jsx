import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import { Button } from "@mui/material";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ModeToggle />
      <hr />
      <Typography variant="body1" color="text.secondary">
        thachthaiminh
      </Typography>
    </>
  );
}

export default App;
