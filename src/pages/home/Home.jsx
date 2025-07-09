import { Hero, Comment, Ourservices, Providers } from "../../components";
import { Services, Testimonial, Apps, Product } from "../../pages/index";
const Home = () => {
  return (
    <>
      <Hero />
      <Ourservices />
      {/* <Services /> */}
      {/* <Apps /> */}
      <Providers />
      <Product />
      {/* <Testimonial /> */}
      <Comment />
    </>
  );
};
export default Home;
