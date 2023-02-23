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
            setCategorise(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="category">
            <h6>Danh sách thể loại</h6>
            <div className="box">
                <span>Thiếu nhi</span>
            </div>
            <div className="box">
                <span>Giáo Khoa - Tham khảo</span>
            </div>
            <div className="box">
                <span>Văn học</span>
            </div>
            <div className="box">
                <span>Sách học ngoại ngữ</span>
            </div>
            <div className="box">
                <span>Nuôi dạy con</span>
            </div>
            <div className="box">
                <span>Chính trị - Pháp lý - Triết học</span>
            </div>
            <div className="box">
                <span>Văn hóa - Nghệ thuật</span>
            </div>
            <div className="box">
                <span>Âm nhạc - Mỹ thuật</span>
            </div>
            <div className="box">
                <span>Thể dục Thể thao - Giải trí</span>
            </div>
            <div className="box">
                <span>Du lịch</span>
            </div>
        </div>
    );
}

export default Categories;
