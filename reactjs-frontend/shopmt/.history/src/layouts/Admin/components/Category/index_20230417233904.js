/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import DataTable from '../../../../components/Datatable/Datatable';
import CategoryService from '../../../../services/CategoryService';
import { field } from '../../../../utils';
import images from '../../../../assets/images';
function Category() {
    const fieldIgnoreCategory = [...field, 'listResult', 'products', 'image'];
    const [checked, setChecked] = useState(true);
    const [categorise, setCategorise] = useState([]);
    const [listCategoryChecked, setListCategoryChecked] = useState([]);
    const [listIdDelete, setListIdDelete] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState({
        id: '',
        name: '',
        image: '',
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
    useEffect(() => {
        listIdDelete.length = 0;
        listCategoryChecked.map((item) => setListIdDelete((prev) => [...prev, item.id]));
    }, [listCategoryChecked]);

    // delete one category
    const DeleteOneCategory = async (e, category) => {
        e.preventDefault();
        const ids = [];
        if (category.isSelected) {
            ids.push(category.original.id);
        }
        await CategoryService.deletedPermanentlyCategory(ids)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    // Delete many Category
    const DeleteManyCategory = async (e) => {
        e.preventDefault();
        await CategoryService.deletedPermanentlyCategory(listIdDelete)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    // Handle edit category
    const HandleEditCategory = (e, category) => {
        e.preventDefault();
        const btn = document.getElementById(category.original.id);
        if (category.isSelected) {
            setCategory({ ...category.original });
            setIsEdit((prev) => {
                if (prev) {
                    btn.className = 'btn btn-primary btn-sm text-white';
                    btn.innerText = 'Edit';
                    setCategory({ name: '' });
                    setImage(null);
                } else {
                    btn.className = 'btn btn-warning btn-sm text-white';
                    btn.innerText = 'Undo';
                }
                return (prev = !prev);
            });
        }
    };

    // Edit category
    const EditCategory = async (e) => {
        e.preventDefault();
        await CategoryService.updateCategory(category)
            .then((resp) => {
                setIsEdit((prev) => (prev = !prev));
                setCategory({ name: '' });
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    useEffect(() => {
        if (category.image) {
            setImage(() => {
                const bits = category.image.split('.');
                const file = new File([bits[0]], category.image, {
                    type: 'text/plain',
                });
                return { file };
            });
        }
    }, [category]);

    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(preview);
        };
    }, [image]);

    const handleUploadImage = (e) => {
        setImage({ file: e.target.files[0] });
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleDisplayImage = () => {
        if (category.image && !preview) {
            return category.image;
        }
        return !image ? images.noAvatar : preview;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', image.file);
        data.append('model', JSON.stringify(category));
        try {
            await CategoryService.addCategory(data);
            setChecked((prev) => (prev = !prev));
            setCategory({
                id: '',
                name: '',
                image: '',
                deleted: '',
            });
            setPreview(null);
            setImage(null);
            document.getElementById('category-image').value = '';
            URL.revokeObjectURL(preview);
        } catch (err) {
            console.log(err);
        }
    };

    const actionColumns = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'action',
                Header: 'action',
                Cell: ({ row }) => {
                    return (
                        <div>
                            <button
                                id={row.original.id}
                                onClick={(e) => HandleEditCategory(e, row)}
                                className="btn btn-primary btn-sm text-white"
                                style={{ 'margin-right': '5px' }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={(e) => DeleteOneCategory(e, row)}
                                className="btn btn-danger btn-sm"
                            >
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
                                    <div class="mb-3">
                                        <label for="categoryname" class="form-label">
                                            Category Image
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            required
                                            name="image"
                                            id="category-image"
                                            onChange={(e) => handleUploadImage(e)}
                                        />
                                    </div>
                                    <div className="image-product w-100 my-3">
                                        <img
                                            className="img-thumbnail"
                                            src={handleDisplayImage()}
                                            alt=""
                                            style={{
                                                height: '200px',
                                                width: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        {!isEdit ? (
                                            <button
                                                onClick={(e) => handleSubmit(e)}
                                                class="btn btn-success"
                                            >
                                                Create Category
                                            </button>
                                        ) : (
                                            <button
                                                onClick={(e) => EditCategory(e)}
                                                class="btn btn-warning text-white"
                                            >
                                                Edit Category
                                            </button>
                                        )}
                                        <button
                                            onClick={(e) => DeleteManyCategory(e)}
                                            class="btn btn-danger"
                                        >
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
