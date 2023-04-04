function Modal({ modalBody, modalHeader, modalFooter, modalId }) {
    return (
        <div class="modal fade" id={modalId} tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" style={{ fontSize: '20px' }}>
                            {modalHeader}
                        </h5>
                    </div>
                    <div class="modal-body" style={{ padding: '0px 10px' }}>
                        {modalBody}
                    </div>
                    <div class="modal-footer">{modalFooter}</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
