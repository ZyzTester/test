import CustomizableDatagrid from 'ra-customizable-datagrid/lib/CustomizableDatagrid'
import React from 'react'
import { ChipField, DateField, EditButton, List, ReferenceField, TextField } from 'react-admin'

export default function VoiceNoteCalendarEvents(props) {
  return (
    <List {...props} >
        <CustomizableDatagrid>
            <TextField source='title' />
            <DateField source='createdAt' />
            <ReferenceField label="Owner" source="id" reference='users' >
                <ChipField source='owner' />
            </ReferenceField>
            <EditButton/>
        </CustomizableDatagrid>
    </List>
  )
}
