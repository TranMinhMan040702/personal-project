import { useLocation } from 'react-router-dom';
import DataTable from '../../components/Datatable/Datatable';
function List() {
    let url = useLocation();
    console.log(url);
    return (
        <div className="list">
            <DataTable data="datatable" />
        </div>
    );
}

export default List;
