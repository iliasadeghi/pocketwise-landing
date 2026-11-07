/** Simple crest shapes used as placeholder university marks. Inherits the text color. */
export function LogoMark({ index }: { index: number }) {
  const shape = index % 6;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 shrink-0" fill="currentColor">
      {shape === 0 && <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" />}
      {shape === 1 && (
        <>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="12" cy="12" r="3.5" />
        </>
      )}
      {shape === 2 && <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />}
      {shape === 3 && <path fillRule="evenodd" d="M12 2l10 10-10 10L2 12zm0 6l-4 4 4 4 4-4z" />}
      {shape === 4 && (
        <>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z" />
          <path d="M12 6v14" stroke="rgb(var(--bg))" strokeWidth="1.5" />
        </>
      )}
      {shape === 5 && <path d="M4 22V9h3V5h2v4h2V5h2v4h2V5h2v4h3v13h-5v-5a2 2 0 0 0-4 0v5z" />}
    </svg>
  );
}
