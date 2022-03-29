import React from 'react'
import { ArrayInput, Create, Edit, required, SelectArrayInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin'

export function UsersCreator(props) {
  return (
    <Create {...props} >
        <SimpleForm>
        <TextInput label='Name' source='name' validate={[required()]}/>
        <TextInput label='Displayed Name' source='displayedName' validate={[required()]} />
        <TextInput label='Email' source='email' validate={[required()]}/>
        <SelectArrayInput label='Roles' 
            source='roles' validate={[required()]}
            choices={[
                { id: 'ROLES_ADMIN', name: 'Admin' },
                { id: 'ROLES_USER', name: 'User' }
            ]}/>
        </SimpleForm>
    </Create>
  )
}


export function UsersEditor(props) {
    return (
      <Edit {...props} >
          <SimpleForm>
            <TextInput label='Name' source='name' />
            <TextInput label='Displayed Name' source='displayedName' />
            <TextInput label='Email' source='email' />
            <SelectArrayInput label='Roles' 
                source='roles' validate={[required()]}
                choices={[
                    { id: 'ROLES_ADMIN', name: 'Admin' },
                    { id: 'ROLES_USER', name: 'User' }
                ]}/>
          </SimpleForm>
      </Edit>
    )
  }
  