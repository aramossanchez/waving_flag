'use client';

import useFlagGeeksHubs from "./FlagGeeksHubs.hook";
import style from './FlagGeeksHubs.module.css';

export default function FlagGeeksHubsComponent() {

  const { columns, rows } = useFlagGeeksHubs();

  return (
    <div className="w-[90vw] h-[70vw] lg:w-[1024px] lg:h-[768px] flex flex-col items-center justify-center py-[10px] bg-black">
      {rows.map((row) => {
        console.log(row);
        return (
          <div key={`row-${row}`} className={`relative flex flex-row w-full flex-1`}>
            {columns.map((column) => {
              const isRedBackground = (
                ((+column > 10 && +column < 30) && (+row === 5)) ||
                (+column === 11 && (+row > 5 && +row < 12)) ||
                (+column === 29 && (+row > 5 && +row < 12)) ||
                ((+column > 10 && +column < 19) && (+row === 12)) ||
                ((+column > 22 && +column < 30) && (+row === 12)) ||
                (+column === 19 && +row === 13) ||
                (+column === 20 && +row === 14) ||
                (+column === 21 && +row === 15) ||
                (+column === 22 && (+row < 16 && +row > 11)) ||
                (+row === 8 && (+column > 17 && +column < 23)) ||
                (+row === 9 && (+column > 18 && +column < 22)) ||
                (+row === 10 && +column === 20)
              );
              const backgroundClass = isRedBackground ? 'bg-red-500' : 'bg-slate-200';
              return (
                <div
                  key={`row-${row}-column-${column}`}
                  className={`h-full relative flex-1 ${backgroundClass}
                  ${row === '1' && column === '1' ? 'rounded-tl-3xl' : ''} ${row === rows.length.toString() && column === columns.length.toString() ? 'rounded-br-3xl' : ''} ${row === rows.length.toString() && column === '1' ? 'rounded-bl-3xl' : ''} ${row === '1' && column === columns.length.toString() ? 'rounded-tr-3xl' : ''}
                  `}
                  style={{
                    animationName: style.oscilate,
                    animationDuration: '1s',
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