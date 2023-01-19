/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import DataTable from '../../../components/Datatable/Datatable';
import CategoryService from '../../../services/CategoryService';
import field from '../../../utils';
function Category() {
    const fieldIgnoreCategory = [...field, 'listResult', 'products'];
    const [checked, setChecked] = useState(true);
    const [categorise, setCategorise] = useState([]);
    const [listCategoryChecked, setListCategoryChecked] = useState([]);
    const [listIdDelete, setListIdDelete] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [textEdit, setTextEdit] = useState('Edit');
    const [category, setCategory] = useState({
        id: '',
        name: '',
        deleted: '',
    });

    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            setCategorise(resp.data);
        });
    }, [checked]);

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

    const GetDataFromTable = (value) => {
        setListCategoryChecked(value);
    };

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    // no use
    useEffect(() => {
        listIdDelete.length = 0;
        listCategoryChecked.map((item) => setListIdDelete((prev) => [...prev, item.id]));
    }, [listCategoryChecked]);

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

    // delete one category
    const DeleteCategory = (e, category) => {
        e.preventDefault();
        const ids = [];
        if (category.isSelected) {
            ids.push(category.original.id);
        }
        CategoryService.deletedPermanentlyCategory(ids)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Delete many Category
    const DeleteManyCategory = (e) => {
        e.preventDefault();
        CategoryService.deletedPermanentlyCategory(listIdDelete)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        if (!isEdit) {
            setCategory({ name: '' });
            setTextEdit('Edit');
        } else {
            setTextEdit('Undo');
            // document.getElementById('btn-edit').innerText = textEdit;
        }
    }, [isEdit]);

    // Handle category
    const HandleEditCategory = (e, category) => {
        e.preventDefault();
        if (category.isSelected) {
            setCategory({ ...category.original });
            setIsEdit((prev) => (prev = !prev));
        }
    };
    console.log(isEdit);
    console.log(textEdit);
    // Edit category
    const EditCategory = (e) => {
        e.preventDefault();
    };
    const actionColumns = (hooks) => {
        let text = textEdit;
        console.log(textEdit);
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'action',
                Header: 'action',
                Cell: ({ row }) => {
                    return (
                        <div>
                            <button
                                id="btn-edit"
                                onClick={(e) => HandleEditCategory(e, row)}
                                className="btn btn-primary btn-sm"
                                style={{ 'margin-right': '5px' }}
                            >
                                {text}
                            </button>
                            <button onClick={(e) => DeleteCategory(e, row)} className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </div>
                    );
                },
            },
        ]);
    };
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
                                    <div className="d-flex justify-content-between">
                                        {!isEdit ? (
                                            <button onClick={(e) => AddCategory(e)} class="btn btn-success">
                                                Create Category
                                            </button>
                                        ) : (
                                            <button onClick={(e) => EditCategory(e)} class="btn btn-warning text-white">
                                                Edit Category
                                            </button>
                                        )}
                                        <button onClick={(e) => DeleteManyCategory(e)} class="btn btn-danger">
                                            Delete Category
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
                                    GetDataValue={GetDataFromTable}
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
