import { useEffect, useMemo, useState } from 'react';
import './category.scss';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/CategoryService';
import field from '../../utils';
function Category() {
    const fieldIgnoreCategory = [...field, 'listResult', 'products'];
    const [categorise, setCategorise] = useState([]);
    const [category, setCategory] = useState({
        id: '',
        name: '',
        deleted: '',
    });

    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            setCategorise(resp.data);
        });
    }, []);

    const columns = useMemo(
        () =>
            categorise[0]
                ? Object.keys(categorise[0])
                      .filter((key) => !fieldIgnoreCategory.includes(key))
                      .map((key) => {
                          if (key === 'deleted')
                              return {
                                  Header: key,
                                  accessor: key,
                                  Cell: ({ value }) => (value === true ? 'true' : 'false'),
                              };
                          return { Header: key, accessor: key };
                      })
                : [],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [categorise],
    );

    const data = useMemo(() => [...categorise], [categorise]);

    const actionColumns = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'action',
                Header: 'action',
                Cell: ({ row }) => {
                    return (
                        <div>
                            <button className="btn btn-primary" style={{ 'margin-right': '5px' }}>
                                Edit
                            </button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    );
                },
            },
        ]);
    };

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };
    console.log(category);
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
                                <input
                                    type="text"
                                    id="categoryname"
                                    required
                                    placeholder="Enter category name"
                                    name="name"
                                    value={category.name}
                                    onChange={(e) => handleChange(e)}
                                />
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
                        <DataTable columns={columns} data={data} actionColumns={actionColumns} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
