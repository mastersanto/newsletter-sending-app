import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAppDispatch, RootState, AppDispatch } from './store';
import { AppDispatch } from './store';

import logo from './logo.svg';
import './App.css';
import { fetchNewsletters } from './store/newsletters/newslettersAction';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const newsletters = useSelector((state: any) => state.newsletters.newslettersList);
  
  useEffect(() => {
    dispatch(fetchNewsletters());
  }, [dispatch]);

  console.log({ newsletters });

  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <div>
        <h2>Newsletters</h2>
        {newsletters && (
          <ul>
            {newsletters.map((newsletter: any) => (
              <li key={`newsletter-${newsletter._id}`}>{newsletter.title} - {newsletter._id}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
