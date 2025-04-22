import Button from "../components/buttons/Button";
import Candidate from "../interfaces/Candidate.interface";
import "../styles/savedCandidates.css"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table'
import { useEffect, useState } from "react";




function SavedCandidates() {
  const [data, setData] = useState(() => [])
  useEffect(() => {
    const potentialCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]')
    setData(potentialCandidates);
    
  },[]) 
  
  const removeFromPotentialCandidates = (row: any) => {
    console.log(row.getValue("Name"))
  const potentialCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');
  const newCandidates = potentialCandidates.filter((candidate: Candidate) => candidate.name !== row.getValue('Name'))
  localStorage.setItem("potentialCandidates", JSON.stringify(newCandidates))
  setData(newCandidates);
  }
  
  const columnHelper = createColumnHelper<Candidate>()
  
  const columns = [
    columnHelper.accessor(row => row.avatar, {
      id: 'Image',
      cell: info => <img height={50} width={50} src={info.getValue()} />,
      header: () => <span>Image</span>,
    }),
    columnHelper.accessor(row => row.name, {
      id: 'Name',
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor('location', {
      header: () => 'Location',
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
    }),
    columnHelper.accessor('company', {
      header: 'Company',
    }),
    columnHelper.accessor('bio', {
      header: 'Bio',
    }),
    columnHelper.display({
      header: 'Reject',
      cell: ({row}) => <Button onClick={() => removeFromPotentialCandidates(row)} width={40} height={40} minus/>
    })
  ]
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <h1 className="header">Potential Candidates</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="table-style">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  )
}


export default SavedCandidates;
