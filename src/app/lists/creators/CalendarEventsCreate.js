import React from 'react'
import { Create, ReferenceInput, SimpleForm, required, SelectInput, DateInput, Edit } from 'react-admin'

export function CalendarEventsCreate(props) {
  return (
    <Create {...props} >
        <SimpleForm>
            <ReferenceInput label='Owner' source='owner' reference='users' validate={[required()]} >
                <SelectInput optionText='id' />
            </ReferenceInput>
            <DateInput source='createdAt' validate={[required()]} />
        </SimpleForm>
    </Create>
  )
}


  