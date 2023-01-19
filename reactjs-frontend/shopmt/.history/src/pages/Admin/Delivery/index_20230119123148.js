/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import DataTable from '../../../components/Datatable/Datatable';
import DeliveryService from '../../../services/DeliveryService';
import field from '../../../utils';
function Delivery() {
    const fieldIgnoreDelivery = [...field];
    const [checked, setChecked] = useState(true);
    const [deliverise, setDeliverise] = useState([]);
    const [deliveriseCheck, setDeliveriseCheck] = useState([]);
    const [listIdDelete, setListIdDelete] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [delivery, setDelivery] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
    });

    const columns = useMemo(
        () =>
            deliverise[0]
                ? Object.keys(deliverise[0])
                      .filter((key) => !fieldIgnoreDelivery.includes(key))
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
        [deliverise],
    );
    const data = useMemo(() => [...deliverise], [deliverise]);
    const actionColumns = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'action',
                Header: 'action',
                Cell: ({ row }) => {
                    return (
                        <div className="d-flex">
                            <button
                                id={row.original.id}
                                onClick={(e) => HandleEditCDelivery(e, row)}
                                className="btn btn-primary btn-sm text-white"
                                style={{ 'margin-right': '5px' }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={(e) => DeleteOneDelivery(e, row)}
                                className="btn btn-danger btn-sm text-white"
                            >
                                Delete
                            </button>
                        </div>
                    );
                },
            },
        ]);
    };

    const handleChange = (e) => {
        setDelivery({ ...delivery, [e.target.name]: e.target.value });
    };

    // Get delivery
    useEffect(() => {
        DeliveryService.getDelivery().then((resp) => {
            setDeliverise(resp.data);
        });
    }, [checked]);

    const GetDataFromTable = (value) => {
        setDeliveriseCheck(value);
    };

    // Add delivery
    const AddDelivery = (e) => {
        e.preventDefault();
        DeliveryService.addDelivery(delivery)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                setDelivery({
                    id: '',
                    name: '',
                    price: '',
                    description: '',
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        listIdDelete.length = 0;
        deliveriseCheck.map((item) => setListIdDelete((prev) => [...prev, item.id]));
    }, [deliveriseCheck]);

    // Handle edit delivery
    const HandleEditCDelivery = (e, delivery) => {
        e.preventDefault();
        const btn = document.getElementById(delivery.original.id);
        if (delivery.isSelected) {
            setDelivery({ ...delivery.original });
            setIsEdit((prev) => {
                if (prev) {
                    btn.className = 'btn btn-primary btn-sm text-white';
                    btn.innerText = 'Edit';
                    setDelivery({
                        id: '',
                        name: '',
                        price: '',
                        description: '',
                    });
                } else {
                    btn.className = 'btn btn-warning btn-sm text-white';
                    btn.innerText = 'Undo';
                }
                return (prev = !prev);
            });
        }
    };

    // Edit delivery
    const EditDelivery = (e) => {
        e.preventDefault();
        DeliveryService.updateDelivery(delivery)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                setDelivery({
                    id: '',
                    name: '',
                    price: '',
                    description: '',
                });
                console.log(resp.data);
            })
            .catch((err) => console.log(err));
    };

    // Delete One
    const DeleteOneDelivery = (e, delivery) => {
        e.preventDefault();
        const ids = [];
        if (delivery.isSelected) {
            ids.push(delivery.original.id);
        }
        DeliveryService.deletedPermanentlyDelivery(ids)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Delete many
    const DeleteManyDelivery = (e) => {
        e.preventDefault();
        DeliveryService.deletedPermanentlyDelivery(listIdDelete)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Delivery</h2>
            </div>
            <div className="card mb-4 shadow-sm bg-white">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <form action="">
                                <div class="mb-3">
                                    <label for="deliveryname" class="form-label">
                                        Delivery name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="deliveryname"
                                        required
                                        placeholder="Enter delivery name"
                                        name="name"
                                        value={delivery.name}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="price"
                                        required
                                        placeholder="Enter product price"
                                        name="price"
                                        value={delivery.price}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="description"
                                        rows="5"
                                        required
                                        placeholder="Enter delivery description"
                                        name="description"
                                        value={delivery.description}
                                        onChange={(e) => handleChange(e)}
                                    ></textarea>
                                </div>
                                <div className="md-3 d-flex justify-content-between align-items-center">
                                    {!isEdit ? (
                                        <button onClick={(e) => AddDelivery(e)} class="btn btn-success">
                                            Create Delivery
                                        </button>
                                    ) : (
                                        <button onClick={(e) => EditDelivery(e)} class="btn btn-warning">
                                            Edit Delivery
                                        </button>
                                    )}
                                    <button onClick={(e) => DeleteManyDelivery(e)} type="submit" class="btn btn-danger">
                                        Delete Delivery
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-8">
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
    );
}

export default Delivery;
