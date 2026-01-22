const SettingsModal = ({ isOpen, onClose, currentLanguage, onLanguageChange, isLoggedIn, onLoggedInChange, t }) => {
  const { useState } = React;

  if (!isOpen) return null;

  const routes = [
    { name: 'Patient Landing', path: 'patient', flow: 'Patient Flow' },
    { name: 'Patient Chat Start', path: 'patient-chat-start', flow: 'Patient Flow' },
    { name: 'Patient Chat', path: 'patient-chat', flow: 'Patient Flow' },
    { name: 'Professional Landing', path: 'pro', flow: 'Professional Flow' },
    { name: 'Professional Login', path: 'pro-login', flow: 'Professional Flow' },
    { name: 'Professional Chat Start', path: 'pro-chat-start', flow: 'Professional Flow' },
    { name: 'Professional Chat', path: 'pro-chat', flow: 'Professional Flow' },
    { name: 'Professional Report', path: 'pro-report', flow: 'Professional Flow' },
  ];

  const groupedRoutes = routes.reduce((acc, route) => {
    if (!acc[route.flow]) {
      acc[route.flow] = [];
    }
    acc[route.flow].push(route);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center modal-backdrop" onClick={onClose}>
      <div
        className="modal-content bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-2xl font-semibold text-[#262626]">{t('settings_title')}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center"
            aria-label={t('settings_close')}
          >
            <span className="iconify w-5 h-5" data-icon="lucide:x" data-stroke-width="2"></span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {/* Language Selection */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">
              {t('settings_language')}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => onLanguageChange('nl')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentLanguage === 'nl'
                    ? 'bg-[#90A40A] text-white shadow-md'
                    : 'bg-neutral-100 text-[#666] hover:bg-neutral-200'
                }`}
              >
                Nederlands
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentLanguage === 'en'
                    ? 'bg-[#90A40A] text-white shadow-md'
                    : 'bg-neutral-100 text-[#666] hover:bg-neutral-200'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Logged In Toggle */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">
              {t('settings_logged_in')}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => onLoggedInChange(true)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  isLoggedIn
                    ? 'bg-[#90A40A] text-white shadow-md'
                    : 'bg-neutral-100 text-[#666] hover:bg-neutral-200'
                }`}
              >
                {t('settings_logged_in_yes')}
              </button>
              <button
                onClick={() => onLoggedInChange(false)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  !isLoggedIn
                    ? 'bg-[#90A40A] text-white shadow-md'
                    : 'bg-neutral-100 text-[#666] hover:bg-neutral-200'
                }`}
              >
                {t('settings_logged_in_no')}
              </button>
            </div>
          </div>

          {/* Route Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">
              {t('settings_routes')}
            </h3>
            <div className="space-y-6">
              {Object.entries(groupedRoutes).map(([flowName, flowRoutes]) => (
                <div key={flowName}>
                  <h4 className="text-xs font-semibold text-[#90A40A] uppercase tracking-wider mb-2">
                    {flowName}
                  </h4>
                  <div className="space-y-2">
                    {flowRoutes.map((route) => (
                      <button
                        key={route.path}
                        onClick={() => {
                          window.navigateTo(route.path);
                          onClose();
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg bg-neutral-50 hover:bg-[#90A40A]/10 text-[#262626] hover:text-[#90A40A] transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium">{route.name}</span>
                        <span
                          className="iconify w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          data-icon="lucide:arrow-right"
                          data-stroke-width="2"
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
