import { useEffect, useState, useRef } from "react";
import { Container } from "../../Layout";

export default function StickyHeader({ title }) {
  //  State
  const [isSticky, setSticky] = useState(false);
  //  Refs
  const bar = useRef(null);
  //  Lifecycle
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //  Page menu sticky
      if (bar.current.getBoundingClientRect().top <= 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`sticky-header` + (isSticky ? " is-sticky" : "")} ref={bar}>
      <div className={`header-inner` + (isSticky ? " is-sticky" : "")}>
        <Container>
          <div className="content">
            <div className="label">{title}</div>
            <div className="action">
              <div className="small-button">
                <span className="button-label">Book tickets</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
