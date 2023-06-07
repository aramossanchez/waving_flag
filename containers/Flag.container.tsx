'use client';

import useFlag from "./Flag.hook";
import style from './Flag.module.css';
import Loader from '../components/Loader/Loader';

export default function FlagContainer() {

  const { columns, rows, loading } = useFlag();

  return (
    <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black">
      {loading && <Loader />}
      <div className="w-[90vw] h-[70vw] lg:w-[1024px] lg:h-[768px] flex flex-col items-center justify-center py-[10px] bg-black">
        {rows.map((row) => {
          return (
            <div key={`row-${row}`} className={`relative flex flex-row w-full flex-1`}>
              {columns.map((column) => {
                return (
                  <div
                    key={`row-${row}-column-${column}`}
                    className={`h-full relative flex-1 ${style[`row-${row}`]} ${style[`column-${column}`]} ${style.column}`}
                    style={{
                      animationName: style.oscilate,
                      animationDuration: '1.5s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${column.length <= 1 ? `0.${column}s` : `${column[0]}.${column[1]}s`}`,
                    }}
                  >
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </main>
  );
}