import React from 'react'

export const UncontrolledForm = () => {
  const nameInput = React.createRef<HTMLInputElement>()
  const ageInput = React.createRef<HTMLInputElement>()
  const hairColorInput = React.createRef<HTMLInputElement>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = nameInput.current?.value
    const age = ageInput.current?.value
    const hairColor = hairColorInput.current?.value
    console.log({ name, age, hairColor })
  }

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" ref={nameInput} />
        <input name="age" type="number" placeholder="Age" ref={ageInput} />
        <input name="hairColor" type="text" placeholder="Hair color" ref={hairColorInput} />
        <input type="submit" placeholder="Submit" />
      </form>
    </>
  )
}
