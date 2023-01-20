import StickyHeader from "./StickyHeader";
import "./style.scss";

export default function PageHero({ title, type, imgRatio = "3x2" }) {
  return (
    <section className={`event-hero`}>
      <div className="hero-header">
        <div className="hero-header_title">
          <h1 className="t-h1">{title}</h1>
        </div>
        <div className="hero-header_details t-caption">
          <div className="event-type">{type}</div>
          <div className="event-date">Date</div>
          <div className="event-time">Time</div>
        </div>
        <div className="hero-header_image">
          <figure className={`ratio-${imgRatio}`}></figure>
        </div>
      </div>
      <StickyHeader title={title} />
    </section>
  );
}
