import React from 'react'
import { useAuthenticated } from 'react-admin'

export default function DashboardAdmin() {
  useAuthenticated()
  return (
    <div>DashboardAdmin</div>
  )
}
