import { useTable } from 'react-table';
function Datatable(props) {
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName',
        },
        {
            Header: 'Last Name',
            accessor: 'lastName',
        },
    ];
    const data = [
        {
            firstName: 'Tran',
            lastName: 'Man',
        },
        {
            firstName: 'Tran',
            lastName: 'Tuyen',
        },
    ];
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return <h2>{props.data}</h2>;
}

export default Datatable;
