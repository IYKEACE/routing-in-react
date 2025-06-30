Routing in React allows you to navigate between different components (pages) in a single-page application (SPA) without reloading the whole page. React does not have built-in routing, but the most commonly used library for routing in React is React Router.

npm install react-router-dom

/src
├── App.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js

🧭 Example: Basic Routing in React

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
<!-- function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
} -->

export default App;

 Example Pages
 Home.js
 const Home = () => <h1>Home Page</h1>;
 export default Home;

 About.js
 const About = () => <h1>About Page</h1>;
 export default About

 Contact.js
  const Contact = () => <h1>Contact Page</h1>;
  export default Contact