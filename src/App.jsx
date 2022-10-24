import './App.css'

import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
// import { withRouter } from "react-router";

export default function App() {
  return (
    <main>
      <nav>
      <Router>
        <Routes>
          <Route path="/" element={<div>hi</div>} />
        </Routes>
      </Router>
      </nav>
    </main>
  )
}
