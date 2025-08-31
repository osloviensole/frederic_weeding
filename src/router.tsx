import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Day } from './pages/Day';
import { Party } from './pages/Party';
import { Albums } from './pages/Albums';
import { AlbumDetail } from './pages/AlbumDetail';
import { RSVP } from './pages/RSVP';
import { FAQ } from './pages/FAQ';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'story', element: <Story /> },
      { path: 'day', element: <Day /> },
      { path: 'party', element: <Party /> },
      { path: 'albums', element: <Albums /> },
      { path: 'albums/:albumId', element: <AlbumDetail /> },
      { path: 'rsvp', element: <RSVP /> },
      { path: 'faq', element: <FAQ /> }
    ]
  }
]);