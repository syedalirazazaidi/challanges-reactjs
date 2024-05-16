import { useState } from "react";

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
  const [bgColor, setbgColor] = useState<string>("");
  const [bgId, setbgID] = useState<number>();
  const [moveLeft, setmoveLeft] = useState(0);
  const [moveRight, setmoveRight] = useState(0);

  const listIDClick = (newlist: any, id: number) => {
    const itemToUpdate = items.find((item) => item.id === id);

    if (itemToUpdate) {
      setbgID(itemToUpdate.id);
      setbgColor("red");
    }

    setStateList((prevListMy) => {
      const idExists = prevListMy.some((item) => item.id === id);
      if (!idExists) {
        return [...prevListMy, newlist];
      }
      return prevListMy;
    });
  };
  const movetoLeft = () => {
    setmoveRight(0);
  };
  const movetoRight = () => {
    setmoveRight(1);
  };

  return (
    <div className="flex justify-center gap-5 items-center">
      <div className="bg-gray-200/50 rounded-xl w-[148px] h-60">
        <div className="flex flex-col m-4 gap-4 ">
          <div>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <button
                    className={`${
                      bgId === item.id ? "bg-red-900" : ""
                    } bg-gray-200 w-[90px] py-1  text-[12px] font-semibold text-white m-2 rounded-lg`}
                    onClick={() => listIDClick(item, item.id)}
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
        <button
          className="bg-gray-200 rounded-full w-7 pb-1"
          onClick={movetoRight}
        >
          &laquo;{" "}
        </button>
        <button
          className="bg-gray-200 rounded-full w-7 pb-1"
          onClick={movetoLeft}
        >
          &raquo;{" "}
        </button>
      </div>
      <div className="bg-gray-200/50 rounded-xl w-[148px] h-60">
        <div className="flex flex-col m-4 gap-4 ">
          {moveRight === 1 && (
            <div>
              {listmy.map((item) => {
                return (
                  <div key={item.id}>
                    <button
                      className={` bg-gray-200 w-[90px] py-1  text-[12px] font-semibold text-white m-2 rounded-lg`}
                      onClick={() => listIDClick(item, item.id)}
                    >
                      {item.list}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
