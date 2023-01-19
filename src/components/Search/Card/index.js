import { Link } from "react-router-dom";
import Tag from "./Tag";
import "./style.scss";

export default function Card({ title, slug }) {
  return (
    <div className="card-event">
      <Link to={`/events/${slug}`}>
        <div className="media">
          <div className="aspect-ratio"></div>
        </div>
        <div className="header">
          <div className="title">{title}</div>
          <div className="date">29 May</div>
        </div>
      </Link>
      <div className="tags">
        <Tag label="label" />
        <Tag label="label" />
        <Tag label="..." />
      </div>
    </div>
  );
}
