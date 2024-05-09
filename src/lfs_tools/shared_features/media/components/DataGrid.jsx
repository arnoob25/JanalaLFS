import { DataTable } from "@/global_ui_components/ui/table"

const DataGrid = ({ table }) => {
  return (
    <>
      <DataTable columns={table.columns} data={table.data} />
    </>
  )
}

export default DataGrid