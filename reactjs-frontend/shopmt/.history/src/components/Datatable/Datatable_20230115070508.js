import { useTable, useRowSelect } from 'react-table';
import { Checkbox } from '../Checkbox/Checkbox';

function Datatable(props) {
    const columns = props.columns;
    const data = props.data;
    const actionColumns = props.actionColumns;

    const checkbox = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
                Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
            },
            ...columns,
        ]);
    };
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
        actionColumns,
        useRowSelect,
        checkbox,
    );

    return (
        <>
            <table {...getTableProps()} className="table">
                <thead class="table-light">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
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
        </>
    );
}

export default Datatable;
