const PatientChatStart = ({ t }) => {
  const handleSuggestionClick = (suggestion) => {
    console.log('Suggestion clicked:', suggestion);
    // Here you could handle the suggestion click
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    const message = input.value.trim();
    if (message) {
      console.log('Message sent:', message);
      // Navigate to chat page
      window.navigateTo('patient-chat');
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#262626] h-full flex flex-col overflow-hidden selection:bg-[#90A40A] selection:text-white">
      {/* Simple Header */}
      <header className="w-full bg-white border-b border-neutral-100 px-6 py-4 flex items-center justify-between shrink-0">
        <a href="#patient" onClick={(e) => { e.preventDefault(); window.navigateTo('patient'); }} className="flex items-center gap-2 group">
          <img
            src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
            alt="Freya-logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90A40A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#90A40A]"></span>
          </span>
          <span className="text-xs md:text-sm text-[#7F601B] font-medium">{t('freya_online')}</span>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-6">
          {/* Freya Opening Message */}
          <div className="fade-in-up delay-100 flex gap-3 md:gap-4">
            {/* Freya Avatar */}
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#90A40A]/20 flex items-center justify-center p-1.5 shadow-sm">
              <img
                src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
                alt="Freya"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 space-y-2">
              <div className="text-sm md:text-base font-medium text-[#7F601B]">Freya</div>
              <div className="bg-white rounded-3xl rounded-tl-sm px-5 md:px-6 py-4 md:py-5 shadow-sm border border-neutral-100">
                <p className="text-base md:text-lg leading-relaxed text-[#262626]">
                  {t('patient_chat_start_welcome')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#262626] mt-3">
                  {t('patient_chat_start_welcome_2')}
                </p>
              </div>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="fade-in-up delay-300 pl-14 md:pl-16 space-y-3">
            <p className="text-xs md:text-sm text-[#7F601B]/70 font-medium mb-3">{t('patient_choose_from')}</p>

            <div className="flex flex-wrap gap-2">
              {/* Veiligheid thuis */}
              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_1'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:shield-check" data-stroke-width="1.5"></span>
                {t('patient_suggestion_1')}
              </button>

              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_2'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:droplets" data-stroke-width="1.5"></span>
                {t('patient_suggestion_2')}
              </button>

              {/* Dagelijkse activiteiten */}
              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_3'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:shirt" data-stroke-width="1.5"></span>
                {t('patient_suggestion_3')}
              </button>

              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_4'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:chef-hat" data-stroke-width="1.5"></span>
                {t('patient_suggestion_4')}
              </button>

              {/* Hulpmiddelen */}
              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_5'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:package" data-stroke-width="1.5"></span>
                {t('patient_suggestion_5')}
              </button>

              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_6'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:accessibility" data-stroke-width="1.5"></span>
                {t('patient_suggestion_6')}
              </button>

              {/* Voor mantelzorger */}
              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_7'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:heart-handshake" data-stroke-width="1.5"></span>
                {t('patient_suggestion_7')}
              </button>

              <button
                onClick={() => handleSuggestionClick(t('patient_suggestion_8'))}
                className="group px-4 py-2.5 bg-white hover:bg-[#F9FAF4] border border-neutral-200 hover:border-[#90A40A] rounded-full text-sm md:text-base text-[#262626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="iconify text-[#90A40A] w-4 h-4" data-icon="lucide:users" data-stroke-width="1.5"></span>
                {t('patient_suggestion_8')}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Input Area (Fixed at Bottom) */}
      <div className="shrink-0 bg-white border-t border-neutral-100 px-4 md:px-6 py-4 md:py-5">
        <div className="max-w-3xl mx-auto">
          {/* Input Field */}
          <form onSubmit={handleSendMessage} className="relative flex items-center mb-3">
            <input
              type="text"
              placeholder={t('patient_input_placeholder')}
              className="w-full bg-[#FAF9F6] border border-neutral-200 text-[#262626] text-base rounded-full focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] block pl-5 pr-14 py-4 transition-all outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 bg-[#90A40A] hover:bg-[#7a8d08] text-white rounded-full p-2.5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              aria-label={t('patient_send_button_aria')}
            >
              <span className="iconify w-5 h-5" data-icon="lucide:send" data-stroke-width="2"></span>
            </button>
          </form>

          {/* Legal Notice */}
          <div className="text-center px-2">
            <p className="text-[10px] md:text-xs text-[#7F601B]/60 leading-relaxed">
              {t('patient_legal_notice')}{' '}
              <a href="#" className="underline hover:text-[#90A40A]">{t('patient_terms')}</a>
              {' '}{t('patient_and')}{' '}
              <a href="#" className="underline hover:text-[#90A40A]">{t('patient_privacy_policy')}</a> {t('patient_privacy_read')}{' '}
              <a href="#" className="underline hover:text-[#90A40A]">{t('patient_cookie_preferences')}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
