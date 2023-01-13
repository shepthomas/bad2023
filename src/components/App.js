import { Container, Grid, Col } from "./Layout";
import Footer from "./Footer";
import "./App.scss";

function App() {
  return (
    <div className="BAD t-body">
      <Container>
        <Grid>
          <Col>
            <h1 className="t-h1 uppercase">Our BAD Past 2021</h1>
            <h2 className="t-h2">Open Studio</h2>
            <h3 className="t-h3">BNE Design Market</h3>
            <h4 className="t-h4">24 - 31 May, Open daily</h4>
            <h5 className="t-h5 uppercase">Exhibition, Free, Under 18+</h5>
          </Col>
          <Col md="6">
            <p className="t-body emphasis">
              We’re sending BAD out with a bang with a block party that will
              swallow up Fish Lane, hook, line and sinker.
            </p>
            <p>
              Presented by Blaklash, the BAD Block Party will kick off with an
              afternoon of markets from local First Nations makers including
              Rachael Sarra and Magpie Goose. Then take a behind the scenes tour
              of the laneway’s impressive collection of public artworks before
              returning to Town Square to sip cocktails amongst the lush
              greenery of Town Square.
            </p>
            <p>
              Stick around after dark and watch the lane burst into a riot of
              circus, dance and live tunes. It’s good to be BAD. Book a BAD Art
              Walk and Talk Tour here.
            </p>
          </Col>
          <Col md="6">
            <p>
              <span className="emphasis">
                Presented by Blaklash in association with Museum of Brisbane and
                ARIA.
              </span>
              <br />
              BAD is an initiative of Museum of Brisbane and is supported by the
              Queensland Government through Arts Queensland. This event is also
              generously supported by ARIA property.
            </p>
          </Col>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
