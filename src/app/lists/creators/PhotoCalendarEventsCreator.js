import React from 'react'
import { Create, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, required, SelectInput } from 'react-admin'

export function PhotoCalendarEventsCreator(props) {
  return (
    <Create {...props} >
        <SimpleForm>
            <TextInput label='Title' source='title' validate={[required()]} />
            <DateInput label='Created at' source='createdAt' validate={[required()]} />
            <ReferenceInput label='Owner' source='owner' reference='users' validate={[required()]} >
                <SelectInput optionText='id' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
  )
}
export function PhotoCalendarEventsEditor(props) {
    return (
      <Edit {...props} >
        <SimpleForm>
            <TextInput label='Title' source='title'  />
            <DateInput label='Created at' source='createdAt' />
            <ReferenceInput label='Owner' source='owner' reference='users' >
                <SelectInput optionText='id' />
            </ReferenceInput>
        </SimpleForm>
      </Edit>
    )
  }
