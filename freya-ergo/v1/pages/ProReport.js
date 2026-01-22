const ProReport = ({ t, isLoggedIn = true }) => {
  const { useState } = React;
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('j.devries@azsintlucas.be');
  const [message, setMessage] = useState(`Hello,\n\nPlease find the advice report following our conversation about bathroom safety.\n\nKind regards,\nJan De Vries\n${t('org_name')}`);

  const handleSendEmail = () => {
    alert(t('email_sent'));
    setShowEmailModal(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-col hidden md:flex z-20">
        <div className="p-6">
          <img src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png" alt="Freya Logo" className="h-12 w-auto object-contain mb-2" />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <a href="#pro-chat" onClick={(e) => { e.preventDefault(); window.navigateTo('pro-chat'); }} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-[#E3E8B9]/40 text-[#5f6d05]">
            <span className="iconify" data-icon="lucide:file-text" data-width="18" data-stroke-width="1.5"></span>
            {t('sidebar_reports')}
          </a>
        </nav>

        <div className="p-4 border-t border-gray-100">
          {isLoggedIn && (
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-900">{t('org_name')}</span>
                <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">PRO</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">{t('org_branding_active')}</p>
            </div>
          )}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#90A40A] to-[#E3E8B9] flex items-center justify-center text-white text-xs font-medium">{isLoggedIn ? 'JD' : 'DA'}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{isLoggedIn ? t('user_name') : t('demo_account')}</p>
              <p className="text-xs text-gray-400 truncate">{t('user_role')}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="iconify" data-icon="lucide:settings" data-width="16" data-stroke-width="1.5"></span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative overflow-hidden bg-gray-50/50">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-semibold text-gray-900">{t('advice_report')}</h1>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-500">{t('report_reference')}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="group p-2 text-gray-400 hover:text-[#90A40A] hover:bg-[#E3E8B9]/20 rounded-lg transition-all" title={t('print')}>
              <span className="iconify" data-icon="lucide:printer" data-width="20"></span>
            </button>
            <button onClick={() => window.print()} className="group p-2 text-gray-400 hover:text-[#90A40A] hover:bg-[#E3E8B9]/20 rounded-lg transition-all" title={t('download')}>
              <span className="iconify" data-icon="lucide:download" data-width="20"></span>
            </button>
            <div className="h-4 w-px bg-gray-200 mx-2"></div>
            <a href="#pro-chat" onClick={(e) => { e.preventDefault(); window.navigateTo('pro-chat'); }} className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
            </a>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Report Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-entry">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E3E8B9]/30 border border-[#E3E8B9]/40 text-[#5f6d05] text-xs font-medium mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90A40A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#90A40A]"></span>
                  </span>
                  {t('report_ready')}
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 tracking-tight leading-tight">{t('safety_advice_report')}</h2>
                <p className="text-gray-500 mt-1 text-sm">{t('report_created_for')}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                  <span className="iconify" data-icon="lucide:printer" data-width="16"></span>
                  {t('print')}
                </button>
                <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                  <span className="iconify" data-icon="lucide:download" data-width="16"></span>
                  {t('download')}
                </button>
                <button onClick={() => setShowEmailModal(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                  <span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                  {t('email')}
                </button>
                <a href="#pro-chat" onClick={(e) => { e.preventDefault(); window.navigateTo('pro-chat'); }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#90A40A] text-white shadow-sm shadow-[#90A40A]/20 text-xs font-medium rounded-lg hover:bg-[#7a8b08] transition-all">
                  <span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                  {t('new_consultation')}
                </a>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 animate-entry delay-1">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                  <span className="iconify" data-icon="lucide:clipboard-list" data-width="20"></span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{t('situation_summary')}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('ref_bathroom_fall')}</p>
                  </div>
                  <div className="prose prose-sm prose-gray max-w-none text-gray-600 leading-relaxed">
                    <p>{t('summary_text')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Grid */}
            <div className="grid md:grid-cols-2 gap-6 animate-entry delay-2">
              {/* Critical Actions */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <span className="iconify" data-icon="lucide:shield-alert" data-width="16"></span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('critical_adjustments')}</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-[#90A40A] transition-colors">
                      <div className="w-2 h-2 rounded bg-[#90A40A]"></div>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{t('critical_1')}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-[#90A40A] transition-colors">
                      <div className="w-2 h-2 rounded bg-[#90A40A]"></div>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{t('critical_2')}</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="mt-0.5 w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-[#90A40A] transition-colors">
                      <div className="w-2 h-2 rounded bg-[#90A40A]"></div>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{t('critical_3')}</span>
                  </li>
                </ul>
              </div>

              {/* Recommended Aids */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#E3E8B9]/40 text-[#5f6d05] flex items-center justify-center border border-[#E3E8B9]">
                    <span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('recommended_assistive_devices')}</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-3">
                    <span className="iconify text-[#90A40A] mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
                    <span className="text-sm text-gray-600 leading-snug">{t('device_1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="iconify text-[#90A40A] mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
                    <span className="text-sm text-gray-600 leading-snug">{t('device_2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="iconify text-[#90A40A] mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
                    <span className="text-sm text-gray-600 leading-snug">{t('device_3')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Document Preview */}
            <div className="border-t border-gray-100 pt-8 animate-entry delay-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">{t('generated_document')}</h3>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-8 items-start hover:border-gray-300 transition-colors">
                {/* PDF Visual */}
                <div className="group relative shrink-0 cursor-pointer" onClick={() => window.print()}>
                  <div className="w-[140px] h-[198px] bg-white border border-gray-200 rounded-lg pdf-thumb flex flex-col p-4 overflow-hidden relative z-10">
                    <div className="flex justify-between items-start mb-4 opacity-50">
                      <div className="w-8 h-2 bg-gray-800 rounded-sm"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="space-y-2 mb-4 opacity-30">
                      <div className="w-full h-1 bg-gray-800 rounded-full"></div>
                      <div className="w-2/3 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="space-y-1.5 opacity-20">
                      <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-3/4 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 w-full h-full bg-gray-100 rounded-lg border border-gray-200 -z-0"></div>
                </div>

                {/* Info & Actions */}
                <div className="flex-1 w-full flex flex-col justify-between min-h-[198px]">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">{t('report_filename')}</h4>
                        <p className="text-xs text-gray-500 mt-1">{t('report_size_time')}</p>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
                        {t('finalized')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 max-w-md leading-relaxed">
                      {t('report_description')}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <button onClick={() => window.print()} className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm">
                      <span className="iconify" data-icon="lucide:download" data-width="16"></span>
                      {t('download_pdf')}
                    </button>
                    <button onClick={() => setShowEmailModal(true)} className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:border-[#90A40A] hover:text-[#90A40A] transition-all">
                      <span className="iconify" data-icon="lucide:send" data-width="16"></span>
                      {t('email')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="bg-[#FDFDEA] border border-[#E3E8B9] rounded-lg p-4 flex gap-3 items-start animate-entry delay-3">
              <span className="iconify text-[#90A40A] shrink-0 mt-0.5" data-icon="lucide:info" data-width="18"></span>
              <div className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900 block mb-1">{t('disclaimer')}</strong>
                {t('disclaimer_text')}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="absolute inset-0 modal-backdrop transition-opacity" onClick={() => setShowEmailModal(false)}></div>
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:w-full sm:max-w-lg border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{t('share_advice_report')}</h3>
                <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                  <span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
                </button>
              </div>
              <div className="px-6 py-6 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">{t('recipient_email')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="iconify text-gray-400" data-icon="lucide:mail" data-width="16"></span>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#90A40A] focus:ring-1 focus:ring-[#90A40A] transition-colors"
                      placeholder="client@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">{t('message')}</label>
                  <textarea
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#90A40A] focus:ring-1 focus:ring-[#90A40A] resize-none transition-colors"
                  ></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="cc" className="w-4 h-4 text-[#90A40A] border-gray-300 rounded focus:ring-[#90A40A] cursor-pointer" />
                  <label htmlFor="cc" className="text-xs text-gray-600 cursor-pointer select-none">{t('send_copy_to_record')}</label>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse gap-3">
                <button type="button" onClick={handleSendEmail} className="inline-flex w-full justify-center rounded-lg bg-[#90A40A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#7a8b08] sm:w-auto transition-colors">
                  {t('send')}
                </button>
                <button type="button" onClick={() => setShowEmailModal(false)} className="inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto transition-colors">
                  {t('cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
