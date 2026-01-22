const PatientLanding = ({ t }) => {
  return (
    <div className="bg-[#FAF9F6] text-[#262626] h-full flex flex-col overflow-x-hidden bg-white relative selection:bg-[#90A40A] selection:text-white">
      <Navbar t={t} showProfessionalLink={true} />

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-8 pb-12 md:pt-16 lg:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Copy & Action */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
          {/* Trust Badge */}
          <div className="fade-in-up delay-100 inline-flex flex-col gap-1 w-fit mb-8">
            <div className="flex items-center gap-2">
              <div className="flex space-x-0.5 text-[#FBBF24]">
                <span className="iconify w-7 h-7" data-icon="mdi:star"></span>
                <span className="iconify w-7 h-7" data-icon="mdi:star"></span>
                <span className="iconify w-7 h-7" data-icon="mdi:star"></span>
                <span className="iconify w-7 h-7" data-icon="mdi:star"></span>
                <span className="iconify w-7 h-7" data-icon="mdi:star-half-full"></span>
              </div>
              <span className="text-lg mt-1 font-medium text-[#7F601B] tracking-wide uppercase">
                4.8
              </span>
            </div>
            <span className="text-xs text-[#7F601B]/70">
              {t('patient_rating')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-200 text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold tracking-tight text-[#262626] mb-6">
            {t('patient_hero_title')} <span className="text-[#90A40A] relative">{t('patient_hero_title_highlight')}</span>
          </h1>

          {/* Description */}
          <p className="fade-in-up delay-300 text-lg md:text-xl leading-loose text-[#262626]/70 mb-10 max-w-lg">
            {t('patient_hero_description')}
          </p>

          {/* CTA Area */}
          <div className="fade-in-up delay-500 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#patient-chat-start"
              onClick={(e) => { e.preventDefault(); window.navigateTo('patient-chat-start'); }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#90A40A] text-white rounded-full text-base font-medium shadow-[0_10px_20px_-10px_rgba(144,164,10,0.5)] hover:shadow-[0_20px_30px_-15px_rgba(144,164,10,0.6)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">{t('patient_cta_start')}</span>
              <span className="iconify relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" data-icon="lucide:message-circle" data-stroke-width="1.5"></span>
            </a>
          </div>

          {/* Steps / Reassurance */}
          <div className="fade-in-up delay-500 mt-12 pt-8 border-t border-neutral-100 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F9FAF4] flex items-center justify-center text-[#90A40A]">
                <span className="iconify w-4 h-4" data-icon="lucide:user-check" data-stroke-width="1.5"></span>
              </div>
              <span className="text-sm font-medium text-[#262626]/80">
                {t('patient_feature_1')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F9FAF4] flex items-center justify-center text-[#90A40A]">
                <span className="iconify w-4 h-4" data-icon="lucide:file-text" data-stroke-width="1.5"></span>
              </div>
              <span className="text-sm font-medium text-[#262626]/80">
                {t('patient_feature_2')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F9FAF4] flex items-center justify-center text-[#90A40A]">
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:heart-handshake" data-stroke-width="1.5"></span>
              </div>
              <span className="text-sm font-medium text-[#262626]/80">
                {t('patient_feature_3')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Emotion */}
        <div className="lg:col-span-6 relative mt-10 lg:mt-0 h-full flex items-center justify-center lg:justify-end fade-in-up delay-300">
          {/* Main Image Container */}
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#90A40A]/10 group">
            <img
              src="https://img.freepik.com/premium-photo/man-building-tower-as-skill-games-geriatric_154439-4592.jpg?w=2000"
              alt={t('patient_alt_image')}
              className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />

            {/* Light Overlay for text contrast/softness */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/40 via-transparent to-transparent opacity-60"></div>

            {/* Floating UI Card: Success Indicator */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transform translate-y-2 hover:-translate-y-0 transition-transform duration-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#90A40A]/10 flex items-center justify-center">
                  <span className="iconify text-[#90A40A] w-6 h-6" data-icon="lucide:sparkles" data-stroke-width="1.5"></span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#90A40A] uppercase tracking-wider mb-1">
                    {t('patient_report_ready')}
                  </p>
                  <p className="text-sm font-medium text-[#262626] leading-snug">
                    {t('patient_testimonial')}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></span>
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></span>
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></span>
                </div>
                <span className="text-xs text-[#7F601B] font-medium">
                  {t('patient_helped')}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 lg:-right-12 w-24 h-24 bg-[#F4F6E7] rounded-full blur-2xl opacity-60 -z-10"></div>
          <div className="absolute bottom-12 -left-6 w-32 h-32 bg-[#90A40A]/10 rounded-full blur-3xl -z-10"></div>

          {/* Floating Tooltip (Trust) */}
          <div className="absolute top-12 -left-4 lg:-left-12 bg-white px-4 py-2.5 rounded-lg shadow-lg border border-neutral-100 flex items-center gap-3 animate-[bounce_3s_infinite]">
            <div className="w-2 h-2 rounded-full bg-[#90A40A]"></div>
            <span className="text-xs font-semibold text-[#262626]">
              {t('patient_trust_badge')}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
