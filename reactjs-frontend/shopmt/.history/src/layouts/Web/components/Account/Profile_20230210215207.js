function Profile() {
    return (
        <>
            <div className="header">
                <h4>Hồ sơ của tôi</h4>
                <p>Quản lý hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="profile">
                <form action="" className="">
                    <div className="info">
                        <div>
                            <label htmlFor="">Tên đăng nhập</label>
                            <span>man0407</span>
                        </div>
                        <div>
                            <label htmlFor="">Tên</label>
                            <input className="input-control" type="text" value="Trần Minh Mẫn" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input className="input-control" type="text" value="mantm040702@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="">Số điện thoại</label>
                            <input className="input-control" type="text" value="0964294799" />
                        </div>
                        <div>
                            <label htmlFor="">Giới tính</label>
                            <input id="male" name="gender" className="input-control" type="radio" value="male" />
                            <label htmlFor="male">Nam</label>
                            <input id="female" name="gender" className="input-control" type="radio" value="male" />
                            <label htmlFor="female">Nữ</label>
                        </div>
                        <div>
                            <label htmlFor="">Ngày sinh</label>
                            <input className="input-control" type="date" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;
