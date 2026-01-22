const ProChat = ({ t, isLoggedIn = true }) => {
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
          <a href="#pro-chat" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-[#E3E8B9]/40 text-[#5f6d05]">
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
                <span className="text-xs font-medium text-gray-900">{t('org_name')}</span>
                <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">PRO</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">{t('org_branding_active')}</p>
            </div>
          )}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#90A40A] to-[#E3E8B9] flex items-center justify-center text-white text-xs font-medium">
              {isLoggedIn ? 'JD' : 'DA'}
            </div>
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
                <h1 className="text-lg font-medium text-gray-900 tracking-tight">{t('consultation_session')}</h1>
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

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Bot Message 1 */}
              <div className="flex gap-4 fade-in" style={{animationDelay: '0.1s'}}>
                <div className="w-8 h-8 rounded-full bg-white border border-[#E3E8B9] flex items-center justify-center shrink-0 shadow-sm p-1">
                  <img src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png" className="object-contain w-full h-full" />
                </div>
                <div className="space-y-2 max-w-[85%]">
                  <div className="text-sm font-medium text-gray-900">Freya</div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-5 py-3 text-sm text-gray-700 shadow-sm leading-relaxed">
                    {t('pro_chat_welcome')}
                    <br/><br/>
                    {t('pro_chat_question')}
                  </div>
                </div>
              </div>

              {/* User Message 1 */}
              <div className="flex gap-4 flex-row-reverse fade-in" style={{animationDelay: '0.3s'}}>
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0 text-white text-xs">J</div>
                <div className="space-y-2 max-w-[85%]">
                  <div className="bg-[#F3F4F6] text-gray-900 rounded-2xl rounded-tr-none px-5 py-3 text-sm leading-relaxed">
                    {t('pro_chat_user_1')}
                  </div>
                </div>
              </div>

              {/* Bot Message 2 */}
              <div className="flex gap-4 fade-in" style={{animationDelay: '0.5s'}}>
                <div className="w-8 h-8 rounded-full bg-white border border-[#E3E8B9] flex items-center justify-center shrink-0 shadow-sm p-1">
                  <img src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png" className="object-contain w-full h-full" />
                </div>
                <div className="space-y-2 max-w-[85%]">
                  <div className="text-sm font-medium text-gray-900">Freya</div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-5 py-3 text-sm text-gray-700 shadow-sm leading-relaxed">
                    {t('pro_chat_bot_2')}
                    <br/><br/>
                    {t('pro_chat_bot_2_intro')}
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>{t('pro_chat_question_1')}</li>
                      <li>{t('pro_chat_question_2')}</li>
                      <li>{t('pro_chat_question_3')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Message 2 */}
              <div className="flex gap-4 flex-row-reverse fade-in" style={{animationDelay: '0.7s'}}>
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0 text-white text-xs">J</div>
                <div className="space-y-2 max-w-[85%]">
                  <div className="bg-[#F3F4F6] text-gray-900 rounded-2xl rounded-tr-none px-5 py-3 text-sm leading-relaxed">
                    {t('pro_chat_user_2')}
                  </div>
                </div>
              </div>

              {/* Bot Message 3 - Final */}
              <div className="flex gap-4 fade-in" style={{animationDelay: '0.9s'}}>
                <div className="w-8 h-8 rounded-full bg-white border border-[#E3E8B9] flex items-center justify-center shrink-0 shadow-sm p-1">
                  <img src="https://static.wixstatic.com/media/6817ef_3336305b945b470c937ead723c123c4f~mv2.png/v1/fill/w_367,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freya%20%20(2).png" className="object-contain w-full h-full" />
                </div>
                <div className="space-y-2 max-w-[85%]">
                  <div className="text-sm font-medium text-gray-900">Freya</div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-5 py-3 text-sm text-gray-700 shadow-sm leading-relaxed">
                    {t('pro_chat_bot_3')}
                    <br/><br/>
                    <strong>{t('critical_adjustments')}:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>{t('critical_1')}</li>
                      <li>{t('critical_2')}</li>
                      <li>{t('critical_3')}</li>
                    </ul>
                    <br/>
                    <strong>{t('recommended_improvements')}:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>{t('recommended_1')}</li>
                      <li>{t('recommended_2')}</li>
                      <li>{t('recommended_3')}</li>
                      <li>{t('recommended_4')}</li>
                      <li>{t('recommended_5')}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-5 py-3 text-sm text-gray-700 shadow-sm leading-relaxed">
                    {t('anything_to_add')}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 hover:border-[#90A40A] hover:text-[#90A40A] transition-colors shadow-sm">
                      {t('add_something')}
                    </button>
                    <a
                      href="#pro-report"
                      onClick={(e) => { e.preventDefault(); window.navigateTo('pro-report'); }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#90A40A] hover:bg-[#7a8b08] text-white text-xs font-medium transition-colors shadow-sm"
                    >
                      <span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
                      {t('generate_report')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 pt-2 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t('type_message')}
                  className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#90A40A] focus:border-[#90A40A] block w-full pl-4 pr-12 py-3.5 shadow-sm transition-shadow focus:shadow-md outline-none"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <div className="bg-[#90A40A] hover:bg-[#7a8b08] text-white rounded-lg p-2 transition-colors">
                    <span className="iconify" data-icon="lucide:arrow-up" data-width="18" data-stroke-width="2"></span>
                  </div>
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">{t('freya_pro_footer')}</p>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="w-full md:w-80 bg-white border-l border-gray-100 p-6 flex flex-col gap-6 overflow-y-auto">
            {/* Assessment Summary */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-50 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-sm font-medium text-gray-900 tracking-tight">{t('assessment_summary')}</h3>
              </div>
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="iconify text-red-500 w-5 h-5" data-icon="lucide:alert-circle" data-stroke-width="1.5"></span>
                      <span className="text-sm font-medium text-gray-900">{t('critical_items')}</span>
                    </div>
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F9FAF4] rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="iconify text-[#90A40A] w-5 h-5" data-icon="lucide:plus-circle" data-stroke-width="1.5"></span>
                      <span className="text-sm font-medium text-gray-900">{t('recommended')}</span>
                    </div>
                    <span className="text-xl font-bold text-[#90A40A]">5</span>
                  </div>
                </div>

                <a
                  href="#pro-report"
                  onClick={(e) => { e.preventDefault(); window.navigateTo('pro-report'); }}
                  className="mt-4 w-full bg-[#90A40A] hover:bg-[#7a8b08] text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                  {t('generate_report')}
                </a>
              </div>
            </div>

            {/* Discussed Topics */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">{t('discussed_topics')}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="mt-0.5 text-[#90A40A]">
                    <span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">{t('topic_1')}</p>
                    <p className="text-[10px] text-gray-500">{t('topic_1_sub')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="mt-0.5 text-[#90A40A]">
                    <span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">{t('topic_2')}</p>
                    <p className="text-[10px] text-gray-500">{t('topic_2_sub')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="mt-0.5 text-[#90A40A]">
                    <span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">{t('topic_3')}</p>
                    <p className="text-[10px] text-gray-500">{t('topic_3_sub')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branding */}
            <div className="mt-auto">
              <div className="p-4 rounded-xl bg-[#E3E8B9]/20 border border-[#E3E8B9]/50">
                <div className="flex items-center gap-2 mb-2 text-[#5f6d05]">
                  <span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
                  <span className="text-xs font-semibold tracking-wide">{t('org_branding_title')}</span>
                </div>
                <p className="text-[11px] text-gray-600 mb-3 leading-snug">
                  {t('org_branding_desc')} <span className="font-medium text-gray-900">{t('org_name')}</span>.
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#E3E8B9] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#90A40A]"></div>
                  <span className="ml-2 text-[10px] font-medium text-gray-600">{t('active')}</span>
                </label>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
