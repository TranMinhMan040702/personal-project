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
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;
