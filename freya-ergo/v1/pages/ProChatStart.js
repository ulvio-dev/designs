const ProChatStart = ({ t, isLoggedIn = true }) => {
  const { useState, useEffect } = React;
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reference: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('patientData', JSON.stringify(formData));
    window.navigateTo('pro-chat');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-col hidden md:flex z-20">
        <div className="p-6">
          <img
            src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
            alt="Freya Logo"
            className="h-12 w-auto object-contain mb-2"
          />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <a href="#pro-chat-start" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-[#E3E8B9]/40 text-[#5f6d05]">
            <span className="iconify" data-icon="lucide:message-square" data-width="18" data-stroke-width="1.5"></span>
            {t('sidebar_consultation')}
          </a>
          <a
            href="#"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isLoggedIn
                ? 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                : 'text-gray-300 cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => !isLoggedIn && e.preventDefault()}
          >
            <span className="iconify" data-icon="lucide:history" data-width="18" data-stroke-width="1.5"></span>
            {t('sidebar_history')}
          </a>
          <a
            href="#"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isLoggedIn
                ? 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                : 'text-gray-300 cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => !isLoggedIn && e.preventDefault()}
          >
            <span className="iconify" data-icon="lucide:file-text" data-width="18" data-stroke-width="1.5"></span>
            {t('sidebar_reports')}
          </a>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-100">
          {isLoggedIn && (
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-900">
                  {t('org_name')}
                </span>
                <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">
                  PRO
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">
                {t('org_branding_active')}
              </p>
            </div>
          )}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#90A40A] to-[#E3E8B9] flex items-center justify-center text-white text-xs font-medium">
              {isLoggedIn ? 'JD' : 'DA'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {isLoggedIn ? t('user_name') : t('demo_account')}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {t('user_role')}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="iconify" data-icon="lucide:settings" data-width="16" data-stroke-width="1.5"></span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-white md:bg-gray-50">
        {/* Mobile Header */}
        <header className="flex md:hidden items-center justify-between p-4 border-b border-gray-100 bg-white sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <img
              src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
              alt="Freya Logo"
              className="h-8 w-auto"
            />
          </div>
          <button className="text-gray-500">
            <span className="iconify" data-icon="lucide:menu" data-width="24" data-stroke-width="1.5"></span>
          </button>
        </header>

        <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-60px)] md:h-screen">
          {/* Chat Section */}
          <section className="flex-1 flex flex-col h-full bg-white relative">
            {/* Chat Header */}
            <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
              <div>
                <h1 className="text-lg font-medium text-gray-900 tracking-tight">
                  {t('new_consultation')}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90A40A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#90A40A]"></span>
                  </span>
                  <span className="text-xs text-gray-500">{t('freya_online')}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-[#90A40A] hover:bg-[#E3E8B9]/20 rounded-md transition-colors" title={t('start_over')}>
                  <span className="iconify" data-icon="lucide:rotate-ccw" data-width="18" data-stroke-width="1.5"></span>
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center max-w-md">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#E3E8B9]/20 border border-[#E3E8B9] flex items-center justify-center p-3">
                  <img
                    src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('ready_to_begin')}</h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t('complete_patient_form')}
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#90A40A] hover:bg-[#7a8b08] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                  <span className="iconify" data-icon="lucide:user-plus" data-width="18"></span>
                  {t('enter_patient_info')}
                </button>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="w-full md:w-80 bg-white border-l border-gray-100 p-6 flex flex-col gap-6 overflow-y-auto">
            {/* Getting Started Guide */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-50 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-sm font-medium text-gray-900 tracking-tight">
                  {t('getting_started')}
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E3E8B9] text-[#5f6d05] flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">{t('step_patient_info')}</p>
                      <p className="text-xs text-gray-500">{t('step_patient_info_desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">{t('step_consultation')}</p>
                      <p className="text-xs text-gray-400">{t('step_consultation_desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">{t('step_generate_report')}</p>
                      <p className="text-xs text-gray-400">{t('step_generate_report_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branding Preview */}
            {isLoggedIn && (
              <div className="mt-auto">
                <div className="p-4 rounded-xl bg-[#E3E8B9]/20 border border-[#E3E8B9]/50">
                  <div className="flex items-center gap-2 mb-2 text-[#5f6d05]">
                    <span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
                    <span className="text-xs font-semibold tracking-wide">
                      {t('org_branding_title')}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mb-3 leading-snug">
                    {t('org_branding_desc')} <span className="font-medium text-gray-900">{t('org_name')}</span>.
                  </p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#E3E8B9] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#90A40A]"></div>
                    <span className="ml-2 text-[10px] font-medium text-gray-600">
                      {t('active')}
                    </span>
                  </label>
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#E3E8B9]/10 to-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E3E8B9] flex items-center justify-center shadow-sm p-2">
                  <img
                    src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{t('new_consultation')}</h2>
                  <p className="text-sm text-gray-500">{t('enter_patient_info_to_begin')}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t('first_name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] outline-none transition-all"
                    placeholder={t('enter_first_name')}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t('last_name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] outline-none transition-all"
                    placeholder={t('enter_last_name')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('email_address')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] outline-none transition-all"
                  placeholder="patient@example.com"
                />
              </div>

              <div>
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('reference_number')}
                </label>
                <input
                  type="text"
                  id="reference"
                  value={formData.reference}
                  onChange={(e) => setFormData({...formData, reference: e.target.value})}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] outline-none transition-all"
                  placeholder="e.g., REF-2026-001"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('notes')}
                </label>
                <textarea
                  id="notes"
                  rows="4"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90A40A] focus:border-[#90A40A] outline-none transition-all resize-none"
                  placeholder={t('notes_placeholder')}
                ></textarea>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
                <span className="iconify text-blue-500 flex-shrink-0 mt-0.5" data-icon="lucide:info" data-width="18"></span>
                <div className="text-xs text-blue-700 leading-relaxed">
                  <strong>{t('privacy_notice')}:</strong> {t('privacy_notice_text')}
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-[#90A40A] hover:bg-[#7a8b08] rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
                  {t('start_consultation')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
