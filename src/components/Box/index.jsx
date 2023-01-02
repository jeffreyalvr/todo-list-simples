import "./styles.css";

import BoxHeader from "./BoxHeader";
import BoxContent from "./BoxContent";

const Box = () => {
  return (
    <div className="box">
      <BoxHeader />
      <BoxContent />
    </div>
  );
};

export default Box;
