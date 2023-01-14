import { Container, Grid, Col } from "../Layout";
import "./style.scss";

export default function Footer() {
  //  Vars

  return (
    <section className="global-footer">
      <Container className="content">
        <Grid>
          <Col>
            <span className="copyright t-caption">
              &copy; 2023 Museum of Brisbane. Program is subject to change.
            </span>
          </Col>
        </Grid>
      </Container>
    </section>
  );
}
