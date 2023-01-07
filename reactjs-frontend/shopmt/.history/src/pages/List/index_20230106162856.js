import { useLocation } from 'react-router-dom';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/categoryService';
function List() {
    let url = useLocation();
    const data = 'datatable of ' + url.pathname;
    return (
        <div className="list">
            <DataTable data={data} />
        </div>
    );
}

export default List;
