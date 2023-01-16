import { Container } from "../../Layout";
import "./style.scss";

export default function SearchFilters({ children }) {
  return (
    <div className="search-filters">
      <Container>
        <div className="filter-list">
          <div className="list-items">{children}</div>
        </div>
      </Container>
    </div>
  );
}
