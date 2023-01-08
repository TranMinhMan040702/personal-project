import { useMemo } from 'react';
import { useTable } from 'react-table';
function Datatable() {
    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
        ],
        [],
    );
    const data = useMemo(
        () => [
            {
                firstName: 'Tran',
                lastName: 'Man',
            },
            {
                firstName: 'Tran',
                lastName: 'Tuyen',
            },
        ],
        [],
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        // apply the table props
        <table {...getTableProps()}>
            <thead>
                {
                    // Loop over the header rows
                    headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                // Loop over the headers in each row
                                headerGroup.headers.map((column) => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {
                                            // Render the header
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {
                    // Loop over the table rows
                    rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {
                                    // Loop over the rows cells
                                    row.cells.map((cell) => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {
                                                    // Render the cell contents
                                                    cell.render('Cell')
                                                }
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Datatable;
