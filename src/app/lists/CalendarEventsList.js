import React, {useEffect} from 'react'
import { ChipField, Datagrid, DateField, EditButton, List, ReferenceField, TextField, useListContext } from 'react-admin'
import CustomizableDatagrid from 'ra-customizable-datagrid';

export default function CalendarEventsList(props) {

    useEffect(() => {
    }, [])
  return (
    <List {...props} >
        <CustomizableDatagrid>
            <ReferenceField label="Owner" source='id' reference='users' >
                <ChipField source='owner' />
            </ReferenceField>
            <DateField source='createdAt' />
            <EditButton/>
        </CustomizableDatagrid>
    </List>
  )
}
