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
    const instantTable = useTable();
    return <h2>{props.data}</h2>;
}

export default Datatable;
