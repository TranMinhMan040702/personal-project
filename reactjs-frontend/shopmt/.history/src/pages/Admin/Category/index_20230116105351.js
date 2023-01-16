import { useEffect, useMemo, useState } from 'react';
import DataTable from '../../../components/Datatable/Datatable';
import CategoryService from '../../../services/CategoryService';
import field from '../../../utils';
function Category() {
    const fieldIgnoreCategory = [...field, 'listResult', 'products'];
    const [checked, setChecked] = useState(true);
    const [categorise, setCategorise] = useState([]);
    const [listCategoryChecked, setListCategoryChecked] = useState([]);
    const [category, setCategory] = useState({
        id: '',
        name: '',
        deleted: '',
    });

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
                            <button className="btn btn-primary btn-sm" style={{ 'margin-right': '5px' }}>
                                Edit
                            </button>
                            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </div>
                    );
                },
            },
        ]);
    };

    const handleDelete = () => {
        console.log(listCategoryChecked);
    };

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            setCategorise(resp.data);
        });
    }, [checked]);

    const GetData = (value) => {
        console.log(value);
        setListCategoryChecked(value);
        console.log(listCategoryChecked);
    };
    // Add Category
    const AddCategory = (e) => {
        e.preventDefault();
        CategoryService.addCategory(category)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                setCategory({ name: '' });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Delete Category
    // const DeletedPermanently = (e) => {
    //     e.preventDefault();
    // };
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Categorise</h2>
            </div>
            <div className="card mb-4 shadow-sm bg-white mt-3">
                <div className="card-body">
                    <div className="row ">
                        <div className="col-4">
                            <div className="create-category">
                                <form action="">
                                    <div class="mb-3">
                                        <label for="categoryname" class="form-label">
                                            Category Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="categoryname"
                                            required
                                            placeholder="Enter category name"
                                            name="name"
                                            value={category.name}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            onClick={(e) => AddCategory(e)}
                                            class="btn btn-success btn-create-category"
                                        >
                                            Create Category
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="list-category">
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    actionColumns={actionColumns}
                                    GetDataValue={GetData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
