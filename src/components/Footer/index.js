import { Container, Grid, Col } from "../Layout";

export default function Footer() {
  return (
    <section className="global-footer">
      <Container>
        <Grid>
          <Col>
            <span className="copyright t-caption">
              (Caption) &copy; 2023 Museum of Brisbane. Program is subject to
              change.
            </span>
          </Col>
        </Grid>
      </Container>
    </section>
  );
}
