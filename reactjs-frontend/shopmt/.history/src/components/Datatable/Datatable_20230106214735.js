import { useTable } from 'react-table';
function Datatable(props) {
    const columns = [];
    const data = [];
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });
    return <h2>{props.data}</h2>;
}

export default Datatable;
