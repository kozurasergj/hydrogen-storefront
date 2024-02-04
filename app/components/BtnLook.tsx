interface IBtnLook {
  onClick: () => void;
}

export const BtnLook = ({onClick}: IBtnLook) => {
  return (
    // eslint-disable-next-line eslint-comments/disable-enable-pair
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div onClick={onClick}>
      <button className="px-3 py-4 bg-gray-400 text-white block mx-auto">
        shop the look
      </button>
    </div>
  );
};
