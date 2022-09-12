import clsx from 'clsx'
import Slider from '@mui/material/Slider';

const Rwd = () => {
  const textClassnames = clsx(
    "text-9xl",
    "sm:text-5xl sm:hover:text-slate-500",
    "xs:text-2xl"
  )
  return (
    <div className="mx-4 h-screen text-center">
      <div
        className={clsx(
          "text-9xl",
          "sm:text-5xl sm:hover:text-slate-500",
          "xs:text-2xl"
        )}
      >
        {"文字測試(RWD)"}
      </div>
      <div
        className={textClassnames}
      >
        {"文字測試(RWD)"}
      </div>

      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-teal-600" />
    </div>

  )
}

export default Rwd