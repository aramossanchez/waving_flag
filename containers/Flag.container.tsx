'use client';

import FlagGeeksHubsComponent from "@/components/FlagGeeksHubs/FlagGeeksHubs.component";
import FlagPrideComponent from "@/components/FlagPride/FlagPride.component";
import { IconInnerShadowTopLeftFilled, IconInnerShadowTopLeft } from "@tabler/icons-react";
import { useState } from "react";

export default function FlagContainer() {

  const [activeFlag, setActiveFlag] = useState('LGTBIQ+');

  return (
    <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black">
      <article className="absolute top-0 left-0 border-2 p-5 gap-3 flex flex-row items-center justify-center border-slate-200 border-l-0 text-white bg-black z-10">
        <div className="flex flex-column items-center justify-center gap-2 cursor-pointer" onClick={() => setActiveFlag('LGTBIQ+')}>
          {activeFlag === 'LGTBIQ+' ?
            <IconInnerShadowTopLeftFilled size={18} color='#fff' />
            :
            <IconInnerShadowTopLeft size={18} color='#fff' />}
          <span>LGTBIQ+</span>
        </div>
        <div className="flex flex-column items-center justify-center gap-2 cursor-pointer" onClick={() => setActiveFlag('GeeksHubs')}>
          {activeFlag === 'GeeksHubs' ?
            <IconInnerShadowTopLeftFilled size={18} color='#fff' />
            :
            <IconInnerShadowTopLeft size={18} color='#fff' />}
          <span>GeeksHubs</span>
        </div>
      </article>
      {activeFlag === 'LGTBIQ+' &&
        <FlagPrideComponent />
      }
      {activeFlag === 'GeeksHubs' &&
        <FlagGeeksHubsComponent />
      }
    </main>
  );
}