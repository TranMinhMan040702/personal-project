import { useEffect, useMemo, useState } from 'react';
import './category.scss';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/CategoryService';
import field from '../../utils';
function Category() {
    const [categorise, setCategorise] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            setCategorise(resp.data);
        });
    }, []);

    const columns = useMemo(
        () =>
            categorise[0]
                ? Object.keys(categorise[0])
                      .filter((key) => console.log(key))
                      .map((key) => {
                          return { Header: key, accessor: key };
                      })
                : [],
        [categorise],
    );

    const data = useMemo(() => [...categorise], [categorise]);

    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Categorise</h2>
            </div>
            <div className="row category-content">
                <div className="col-4">
                    <div className="create-category">
                        <form action="">
                            <div class="mb-3">
                                <label for="categoryname" class="form-label">
                                    Category Name
                                </label>
                                <input type="text" id="categoryname" required placeholder="Enter category name" />
                            </div>
                            <div className="md-3">
                                <button type="submit" class="btn btn-success btn-lg btn-create-category">
                                    Create Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-8">
                    <div className="list-category">
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
