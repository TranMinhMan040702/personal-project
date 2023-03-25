function Modal({ modalBody, modalHeader, modalFooter }) {
    return (
        <div class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{modalHeader}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">{modalBody}</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">
                            {modalFooter.close}
                        </button>
                        <button type="button" class="btn btn-sm btn-success">
                            Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
