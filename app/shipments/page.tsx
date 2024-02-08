import React from 'react'
import { redirect } from 'next/navigation';
import PocketBase from 'pocketbase'
import Table from './Table';

export default function ShipmentsPage() {


  return (
    <div>
      <Table />
    </div>
  )
}
