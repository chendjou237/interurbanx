 import React, { useContext } from 'react'
import { redirect } from 'next/navigation';
import Table from './Table';
import isAuthenticated from '../utils/isAuthenticated';
import { PocketBaseContext, usePocketbaseContext } from '../libs/context';
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';

export default function ShipmentsPage() {
  const client = new PocketBase("http://127.0.0.1:8090")
  client.authStore.loadFromCookie(cookies()?.get("pb_auth")?.value ?? "" )
  if(!isAuthenticated(client) )
    redirect('/signin')
  return (
    <div>
      <Table />
    </div>
  )
}
