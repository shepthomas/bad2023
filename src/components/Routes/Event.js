import { useParams } from "react-router-dom";
import { Container, Grid, Col } from "../Layout";
import { EventHero } from "../Heroes";
import { Card } from "../Search";
import { events } from "../../data/events.js";
import "./Events.scss";

export default function Event() {
  let { id } = useParams();
  let event = events.find((event) => event.slug === id);
  let copyOfEvents = events.slice(0);
  let index = copyOfEvents.indexOf(event);
  if (index > -1) {
    // only splice array when item is found
    copyOfEvents.splice(index, 1); // 2nd parameter means remove one item only
  }
  let relatedEvents = copyOfEvents.sort(() => 0.5 - Math.random()).slice(0, 3);
  console.log(index);
  const { description, location } = event;

  return (
    <div className="event">
      <EventHero title={event.name} type={event.type} />
      <div className="event-content">
        <Container>
          <Grid>
            <Col sm="5" md="4" lg="3" className="sidebar">
              <div className="sidebar_content t-caption">
                <div className="location uppercase emphasis">Where</div>
                {location.name !== "" && (
                  <div className="name">{location.name}</div>
                )}
                {location.address !== "" && (
                  <div className="address">{location.address}</div>
                )}
                {location.suburb !== "" && (
                  <div className="suburb">{location.suburb}</div>
                )}
              </div>
            </Col>
            <Col
              sm="6"
              smOffset="1"
              mdOffset="2"
              xlOffset="1"
              className="description"
            >
              {description} {description} {description} {description}{" "}
              {description} {description}
            </Col>
          </Grid>
        </Container>
      </div>
      <div className="event-related">
        <Container>
          <div className="event-related_grid">
            {relatedEvents.map((event, i) => (
              <Card key={i} title={event.name} slug={event.slug} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
