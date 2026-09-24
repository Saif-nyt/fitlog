export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <div className="w-12 h-12 border-4 border-[#ccff00] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-zinc-400 font-semibold text-sm">Loading workouts...</p>
    </div>
  );
}