import { Link } from "react-router-dom";
import { Container, Grid, Col } from "../Layout";
import "./style.scss";

export default function Nav() {
  return (
    <section className="g-header">
      <div className="g-header_wrapper">
        <Container>
          <Grid>
            <Col>
              {/* Logo */}
              {/* Menu */}
              <div className="g-header_menu">
                <ul className="menu-items">
                  <li className="menu-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/whats-on">What's on</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Grid>
        </Container>
      </div>
    </section>
  );
}
