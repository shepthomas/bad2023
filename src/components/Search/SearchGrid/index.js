import { useState, useEffect } from "react";
import { Button } from "../../Buttons";
import "./style.scss";

export default function SearchGrid({ events = [], eventsPerPage }) {
  //  State
  const [visible, setVisible] = useState(eventsPerPage);
  const [loading, setLoading] = useState(false);
  const [editedEvents, setEditedEvents] = useState([]);
  const totalEvents = events.length;

  //  Show more
  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + eventsPerPage);
      setLoading(false);
    }, 500);
  };

  //  Lifecycle
  useEffect(() => {
    //  Create new data set with object type
    const editedEvents = events;
    // //  Insert promo if applicable
    // if (editedCourses.length > 8) editedCourses.splice(4, 0, { type: "promo" });

    setEditedEvents(editedEvents);
    setVisible(eventsPerPage);
  }, [events, eventsPerPage]);

  return (
    <section className="search-grid">
      <div className="container">
        <div className="search-grid_options">
          <div className="search-grid_count">{totalEvents} Events</div>
          {/* Insert map v. list here */}
        </div>
        <div className="search-grid_inner">
          {editedEvents.slice(0, visible).map((data, i) => {
            return <div key={i}>{data.name}</div>;
          })}
        </div>
        {visible <= totalEvents && (
          <div className="search-grid_more">
            <div className="remaining">
              Showing {visible} of {totalEvents}
            </div>
            <Button
              type="primary-blue"
              label={loading ? "Loading..." : "Show More"}
              onClick={handleShowMore}
            />
          </div>
        )}
      </div>
    </section>
  );
}
