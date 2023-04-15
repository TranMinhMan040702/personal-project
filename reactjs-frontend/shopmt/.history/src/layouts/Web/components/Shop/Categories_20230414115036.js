/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CategoryService from '../../../../services/CategoryService';

function Categories({ params, setParams }) {
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
    const handleClick = (e) => {
        setParams((prev) => {
            return { ...prev, categoryId: e.target.id };
        });
    };
    const addActive = () => {
        const tags = document.getElementsByClassName('category-item');
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].classList.contains('active')) tags[i].classList.remove('active');
            if (tags[i].id === params.categoryId) tags[i].classList.add('active');
        }
    };
    useEffect(() => {
        addActive();
    }, [params]);
    return (
        <div className="category">
            <h6>Danh sách thể loại</h6>
            <div className="box">
                <span className="category-item" id="" onClick={(e) => handleClick(e)}>
                    Tất cả
                </span>
                {categorise &&
                    categorise.map((category) => {
                        return (
                            <span
                                className="category-item"
                                id={category.id}
                                onClick={(e) => handleClick(e)}
                            >
                                {category.name}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
}

export default Categories;
