import { HydraAdmin,  ListGuesser } from '@api-platform/admin';
import React, { lazy, useEffect, useState } from 'react';
import {  Resource, EditGuesser, useGetIdentity } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Route, Switch } from 'react-router-dom';
import authProvider from './app/authProvider';
import Login from './app/Login';

// const DashboardAdmin = lazy(() => import('./app/DashboardAdmin.js'))
// const Login = lazy(() => import('./app/Login'))
import myTheme from './mui/theme';
import MyList from './app/MyList';
import LocalStorage from 'ra-customizable-datagrid/lib/LocalStorage';
import MyLayout from './mui/Layout';


function App() {

  return (
    <HydraAdmin layout={MyLayout} entrypoint="https://beautify-mobile.pl" authProvider={authProvider} loginPage={ Login }  >
      <Resource name="users" list={ListGuesser} edit={EditGuesser} />
      <Resource name="user_products" list={ListGuesser} edit={EditGuesser} />
   </HydraAdmin>

  );
}

export default App;
