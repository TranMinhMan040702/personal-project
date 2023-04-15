import { useEffect, useState } from 'react';
import CategoryService from '../../../../services/CategoryService';
function Categories() {
    const [categorise, setCategorise] = useState([]);
    useEffect(() => {
        getCategory();
    }, []);
    const getCategory = async () => {
        try {
            const response = await CategoryService.getAllCategories();
            setCategorise(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="category">
            <h6>Danh sách thể loại</h6>
            {categorise &&
                categorise.map((category) => {
                    return (
                        <div className="box">
                            <span id={category.id}>{category.name}</span>
                        </div>
                    );
                })}
        </div>
    );
}

export default Categories;
