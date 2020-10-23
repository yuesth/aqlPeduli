import React from "react"

export default function DogTemplate({ pageContext: { dog } }) {
  return (
    <section>
      {dog.name} - {dog.breed}
    </section>
  )
}