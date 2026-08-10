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
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-white focus:outline-none text-sm font-mono transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, id, className = '', ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-white focus:outline-none text-sm font-mono transition-colors resize-none ${className}`}
        {...props}
      />
    </div>
  );
}

