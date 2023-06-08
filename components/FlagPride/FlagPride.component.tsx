'use client';

import useFlagPride from "./FlagPride.hook";
import style from './FlagPride.module.css';

export default function FlagPrideComponent() {

  const { columns, rows } = useFlagPride();

  return (
    <div className="w-[90vw] h-[70vw] lg:w-[1024px] lg:h-[768px] flex flex-col items-center justify-center py-[10px] bg-black">
      {rows.map((row) => {
        console.log(row);
        return (
          <div key={`row-${row}`} className={`relative flex flex-row w-full flex-1`}>
            {columns.map((column) => {
              return (
                <div
                  key={`row-${row}-column-${column}`}
                  className={`h-full relative flex-1 ${style[`row-${row}`]} ${style[`column-${column}`]} ${style.column} ${row === '1' && column === '1' ? 'rounded-tl-3xl' : ''} ${row === rows.length.toString() && column === columns.length.toString() ? 'rounded-br-3xl' : ''} ${row === rows.length.toString() && column === '1' ? 'rounded-bl-3xl' : ''} ${row === '1' && column === columns.length.toString() ? 'rounded-tr-3xl' : ''}`}
                  style={{
                    animationName: style.oscilate,
                    animationDuration: '1.5s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: `${column.length <= 1 ? `0.${column}s` : `${column[0]}.${column[1]}s`}`
                  }}
                >
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}