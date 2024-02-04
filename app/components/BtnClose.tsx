interface IBtnClose {
  onClose: () => void;
}

export const BtnClose = ({onClose}: IBtnClose) => {
  return (
    <button onClick={onClose}>
      <img
        className="modal-close"
        src="/close.svg"
        alt="icon buy"
        width={30}
        height={30}
      />
    </button>
  );
};
