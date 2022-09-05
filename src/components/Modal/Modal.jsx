import './Modal.css';
import Overlay from 'components/Overlay/Overlay';

function Modal({ children, closeModal }) {
	const handleClick = (e, canClose) => {
		//Para a prograpagação do evento dos dois elementos, parando apenas no modal e não indo para o overlay tambem
		e.stopPropagation();
		if (canClose) {
			closeModal();
		}
	};

	return (
		<Overlay overlayClick={closeModal}>
			<div className="Modal" onClick={handleClick}>
				<span
					className="Modal__close"
					onClick={(e) => handleClick(e, true)}
				>
					+
				</span>
				<div className="Modal__body">{children}</div>
			</div>
		</Overlay>
	);
}

export default Modal;
