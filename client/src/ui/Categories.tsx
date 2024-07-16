import { useEffect } from "react";
import Container from "./Container";
import Title from "./Title";

const Categories = () => {
  useEffect(() => {
    const fetchData = async () => {};
  }, []);

  return (
    <Container>
      <div>
        <Title text="Popular categories" />
      </div>
    </Container>
  );
};

export default Categories;
