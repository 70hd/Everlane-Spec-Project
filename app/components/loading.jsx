import React from 'react'

const Loading = ({number, col}) => {
  return (
    <section className={`h-fit flex ${col? "flex-col" : "md:flex-row flex-col"} gap-9 flex-wrap w-full`}>
    {Array(number)
      .fill("")
      .map((_, i) => (
        <div className="skeleton skeleton-text" key={i} />
      ))}
  </section>
  )
}

export default Loading