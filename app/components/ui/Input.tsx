import { type ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

interface TextareaProps extends ComponentProps<'textarea'> {
  label: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-surface-light dark:bg-surface-dark-alt border border-border-light dark:border-border-dark rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all outline-none ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, id, className = '', ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-surface-light dark:bg-surface-dark-alt border border-border-light dark:border-border-dark rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all outline-none resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
