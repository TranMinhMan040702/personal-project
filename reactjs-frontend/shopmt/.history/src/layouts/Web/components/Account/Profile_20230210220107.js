function Profile() {
    return (
        <>
            <div className="header">
                <h5>Hồ sơ của tôi</h5>
                <p>Quản lý hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="profile">
                <form action="">
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

                            <label htmlFor="male">
                                <input id="male" name="gender" className="input-control" type="radio" value="male" />
                                Nam
                            </label>

                            <label htmlFor="female">
                                <input id="female" name="gender" className="input-control" type="radio" value="male" />
                                Nữ
                            </label>
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
