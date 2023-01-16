import { useState, useEffect, useCallback } from "react";
import { Container, Grid, Col } from "../Layout";
import { PageHero } from "../Heroes";
import { SearchField, SearchGrid, SearchFilters, Dropdown } from "../Search";
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
  const [filteredEvents, setFilteredEvents] = useState([]);
  // const [filterPanelOpen, setFilterPanelOpen] = useState(false);

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

  //  Dropdown actions
  const addOption = (category, label) => {
    const options = filterKey[category];
    setFilterKey((filterKey) => ({
      ...filterKey,
      [category]: [...options, label],
    }));
  };

  const removeOption = (category, label) => {
    const options = filterKey[category].filter((option) => option !== label);
    setFilterKey((filterKey) => ({ ...filterKey, [category]: options }));
  };

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
        <div className="events-search_filter">
          <SearchFilters>
            <Dropdown
              label="Type"
              category="type"
              options={type}
              filterKey={filterKey}
              add={addOption}
              remove={removeOption}
            />
          </SearchFilters>
        </div>
      </section>
      {/* Grid */}
      <section className="events-search_grid">
        <SearchGrid events={filteredEvents} eventsPerPage={8} />
      </section>
      {/* Filter Panel */}
    </>
  );
}
