import React, { createContext, useContext, useState, useCallback } from 'react';

const ConfirmDialogContext = createContext();

export const useConfirmDialog = () => {
  const context = useContext(ConfirmDialogContext);
  if (!context) {
    throw new Error('useConfirmDialog must be used within a ConfirmDialogProvider');
  }
  return context;
};

export const ConfirmDialogProvider = ({ children }) => {
  const [dialog, setDialog] = useState(null);

  const confirm = useCallback((options) => {
    return new Promise((resolve) => {
      setDialog({
        title: options.title || 'Confirm',
        message: options.message || 'Are you sure?',
        confirmText: options.confirmText || 'Confirm',
        cancelText: options.cancelText || 'Cancel',
        type: options.type || 'warning', // 'warning', 'danger', 'info'
        onConfirm: () => {
          setDialog(null);
          resolve(true);
        },
        onCancel: () => {
          setDialog(null);
          resolve(false);
        },
      });
    });
  }, []);

  return (
    <ConfirmDialogContext.Provider value={{ confirm }}>
      {children}
      {dialog && <ConfirmDialog dialog={dialog} />}
    </ConfirmDialogContext.Provider>
  );
};

const ConfirmDialog = ({ dialog }) => {
  const { title, message, confirmText, cancelText, type, onConfirm, onCancel } = dialog;

  const buttonColors = {
    warning: 'bg-yellow-500 hover:bg-yellow-600',
    danger: 'bg-red-500 hover:bg-red-600',
    info: 'bg-blue-500 hover:bg-blue-600',
    success: 'bg-emerald-500 hover:bg-emerald-600',
  };

  const iconColors = {
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    info: 'text-blue-500',
    success: 'text-emerald-500',
  };

  const icons = {
    warning: '⚠',
    danger: '✕',
    info: 'ℹ',
    success: '✓',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1c1c1c] rounded-xl shadow-2xl border border-white/10 p-6 max-w-md w-full mx-4 animate-scale-in">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-3xl ${iconColors[type]}`}>{icons[type]}</span>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        
        <p className="text-gray-300 mb-6">{message}</p>
        
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg ${buttonColors[type]} text-white font-medium transition-colors`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialogProvider;
