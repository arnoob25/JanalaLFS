import { DataTable } from "@/global_ui_components/ui/table"



const DataGrid = ({ columns, data }) => {

  return (
    <>
      <DataTable columns={columns} data={data}/>
    </>
  )
}

export default DataGrid