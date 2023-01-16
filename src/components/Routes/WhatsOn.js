import { useState, useEffect, useCallback } from "react";
import { Container, Grid, Col } from "../Layout";
import { PageHero } from "../Heroes";
import { SearchField, SearchGrid } from "../Search";
import { events } from "../../data/events";

export default function WhatsOn() {
  //  Values for search
  const type = [
    { label: "Exhibition", value: "exhibition" },
    { label: "Experience", value: "experience" },
  ];

  //  State
  const [filterKey, setFilterKey] = useState({
    type: [],
  });
  const [loading, setLoading] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  //  Filter events
  const filterEvents = useCallback(() => {
    //  Create filter key with categories that aren't empty
    const keyEntries = Object.entries(filterKey);
    let adjustedFilterKey = {};
    for (const [category, arr] of keyEntries) {
      if (arr.length !== 0) {
        adjustedFilterKey[category] = arr;
      }
    }
    console.log(events);
    setFilteredEvents(multiPropsFilter(events, adjustedFilterKey));
  }, [filterKey]);

  const multiPropsFilter = (courses, filters) => {
    const filterKeys = Object.keys(filters);
    return courses.filter((course) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(course[key])) {
          return course[key].some((keyEle) => filters[key].includes(keyEle));
        }
        return filters[key].includes(course[key]);
      });
    });
  };

  //  Lifecycle
  useEffect(() => {
    //  Filter raw course list
    filterEvents();
  }, [filterEvents]);

  return (
    <>
      <PageHero title="What's On" />
      {/* Search */}
      <section className="events-search">
        <div className="events-search_input">
          <Container>
            <Grid>
              <Col>
                <SearchField placeholder="Search events, artists or venues" />
              </Col>
            </Grid>
          </Container>
        </div>
        <div className="events-search_filter">Filters go here</div>
      </section>
      {/* Grid */}
      <section className="events-search_grid">
        <Container>
          <Grid>
            <Col>
              <SearchGrid events={filteredEvents} eventsPerPage={8} />
            </Col>
          </Grid>
        </Container>
      </section>
      {/* Filter Panel */}
    </>
  );
}
