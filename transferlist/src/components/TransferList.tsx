import { useState } from "react";
import { data } from "../data";

export const TransferList = () => {
  const [getdata, setData] = useState(data);
  const [moveRight, setMoveRight] = useState<any>([]);
  const [dummy, setdummy] = useState([]);

  const [moveLeft, setMoveLeft] = useState();
  const [changeColor, setChangeColor] = useState();
  const [leftTrue, setleftTrue] = useState(false);
 const [newstate, setNewData] = useState([])
  interface TYPEDATA {
    title: string;
    id: number;
    checked: boolean;
  }
  [];

  const handleSelected = (id: number) => {
    const items: any = getdata.map((getdat: TYPEDATA) => {
      if (getdat.id === id) {
        return {
          ...getdat,
          checked: true,
         
        };
       

       
        // setMoveRight((prev): any => [...prev, getdat]);
      } else {
        getdat;

        // setMoveLeft(((prev): any => [...prev, getdat]));
      }
    });
    console.log('%cTransferList.tsx line:30 items', 'color: #007acc;', items);

    const filteItem:any = items.filter((item: TYPEDATA) => item);
    console.log('%cTransferList.tsx line:41 filteItem', 'color: #007acc;', filteItem);
    setdummy(filteItem)
    setNewData(()=>{return{...dummy,filteItem}})
    // setMoveRight(()=>{return{...dummy,filteItem}}); 
 };
    function leftBtn(arg0: string): void {
        if(arg0==='left'){
            setleftTrue(true)
        }
    }

    console.log('%cTransferList.tsx line:43 )))))))))', 'newstate_______: #007acc;', newstate);
  return (
    <div className="bg-slate-100 w-1/2 mx-auto container p-4 rounded-lg">
      <h2 className="font-bold flex justify-center ">Transfer List</h2>
      <div className="">
        <div className="flex justify-center gap-10 mt-5 py-4 ">
          <div className="bg-gray-300 rounded-md w-1/4 h-[400px] ">
            {getdata.map(({ title, id }) => {
              return (
                <div
                  key={id}
                  className={`border-2  m-2 bg-white  rounded-md items-center text-center bg-${changeColor}-600`}
                >
                  <button
                    onClick={() => handleSelected(id)}
                    className={`hover:cursor-pointer text-[13px] py-1 text-slate-600 `}
                  >
                    {" "}
                    {title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2  items-center">
            <button
              onClick={() => leftBtn("left")}
              className="border-4 text-red-800/70 py-2 px-2 rounded-3xl"
            >
              {" "}
              left
            </button>
            <button onClick={() => leftBtn("right")} className="border-4 text-red-800/70 py-2 px-1 rounded-3xl">
              {" "}
              right
            </button>
          </div>
          <div className="bg-gray-300 rounded-md w-1/4 h-[400px] ">


            {leftTrue && (
                 <div className="bg-gray-300 rounded-md w-1/4 h-[400px] ">
                 {moveRight.map((right:any) => {
                    console.log('%cTransferList.tsx line:85 title', 'color: #007acc;', right[0].id);
                   return (
                     <div
                       key={right.id}
                       className={`border-2  m-2 bg-white  rounded-md items-center text-center bg-${changeColor}-600`}
                     >
                       <button
                        //  onClick={() => handleSelected(id)}
                         className={`hover:cursor-pointer text-[13px] py-1 text-slate-600 `}
                       >
                         {" "}
                         {right?.title}
                       </button>
                     </div>
                   );
                 })}
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
