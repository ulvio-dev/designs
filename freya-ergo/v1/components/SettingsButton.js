const SettingsButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#90A40A] text-white rounded-full shadow-[0_10px_30px_-10px_rgba(144,164,10,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(144,164,10,0.8)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Settings"
    >
      <span
        className="iconify w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
        data-icon="lucide:settings"
        data-stroke-width="2"
      ></span>
    </button>
  );
};
