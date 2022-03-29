import React from 'react'
import { Create, DateInput, Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'react-admin'

export function TextNoteCalendarCreator(props) {
  return (
    <Create {...props} >
    <SimpleForm>
        <TextInput label='Content' source='content' validate={[required()]} />
        <DateInput label='Created at' source='createdAt' validate={[required()]} />
        <ReferenceInput label='Owner' source='owner' reference='users' validate={[required()]} >
            <SelectInput optionText='id' />
        </ReferenceInput>
    </SimpleForm>
    </Create>
  )
}

export function TextNoteCalendarEditor(props) {
  //you can add this method to dataProvider in order to modify sent to the API 
  //transform={data => ({...data, changeOwner: true})}
    return (
        <Edit {...props}  > 
        <SimpleForm>
            <TextInput label='Content' source='content'  />
            <DateInput label='Created at' source='createdAt' />
            <ReferenceInput label='Owner' source='owner' reference='users' >
                <SelectInput optionText='id'  />
            </ReferenceInput>
        </SimpleForm>
      </Edit>
    )
  }
  