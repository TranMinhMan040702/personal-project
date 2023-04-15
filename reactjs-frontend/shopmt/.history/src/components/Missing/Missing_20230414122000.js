import images from '../../assets/images';

function Missing() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <img src={images.notfound} alt="" style={{ height: '100%', width: '100%' }} />
        </div>
    );
}

export default Missing;
