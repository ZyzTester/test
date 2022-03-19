import React, {useEffect} from 'react'
import { Datagrid, List, useListContext } from 'react-admin'
// import CustomizableDatagrid from 'ra-customizable-datagrid';

export default function MyList(props) {

    useEffect(() => {
    }, [])
  return (
    <List {...props} >
        {/* <CustomizableDatagrid>

        </CustomizableDatagrid> */}
    </List>
  )
}
