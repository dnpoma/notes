import React from 'react'
import ReactDOM from 'react-dom/client'
import {getNotesFn} from './api/noteApi.tsx'
import { INotesResponse } from './api/types.tsx';
import { useEffect, useState } from 'react';
import App from './App.tsx';

function Main() {
  useEffect(() => {
    async function fetchData() {
      try {
        const notes = await getNotesFn();
        console.log(notes);
      } catch (error) {
        console.error('Error al obtener las notas:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <React.StrictMode>
      {/* <App /> */}
      <p>hi {}</p>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);