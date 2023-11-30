import { createPortal } from "react-dom"

const ModalHomeView = ({children, onOpenModal}) => {
    return createPortal(
        <div onClick={onOpenModal}>
            {children}
        </div>,
    document.getElementById('modalHome')
    )
}

export {ModalHomeView}