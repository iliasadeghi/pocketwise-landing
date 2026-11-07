import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useId, useRef, useState, type FormEvent } from 'react';
import { privacyLink } from '../content';
import { submitWaitlist } from '../lib/submitWaitlist';
import { validateEmail } from '../lib/validateEmail';
import { cn } from '../lib/cn';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistFormProps {
  label: string;
  submitLabel: string;
  note: string;
  className?: string;
}

export function WaitlistForm({ label, submitLabel, note, className }: WaitlistFormProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateEmail(email);
    setTouched(true);
    setFieldError(error);
    if (error) {
      inputRef.current?.focus();
      return;
    }

    setStatus('loading');
    const result = await submitWaitlist(email);
    setStatus(result.ok ? 'success' : 'error');
    setMessage(result.message);
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className={cn(
          'flex items-start gap-3 rounded-2xl border border-success/30 bg-success/10 p-4 text-left',
          className,
        )}
      >
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
        <div>
          <p className="font-semibold text-fg">{message}</p>
          <p className="mt-1 text-sm text-muted">
            We’ll let <span className="font-medium text-fg">{email.trim()}</span> know as soon as
            your spot opens up.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className={cn('w-full', className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Input
          ref={inputRef}
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@uni.ac.uk"
          label={label}
          value={email}
          error={touched ? fieldError : null}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touched) setFieldError(validateEmail(e.target.value));
            if (status === 'error') setStatus('idle');
          }}
          onBlur={() => {
            if (email) {
              setTouched(true);
              setFieldError(validateEmail(email));
            }
          }}
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="sm:mt-7"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Joining…
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted">
        {note}{' '}
        <a
          href={privacyLink.href}
          className="rounded-sm underline underline-offset-4 hover:text-fg"
        >
          {privacyLink.label}
        </a>
      </p>
      <div aria-live="polite">
        {status === 'error' && (
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-danger" role="alert">
            <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
