export const Action_menu = () => {
  return (
    <div className="auction_menu">
      <div className="auction_links">
        <div className="auction_top">
          <a href="#" className="install-btn"></a>
        </div>
        <div className="auction_bottom">
          <button>
            Laufey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m7 10l5 5l5-5z" />
            </svg>
          </button>
        </div>
      </div>
      <a href="#" className="auction_picture">
        <img
          src="https://avatars.fastly.steamstatic.com/e5fe682441cd40d638010f6ec48314f669fb6caa.jpg"
          alt=""
        />
      </a>
    </div>
  );
};
