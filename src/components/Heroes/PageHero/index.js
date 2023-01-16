import { Container, Grid, Col } from "../../Layout";
import "./style.scss";

export default function PageHero({ title }) {
  return (
    <section className="page-hero">
      <Container>
        <Grid>
          <Col>
            <h1 className="t-h1 uppercase">{title}</h1>
          </Col>
        </Grid>
      </Container>
    </section>
  );
}
