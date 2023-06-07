import style from './Loader.module.css';

export default function Loader() {
  return (
    <main className="z-10 absolute w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black/80">
      <div className={`${style.loader}`}></div>
    </main>
  )
}