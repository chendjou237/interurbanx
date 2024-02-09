 import React, { useContext } from 'react'
import { redirect } from 'next/navigation';
import Table from './Table';
import isAuthenticated from '../utils/isAuthenticated';
import { PocketBaseContext, usePocketbaseContext } from '../libs/context';

export default function ShipmentsPage() {
  const {client} = usePocketbaseContext()
  if(!isAuthenticated(client!) )
    redirect('/signin')
  return (
    <div>
      <Table />
    </div>
  )
}
