import clsx from 'clsx'

const Rwd = () => {
  const textClassnames = clsx(
    "text-9xl",
    "sm:text-5xl sm:hover:text-slate-500",
    "xs:text-2xl"
  )
  return (
    <div className="mx-4 h-screen flex justify-center">
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
    </div>
  )
}

export default Rwd