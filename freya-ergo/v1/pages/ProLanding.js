const ProLanding = ({ t }) => {
  return (
    <div className="bg-white text-[#111111] antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar t={t} showPatientLink={true} showLoginLink={true} />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-16 pb-20 lg:pt-30 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left relative z-10">
              {/* Badge */}
              <div className="fade-in-up delay-100 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-black/[0.06] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8 transition-transform hover:scale-[1.02] cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-[#444] tracking-wide">
                  {t('pro_badge')}
                </span>
              </div>

              {/* Headline */}
              <h1 className="fade-in-up delay-200 text-5xl lg:text-6xl xl:text-[4.5rem] font-semibold tracking-tight text-[#111] mb-6 leading-[1.05]">
                {t('pro_hero_title')} <span className="text-[#90A40A]">{t('pro_hero_title_highlight')}</span>
              </h1>

              {/* Subheading */}
              <p className="fade-in-up delay-300 text-lg lg:text-xl text-[#666] mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 tracking-tight">
                {t('pro_hero_description')}
              </p>

              {/* CTA Buttons */}
              <div className="fade-in-up delay-400 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
                <a
                  href="#pro-chat-start"
                  onClick={(e) => { e.preventDefault(); window.navigateTo('pro-chat-start'); }}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#90A40A] text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  <span>{t('pro_cta_demo')}</span>
                  <span className="iconify w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-stroke-width="2"></span>
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E5E5E5] text-[#111] text-sm font-medium rounded-lg hover:bg-[#FAFAFA] hover:border-[#D4D4D4] transition-all duration-200">
                  <span className="iconify w-4 h-4 text-[#666]" data-icon="lucide:play-circle" data-stroke-width="2"></span>
                  <span>{t('pro_cta_video')}</span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="fade-in-up delay-400 pt-8 border-t border-black/[0.04] flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 group">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <span className="iconify w-3.5 h-3.5" data-icon="lucide:check" data-stroke-width="3"></span>
                  </div>
                  <span className="text-sm text-[#555] font-medium">{t('pro_feature_1')}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <span className="iconify w-3.5 h-3.5" data-icon="lucide:check" data-stroke-width="3"></span>
                  </div>
                  <span className="text-sm text-[#555] font-medium">{t('pro_feature_2')}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <span className="iconify w-3.5 h-3.5" data-icon="lucide:check" data-stroke-width="3"></span>
                  </div>
                  <span className="text-sm text-[#555] font-medium">{t('pro_feature_3')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="fade-in-up delay-300 relative lg:ml-8 perspective-1000">
              {/* Main Image Container with elegant shadow/border */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] border border-black/[0.04] bg-white group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none"></div>
                <img
                  src="../../image.png"
                  alt={t('pro_alt_image')}
                  className="w-full h-auto transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>

              {/* Floating Card 1: Top Left */}
              <div className="absolute -top-5 -left-5 md:-left-8 bg-white/90 backdrop-blur-xl rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 p-4 max-w-[200px] animate-[float_4s_ease-in-out_infinite] hidden lg:block ring-1 ring-black/[0.03]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/50 flex items-center justify-center border border-emerald-100">
                    <span className="iconify w-4 h-4 text-emerald-600" data-icon="lucide:check" data-stroke-width="2.5"></span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#111] uppercase tracking-wide">{t('pro_floating_card_1')}</p>
                    <p className="text-[10px] text-[#888] font-medium">{t('pro_floating_card_1_sub')}</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Bottom Right */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white/90 backdrop-blur-xl rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 p-4 max-w-[240px] animate-[float_5s_ease-in-out_infinite_0.5s] hidden lg:block ring-1 ring-black/[0.03]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                    <span className="iconify w-4 h-4 text-blue-600" data-icon="lucide:users" data-stroke-width="2"></span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#111] mb-0.5">{t('pro_floating_card_2')}</p>
                    <p className="text-[11px] text-[#666] leading-snug">{t('pro_floating_card_2_sub')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      <Footer t={t} />
    </div>
  );
};
