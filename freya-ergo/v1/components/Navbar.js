const Navbar = ({ t, showProfessionalLink = true, showPatientLink = false, showLoginLink = false }) => {
  return (
    <nav className="w-full mt-1 max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center z-50 relative fade-in-up">
      <div className="flex items-center gap-2">
        <a href="#patient" onClick={(e) => { e.preventDefault(); window.navigateTo('patient'); }}>
          <img
            src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
            alt="Freya-logo"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </a>
      </div>

      <div className="flex items-center gap-4">
        {showProfessionalLink && (
          <a
            href="#pro"
            onClick={(e) => { e.preventDefault(); window.navigateTo('pro'); }}
            className="text-sm text-[#7F601B]/60 hover:text-[#90A40A] transition-colors"
          >
            {t('nav_professional')}
          </a>
        )}
        {showPatientLink && (
          <a
            href="#patient"
            onClick={(e) => { e.preventDefault(); window.navigateTo('patient'); }}
            className="text-sm text-[#7F601B]/60 hover:text-[#90A40A] transition-colors"
          >
            {t('nav_patient')}
          </a>
        )}
        {showLoginLink && (
          <a
            href="#pro-login"
            onClick={(e) => { e.preventDefault(); window.navigateTo('pro-login'); }}
            className="text-sm text-[#444] hover:text-[#111] font-medium transition-colors"
          >
            {t('nav_login')}
          </a>
        )}
      </div>
    </nav>
  );
};
