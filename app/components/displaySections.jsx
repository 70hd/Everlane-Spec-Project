import React from 'react'
import Section from './section'

const DisplaySection = ({SECTIONS}) => {
  return (
    <>
        {SECTIONS.map((section, index) => (
        <Section
          key={index}
          image={section.image}
          value={section.value}
          alt={section.alt}
          title={section.title}
          description={section.description}
        />
      ))}
    </>

  )
}

export default DisplaySection