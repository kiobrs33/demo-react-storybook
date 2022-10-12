import { Button } from "./stories/Button.jsx";

export const App = () => {
  return (
    <div className="container">
      <Button
        label="Boton Primario"
        onClick={() => console.log("Click!!")}
        primary
      />
      <Button
        label="Boton Secundario"
        onClick={() => console.log("Click 2 !!")}
      />
    </div>
  );
};
