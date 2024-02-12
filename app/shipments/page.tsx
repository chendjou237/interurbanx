'use client'
import React, { useContext } from 'react'
import { redirect } from 'next/navigation';
import Table from './Table';
import isAuthenticated from '../utils/isAuthenticated';
import { PocketBaseContext, usePocketbaseContext } from '../libs/context';
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';
import { getClientShipment } from '../libs/shipments';
import { IShipments } from '../utils/types';



export default  function ShipmentsPage() {
  const {client} = useContext(PocketBaseContext)
  if(!isAuthenticated(client!) )
    redirect('/signin')
    
  return (
    <div>
      <Table pb={client!}  />
    </div>
  )
 // return <div>Loading...</div>
  // Assuming you have shipments data in state or from context

}
