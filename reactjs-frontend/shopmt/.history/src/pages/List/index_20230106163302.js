import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/categoryService';
function List() {
    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            console.log(resp.data);
        }, []);
    });
    const data = 'datatable of ';
    return (
        <div className="list">
            <DataTable data={data} />
        </div>
    );
}

export default List;
