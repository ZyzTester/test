import CustomizableDatagrid from 'ra-customizable-datagrid/lib/CustomizableDatagrid'
import React from 'react'
import { ChipField, DateField, EditButton, List, ReferenceField, TextField } from 'react-admin'

export default function TextNoteCalendarList(props) {
  return (
    <List {...props} >
        <CustomizableDatagrid>
          <TextField source='content' />
          <DateField source='createdAt' />
          <ReferenceField label="Owner" source="id" reference='users' >
            <ChipField source='owner' />
          </ReferenceField>
          <EditButton/>
        </CustomizableDatagrid>
    </List>
  )
}
