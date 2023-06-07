'use client';

import useFlag from "./Flag.hook";
import style from './Flag.module.css';

export default function FlagContainer() {

  const { columns, rows } = useFlag();

  return (
    <main className="w-[1024px] h-[768px] flex flex-col items-center justify-center py-[10px]">
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
    </main>
  );
}