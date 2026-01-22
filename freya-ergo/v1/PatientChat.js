const PatientChat = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    const message = input.value.trim();
    if (message) {
      console.log('Message sent:', message);
      input.value = '';
    }
  };

  const handleReportClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('userEmail', email);
      // Here you could redirect to a report page or show success message
      console.log('Email submitted:', email);
      closeModal();
      alert('Uw rapport wordt verzonden naar ' + email);
    }
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

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
          <span className="text-xs md:text-sm text-[#7F601B] font-medium">Freya is online</span>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-6">
          {/* Message 1: Freya Opening */}
          <div className="fade-in-up delay-100 flex gap-3 md:gap-4">
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
                  Welkom! Waar kan ik u vandaag mee helpen?
                </p>
              </div>
            </div>
          </div>

          {/* Message 2: User Question */}
          <div className="fade-in-up delay-200 flex gap-3 md:gap-4 flex-row-reverse">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#90A40A] to-[#7a8d08] flex items-center justify-center shadow-sm">
              <span className="text-white text-sm md:text-base font-semibold">M</span>
            </div>
            <div className="flex-1 space-y-2">
              <div className="bg-[#F3F4F6] rounded-3xl rounded-tr-sm px-5 md:px-6 py-4 md:py-5 shadow-sm">
                <p className="text-base md:text-lg leading-relaxed text-[#262626]">
                  Mijn moeder is vorige week gevallen in de badkamer. We willen de badkamer veiliger maken, maar we weten niet goed waar te beginnen.
                </p>
              </div>
            </div>
          </div>

          {/* Message 3: Freya Response */}
          <div className="fade-in-up delay-300 flex gap-3 md:gap-4">
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
                  Dat begrijp ik heel goed. Een val kan angst veroorzaken. Laten we samen kijken hoe we de badkamer veiliger kunnen maken.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#262626] mt-3">
                  Mag ik u een paar vragen stellen over de badkamer?
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-[#525252]">
                  <li className="text-base md:text-lg">Wat voor vloer heeft de badkamer?</li>
                  <li className="text-base md:text-lg">Zijn er al steungrepen of handvaten?</li>
                  <li className="text-base md:text-lg">Heeft uw moeder moeite met opstaan of blijven staan?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Message 4: User Answer */}
          <div className="fade-in-up delay-400 flex gap-3 md:gap-4 flex-row-reverse">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#90A40A] to-[#7a8d08] flex items-center justify-center shadow-sm">
              <span className="text-white text-sm md:text-base font-semibold">M</span>
            </div>
            <div className="flex-1 space-y-2">
              <div className="bg-[#F3F4F6] rounded-3xl rounded-tr-sm px-5 md:px-6 py-4 md:py-5 shadow-sm">
                <p className="text-base md:text-lg leading-relaxed text-[#262626]">
                  De vloer is betegeld en kan glad zijn als het nat is. Er zijn geen steungrepen. Mijn moeder is 72 jaar en heeft soms moeite met haar evenwicht, vooral als ze moe is.
                </p>
              </div>
            </div>
          </div>

          {/* Message 5: Freya Analysis */}
          <div className="fade-in-up delay-500 flex gap-3 md:gap-4">
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
                  Dank u wel voor deze informatie. Ik begrijp de situatie goed.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#262626] mt-4 font-semibold">
                  Dit zijn mijn belangrijkste aanbevelingen:
                </p>

                <div className="mt-4 space-y-4">
                  {/* Belangrijkste aanpassingen */}
                  <div className="bg-red-50 border-red-400 rounded-lg p-4">
                    <p className="text-base md:text-lg font-semibold text-red-900 mb-2">Heel belangrijk:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#525252]">
                      <li className="text-base md:text-lg">Antislipmat in de douche en voor de wastafel</li>
                      <li className="text-base md:text-lg">Steungrepen naast de douche en toilet</li>
                      <li className="text-base md:text-lg">Betere verlichting (eventueel met bewegingssensor)</li>
                    </ul>
                  </div>

                  {/* Extra aanbevelingen */}
                  <div className="bg-[#F9FAF4] border-[#90A40A] rounded-lg p-4">
                    <p className="text-base md:text-lg font-semibold text-green-900 mb-2">Ook handig:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#525252]">
                      <li className="text-base md:text-lg">Douchestoel om op te zitten tijdens het douchen</li>
                      <li className="text-base md:text-lg">Verhoogde toiletbril voor gemakkelijker opstaan</li>
                      <li className="text-base md:text-lg">Handdouche met lange slang</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message 6: Freya Final Question with CTA */}
          <div className="fade-in-up delay-600 flex gap-3 md:gap-4">
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
                  Wilt u nog iets toevoegen of aanpassen? Of kan ik uw persoonlijk adviesrapport klaarmaken?
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-neutral-300 bg-white text-base md:text-lg font-medium text-[#262626] hover:border-[#90A40A] hover:text-[#90A40A] transition-all shadow-sm hover:shadow-md">
                  Ik wil iets toevoegen
                </button>
                <button
                  onClick={handleReportClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#90A40A] hover:bg-[#7a8d08] text-white text-base md:text-lg font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
                  Rapport klaarmaken
                </button>
              </div>
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
              placeholder="Typ uw bericht hier..."
              className="w-full bg-[#FAF9F6] border border-neutral-200 text-[#262626] text-base rounded-full focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] block pl-5 pr-14 py-4 transition-all outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 bg-[#90A40A] hover:bg-[#7a8d08] text-white rounded-full p-2.5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              aria-label="Bericht versturen"
            >
              <span className="iconify w-5 h-5" data-icon="lucide:send" data-stroke-width="2"></span>
            </button>
          </form>

          {/* Legal Notice */}
          <div className="text-center px-2">
            <p className="text-[10px] md:text-xs text-[#7F601B]/60 leading-relaxed">
              Door een bericht naar Freya, een AI-chatbot, te sturen, gaat u akkoord met onze{' '}
              <a href="#" className="underline hover:text-[#90A40A]">Voorwaarden</a>
              {' '}en bevestigt u dat u ons{' '}
              <a href="#" className="underline hover:text-[#90A40A]">Privacybeleid</a> hebt gelezen.
              Bekijk de{' '}
              <a href="#" className="underline hover:text-[#90A40A]">cookievoorkeuren</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Report Email */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-content bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-auto overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-neutral-100 bg-gradient-to-r from-[#F9FAF4] to-white">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white border-2 border-[#E3E8B9] flex items-center justify-center shadow-sm p-2">
                  <img
                    src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
                    className="object-contain w-full h-full"
                    alt="Freya"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Uw persoonlijk adviesrapport</h3>
                  <p className="text-sm md:text-base text-[#7F601B]/70 mt-1">Ontvang uw advies via e-mail</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                >
                  <span className="iconify w-6 h-6" data-icon="lucide:x" data-stroke-width="2"></span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleEmailSubmit} className="p-6 md:p-8 space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="emailInput" className="block text-base md:text-lg font-medium text-gray-900 mb-3">
                  E-mailadres <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="iconify text-gray-400 w-5 h-5" data-icon="lucide:mail"></span>
                  </div>
                  <input
                    type="email"
                    id="emailInput"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="uw.email@voorbeeld.be"
                    className="w-full bg-[#FAF9F6] border-2 border-neutral-200 text-[#262626] text-base md:text-lg rounded-xl focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] block pl-12 pr-4 py-4 transition-all outline-none"
                  />
                </div>
                <p className="text-sm text-[#7F601B]/60 mt-2 ml-1">
                  U zal het rapport binnen enkele minuten ontvangen.
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-slate-100 rounded-xl p-4 md:p-5 flex gap-3 md:gap-4">
                <span className="iconify text-slate-500 w-6 h-6 shrink-0 mt-0.5" data-icon="lucide:shield-check"></span>
                <div className="text-xs text-slate-900 leading-relaxed">
                  <strong className="font-semibold block mb-1">Uw privacy is belangrijk</strong>
                  Uw e-mailadres wordt veilig bewaard en alleen gebruikt om het rapport te versturen. We houden ons aan het{' '}
                  <a href="#" className="underline hover:text-blue-700">privacybeleid</a>.
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-3.5 text-base md:text-lg font-medium text-gray-700 bg-white border-2 border-neutral-200 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm order-2 sm:order-1"
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 text-base md:text-lg font-semibold text-white bg-[#90A40A] hover:bg-[#7a8d08] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 order-1 sm:order-2"
                >
                  <span className="iconify w-5 h-5" data-icon="lucide:arrow-right" data-stroke-width="2"></span>
                  Verstuur rapport
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
