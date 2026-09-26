import React from "react";
import Librarycard from "./Librarycard";
import { Workout } from "@/types/workouttype";

const getData = async (): Promise<Workout[]> => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};

const Library = async () => {
    const libData = await getData();

    return (
        <section id="library" className="max-w-7xl mx-auto px-6 pb-16 scroll-mt-24">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white">
                    The Library
                </h2>
                <p className="text-zinc-400 text-sm mt-2">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {libData.slice(0, 12).map((item: Workout) => {
                    return <Librarycard key={item.id} workout={item} />;
                })}
            </div>
        </section>
    );
};

export default Library;