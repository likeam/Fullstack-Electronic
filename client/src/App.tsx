import Container from "./ui/Container";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

export default function App() {
  return (
    <main>
      <Header />
      <Container>
        <p>Electronics</p>
      </Container>
      <Footer />
    </main>
  )
}