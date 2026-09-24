
import Library from "./Library";
import Image from "next/image";
import Link from "next/link";

const Librarycard = ({ workout }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]">

      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-bold uppercase text-[#ccff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="text-xl font-black uppercase text-white">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4 text-sm text-zinc-400">
          <span>
            ⏱ {workout.duration} min
          </span>

          <span>
            🔥 {workout.caloriesBurned} kcal
          </span>

          <span>
            ★ {workout.rating}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Librarycard;

