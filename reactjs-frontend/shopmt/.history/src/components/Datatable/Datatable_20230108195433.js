import { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import { Checkbox } from '../Checkbox/Checkbox';
import { Link } from 'react-router-dom';

function Datatable() {
    const MyCell = {
        return <>
        <Link>Hello</Link>
        </>
    }
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
            {
                Header: 'Action',
                accessor: 'action',
            },
        ],
        [],
    );
    const data = useMemo(
        () => [
            {
                firstName: 'Tran',
                lastName: 'Man',
                action: 
            },
            {
                firstName: 'Tran',
                lastName: 'Tuyen',
            },
        ],
        [],
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
                    Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
                },
                ...columns,
            ]);
        },
    );

    return (
        <>
            <table {...getTableProps()} className="table">
                <thead class="table-light">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th scope="col" {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.slice(0, 10).map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}

                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            'selectedFlatRows[].original': selectedFlatRows.map((d) => d.original),
                        },
                        null,
                        2,
                    )}
                </code>
            </pre>
        </>
    );
}

export default Datatable;
