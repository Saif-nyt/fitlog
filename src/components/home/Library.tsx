import React from "react";
import Librarycard from "./Librarycard";

const getData = async () => {
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
           
            {libData.slice(0, 12).map((item: { id: number | string }) => {
          return <Librarycard key={item.id} workout={item} />;
        })}
        </div> 
    );
};

export default Library;