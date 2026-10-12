import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
        <span className="material-symbols-outlined text-[36px]">build_circle</span>
      </div>
      <h1 className="text-4xl font-bold font-display text-on-surface mb-2">Page Not Found</h1>
      <p className="text-secondary max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary-container hover:bg-tertiary text-on-primary px-6 py-3 rounded-lg font-bold transition-all shadow-sm active:scale-[0.98]"
      >
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        <span>Return Home</span>
      </Link>
    </div>
  );
}
