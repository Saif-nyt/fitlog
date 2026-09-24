import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-7xl font-black text-[#ccff00] mb-2">404</h1>
      <h2 className="text-2xl font-extrabold uppercase mb-2">PAGE NOT FOUND</h2>
      <p className="text-zinc-400 mb-6 max-w-md text-sm">
        The lift or routine you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-extrabold px-6 py-3 rounded hover:bg-lime-400 transition text-sm uppercase"
      >
        Go To Workouts
      </Link>
    </div>
  );
}
