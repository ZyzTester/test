import { fetchHydra, HydraAdmin,  hydraDataProvider,  ListGuesser } from '@api-platform/admin';
import React, { lazy, useEffect, useState } from 'react';
import {  Resource, EditGuesser, useGetIdentity } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Redirect, Route, Switch } from 'react-router-dom';
import authProvider from './app/authProvider';
import Login from './app/Login';
import MyLayout from './mui/Layout';
import { parseHydraDocumentation } from '@api-platform/api-doc-parser';
import CalendarEventsList from './app/lists/CalendarEventsList';
import { CalendarEventsCreate } from './app/lists/creators/CalendarEventsCreate';
import { CalendarEventsEdit } from './app/lists/creators/CalendarEventsEdit';
import PhotoCalendarEventsList from './app/lists/PhotoCalendarEventsList';
import { PhotoCalendarEventsCreator, PhotoCalendarEventsEditor } from './app/lists/creators/PhotoCalendarEventsCreator';
import VoiceNoteCalendarEvents from './app/lists/VoiceNoteCalendarEvents';
import { VoiceNoteCreator, VoiceNoteEditor } from './app/lists/creators/VoiceNoteCreator';

const API_URL = "https://beautify-mobile.pl"

const fetchHeaders = {
  Authorization: `Bearer ${window.localStorage.getItem('token')}`,
//  Accept: "application/Id+json"
};

const fetchH = (url, options = {} ) =>
  fetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
  });
  
  const apiDocumentationParser = (API_URL) =>
    parseHydraDocumentation(API_URL, {
      headers: new Headers(fetchHeaders),
    }).then(
      ({ api }) => ({ api }),
      (result) => {
        const { api, status } = result;

        console.log(status)

      if (status === 401) {
        return Promise.resolve({
          api,
          status,
          customRoutes: [
            <Route path="/" render={() => <Redirect to="/login" />} />,
          ],
        });
      }

      return Promise.reject(result);
    },
  );

const dataProvide = hydraDataProvider({
  entrypoint: API_URL,
  httpClient: fetchH,
  apiDocumentationParser: apiDocumentationParser
});

function App() {

  return (
    <HydraAdmin dataProvider={dataProvide} layout={MyLayout} entrypoint={API_URL} authProvider={authProvider} loginPage={ Login }  >
      <Resource name="users" list={ListGuesser} />
      <Resource name="calendar_events" list={CalendarEventsList} create={CalendarEventsCreate} edit={CalendarEventsEdit} />
      <Resource name="photo_calendar_events" list={PhotoCalendarEventsList} create={PhotoCalendarEventsCreator} edit={PhotoCalendarEventsEditor} />
      <Resource name="voice_note_calendar_events" list={VoiceNoteCalendarEvents} create={VoiceNoteCreator} edit={VoiceNoteEditor} />
      <Resource name="product_added_calendar_events" list={ListGuesser} />
      <Resource name="reminder_calendar_events" list={ListGuesser} />
      <Resource name="text_note_calendar_events" list={ListGuesser} />
   </HydraAdmin>

  );
}

export default App;
