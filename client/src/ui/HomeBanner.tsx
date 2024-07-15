import { homeBanner } from "../assets";
import Container from "./Container";


const HomeBanner = () => {
  return <Container>
    <div>
      <img src={homeBanner} alt="homeBanner" />
    </div>
  </Container>
};

export default HomeBanner;
