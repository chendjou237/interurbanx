 'use client'
 import React, { useContext } from 'react'
import { redirect, useRouter } from 'next/navigation';
import Table from './Table';
import isAuthenticated from '../utils/isAuthenticated';
import { PocketBaseContext, usePocketbaseContext } from '../libs/context';
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';

export default function ShipmentsPage() {
  const {client} = useContext(PocketBaseContext)
  const router = useRouter()
  if(!isAuthenticated(client!) )
    router.push('/signin')
  return (
    <div>
      <Table />
    </div>
  )
}
