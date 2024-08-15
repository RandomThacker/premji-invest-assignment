const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-3 h-full items-center px-7 border-l border-zinc-800 py-6">
      <div className="flex bg-[#1B1F23] rounded-md w-full px-2 py-3 gap-3">
        <img
          src="https://avatars.githubusercontent.com/u/141705990?v=4"
          alt="pfp"
          className="rounded-full h-10 w-10"
        />
        <div>
          <p className="text-white text-sm">Aryan Thacker</p>
          <p className="text-zinc-400 pt-1 text-xs">@randomThacker</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center w-full">
      <a href="https://github.com/RandomThacker">
        <button>
            <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="githib" className="rounded-full h-9 w-9" />
        </button>
        </a>
        <a href="https://www.linkedin.com/in/aryan-thacker/">
        <button>
            <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png" alt="githib" className="rounded-full h-8 w-8" />
        </button>
        </a>
        <a href="https://medium.com/@thackeraryan0">
        <button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfl0sQQ96OIY4tPLDq5ZsT8lZ9emst7gbCw&s" alt="githib" className="rounded-full h-8 w-8" />
        </button>
        </a>
      </div>
    </div>
  );
};

export default RightSideBar;
