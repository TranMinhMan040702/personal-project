import { useEffect } from 'react';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/categoryService';
function List() {
    const data = 'datatable of ';
    return (
        <div className="list">
            <DataTable />
        </div>
    );
}

export default List;
