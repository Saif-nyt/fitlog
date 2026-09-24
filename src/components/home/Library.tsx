import React from "react";
import Librarycard from "./Librarycard";
import { Workout } from "@/types/workouttype";

const getData = async (): Promise<Workout[]> => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await response.json();

    console.log(data);

    return data;
};

const Library = async () => {
    const libData = await getData();

    console.log(libData);

    return (
        <div className="container mx-auto grid grid-cols-3 gap-6">
           
            {libData.slice(0, 12).map((item: Workout) => {
          return <Librarycard key={item.id} workout={item} />;
        })}
        </div> 
    );
};

export default Library;