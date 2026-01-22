const Footer = ({ t }) => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4 max-w-xs">
            <img
              src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
              alt="Freya-logo"
              className="h-16 w-fit cover opacity-80 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-sm text-[#666] leading-relaxed">
              {t('footer_description')}
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-[#111] uppercase tracking-wider">
                {t('footer_product')}
              </h4>
              <a
                href="#patient"
                onClick={(e) => { e.preventDefault(); window.navigateTo('patient'); }}
                className="text-sm text-[#666] hover:text-[#111] transition-colors"
              >
                {t('nav_patient')}
              </a>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_features')}
              </a>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_pricing')}
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-[#111] uppercase tracking-wider">
                {t('footer_company')}
              </h4>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_about')}
              </a>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_contact')}
              </a>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_blog')}
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-[#111] uppercase tracking-wider">
                {t('footer_legal')}
              </h4>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_privacy')}
              </a>
              <a href="#" className="text-sm text-[#666] hover:text-[#111] transition-colors">
                {t('footer_terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
