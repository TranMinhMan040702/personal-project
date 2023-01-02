import DataTable from '../../components/Datatable/Datatable';
function List() {
    const data = 'data table of products';
    return (
        <div className="list">
            <DataTable data={data} />
        </div>
    );
}

export default List;
