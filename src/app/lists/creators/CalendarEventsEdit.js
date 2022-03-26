import { DateInput, Edit, ReferenceInput, ReferenceManyField, SelectInput, SimpleForm } from "react-admin";

export function CalendarEventsEdit (props) {
    return (
      <Edit title='Edycja CalendarEvents' {...props} mutationMode="pessimistic" >
          <SimpleForm>
          <ReferenceInput label='Owner' source='owner' reference='users' >
                <SelectInput optionText='id' />
            </ReferenceInput>
            {/* <ReferenceManyField label='Owner' target="id" source="id" reference='users'  >
                <SelectInput source="owner" />
            </ReferenceManyField> */}
            <DateInput label='Created at' source='createdAt' />
          </SimpleForm>
      </Edit>
    )
  }