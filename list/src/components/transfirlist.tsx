import { ListEnd } from "lucide-react";
import React, { useState } from "react";

interface ITemType {
  list: string;
  id: number;
}

export default function Transfirlist() {
  const items: ITemType[] = [
    { list: "first", id: 1 },
    { list: "second", id: 2 },
    { list: "third", id: 3 },
    { list: "fourth", id: 4 },
  ];

  const [listmy, setStateList] = useState<ITemType[]>([]);
  const [color, setColor] = useState("");
  const listID = (newlist: any) => {
    setStateList([...listmy, newlist]);
    // setStateList((prev: any) => {
    //   return [...prev, newlist];
    // });
  };
  console.log(listmy);

  return (
    <div className="flex justify-center gap-5 items-center">
      <div className="bg-gray-200/50 rounded-xl w-[148px] h-60">
        <div className="flex flex-col m-4 gap-4 ">
          <div>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <button
                    className="bg-gray-200 w-[90px] text-[12px] font-semibold text-black m-2 rounded-lg"
                    onClick={() => listID(item)}
                  >
                    {item.list}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <button className="bg-gray-200 rounded-full w-7 pb-1">&laquo; </button>
        <button className="bg-gray-200 rounded-full w-7 pb-1">&raquo; </button>
      </div>
      <div className="bg-gray-200/50 rounded-xl w-[148px] h-60"></div>
    </div>
  );
}
