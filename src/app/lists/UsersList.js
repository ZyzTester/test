import CustomizableDatagrid from 'ra-customizable-datagrid/lib/CustomizableDatagrid'
import React, { cloneElement } from 'react'
import { ArrayField, ChipField, DeleteButton, EditButton, List, SingleFieldList, TextField } from 'react-admin'

export const StringToLabelObject = ({ record, children, ...rest }) =>
  cloneElement(children, {
    record: { label: record },
    ...rest,
  })

export default function UsersList(props) {
  return (
    <List {...props} >
        <CustomizableDatagrid>
            <TextField source='name' />
            <TextField source="displayedName" />
            <TextField source='email'/>
            <ArrayField source="roles">
                <SingleFieldList>
                    <StringToLabelObject>
                    <ChipField source="label"/>
                    </StringToLabelObject>
                </SingleFieldList>
            </ArrayField>
            <EditButton/>
        </CustomizableDatagrid>
    </List>
  )
}
