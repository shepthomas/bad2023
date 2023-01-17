import { Link } from "react-router-dom";
import "./style.scss";

export default function Card({ title }) {
  return (
    <div className="card-event">
      <Link to={`/`}>
        <div className="media">
          <div className="aspect-ratio"></div>
        </div>
        <div className="header">
          <div className="title">{title}</div>
          <div className="date">Date</div>
        </div>
      </Link>
      <div className="tags">Tags</div>
    </div>
  );
}
