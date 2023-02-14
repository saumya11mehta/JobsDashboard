import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
			<Navigation/>
			<Routes>
				<Route path="/" element={<p>This is Home Page.</p>} />
				<Route path="/jobs" element=
				{<p>This is the Jobs page.</p>}
				/>
				<Route path="/jobs-applied" element=
				{<p>This is the Jobs-Applied page.</p>}
				/>
				<Route path="/login" element=
				{<p>This is the Login page.</p>}
				/>
			</Routes>
		  </Router>
  );
}

export default App;
