import { createPortal } from "react-dom"

const ModalHomeView = ({children, onOpenModal}) => {
    return createPortal(
        <div className="flex items-center justify-center"  onClick={onOpenModal}>
            {children}
        </div>,
    document.getElementById('modalHome')
    )
}

export {ModalHomeView}