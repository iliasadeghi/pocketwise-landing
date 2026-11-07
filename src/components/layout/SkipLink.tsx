export function SkipLink() {
  return (
    <a
      href="#main"
      onClick={(e) => {
        // Handled in script so the URL hash (which picks the page) is left alone.
        e.preventDefault();
        const main = document.getElementById('main');
        main?.focus();
        main?.scrollIntoView();
      }}
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-primary px-4 py-3 font-semibold text-primary-fg shadow-lifted transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
