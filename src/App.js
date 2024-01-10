import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import { HomePage, ContactPage, ProjectsPage, ErrorPage, Links } from './pages';
// import components
import { Head, Contact, Footer, Widget, ScrollToTop } from './components';

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Head />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Projects" element={<ProjectsPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Contact />
        {/* <Footer /> */}
        {/* <Widget /> */}
      </Router>
    </main>
  );
};

export default App;
