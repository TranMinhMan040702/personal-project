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
                            <button className="btn btn-primary btn-sm text-white" style={{ 'margin-right': '5px' }}>
                                Edit
                            </button>
                            <button className="btn btn-danger btn-sm text-white">Delete</button>
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
    const GetDataFromTable = (value) => {
        setDeliveriseCheck(value);
    };
    console.log(deliveriseCheck);
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
                                    <button onClick={(e) => AddDelivery(e)} class="btn btn-success">
                                        Create Delivery
                                    </button>
                                    <button type="submit" class="btn btn-danger">
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
