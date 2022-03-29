import { fetchHydra, HydraAdmin,  hydraDataProvider,  ListGuesser } from '@api-platform/admin';
import React, { lazy, useEffect, useState } from 'react';
import {  Resource, EditGuesser, useGetIdentity, fetchUtils } from 'react-admin';
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
import UsersList from './app/lists/UsersList';
import { UsersCreator, UsersEditor } from './app/lists/creators/UsersCreator';
import ProductAddedCAlendarList from './app/lists/ProductAddedCAlendarList';
import { ProductAddedCalendarCreator, ProductAddedCalendarEditor } from './app/lists/creators/ProductAddedCalendarEditor';
import ReminderCalendarList from './app/lists/ReminderCalendarList';
import { ReminderCalendarCreator, ReminderCalendarEditor } from './app/lists/creators/ReminderCalendarCreator';
import TextNotCalendarList from './app/lists/TextNoteCalendarList';
import TextNoteCalendarList from './app/lists/TextNoteCalendarList';
import { TextNoteCalendarCreator, TextNoteCalendarEditor } from './app/lists/creators/TextNoteCalendarCreator';

const API_URL = "https://beautify-mobile.pl"
const httpClient = fetchUtils.fetchJson;

const fetchHeaders = {
  Authorization: `Bearer ${window.localStorage.getItem('token')}`,
//  Accept: "application/Id+json"
};
//fetching headers with bearer token
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
  apiDocumentationParser: apiDocumentationParser,
  //this part was suppoused to respond to transform parameter (added to create or edit)
  // create: (resource, params) => {
  //   const { changeOwner, ...record } = params.data;
  //   const headers = new Headers({
  //       'Content-Type': 'application/json',
  //   });
  //   if (changeOwner) {
  //     return httpClient(`${API_URL}/${resource}`, {
  //       method: 'PATCH',
  //       body: JSON.stringify(record),
  //       headers,
  //   }).then(({ json }) => ({
  //       data: { ...record, id: json.id },
  //   }));
  //   }
  //     return httpClient(`${API_URL}/${resource}`, {
  //       method: 'POST',
  //       body: JSON.stringify(record),
  //       headers,
  //   }).then(({ json }) => ({
  //       data: { ...record, id: json.id },
  //   }));
  //},
  delete: (resource, params) =>
        httpClient(`${API_URL}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${API_URL}/${resource}?${JSON.stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
});

function App() {

  return (
    <HydraAdmin dataProvider={dataProvide} layout={MyLayout} entrypoint={API_URL} authProvider={authProvider} loginPage={ Login }  >
      <Resource name="users" list={UsersList} edit={UsersEditor} create={UsersCreator} />
      <Resource name="calendar_events" list={CalendarEventsList} create={CalendarEventsCreate} edit={CalendarEventsEdit} />
      <Resource name="photo_calendar_events" list={PhotoCalendarEventsList} create={PhotoCalendarEventsCreator} edit={PhotoCalendarEventsEditor} />
      <Resource name="voice_note_calendar_events" list={VoiceNoteCalendarEvents} create={VoiceNoteCreator} edit={VoiceNoteEditor} />
      <Resource name="product_added_calendar_events" list={ProductAddedCAlendarList} edit={ProductAddedCalendarEditor} create={ProductAddedCalendarCreator} />
      <Resource name="reminder_calendar_events" list={ReminderCalendarList} edit={ReminderCalendarEditor} create={ReminderCalendarCreator} />
      <Resource name="text_note_calendar_events" list={TextNoteCalendarList} edit={TextNoteCalendarEditor} create={TextNoteCalendarCreator} />
   </HydraAdmin>

  );
}

export default App;
