import { DataTable } from "@/global_ui_components/ui/table"



const DataGrid = ({columns, data}) => {

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DataGrid