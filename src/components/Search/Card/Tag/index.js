// import { Link } from "react-router-dom";
import "./style.scss";

export default function Tag({ label }) {
  return (
    <div className="tag">
      <span className="label">{label}</span>
    </div>
  );
}
