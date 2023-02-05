function Categories() {
    return (
        <div className="category">
            <div className="box f_flex">
                <img src={value.cateImg} alt="" />
                <span>Văn học</span>
            </div>
            <div className="box f_flex">
                <span>Kinh tế</span>
            </div>
            <div className="box f_flex">
                <span>Chính trị</span>
            </div>
            <div className="box f_flex">
                <span>Tình yêu</span>
            </div>
        </div>
    );
}

export default Categories;
