import {useState, useEffect} from 'react'

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState<number>()
  const [hairColor, setHairColor] = useState('')

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError(true)
    } else {
      setNameInputError(false)
    }
  }, [name])

  return (
    <>
      <h2>Controlled Form</h2>
      <form>
        {nameInputError && <p>Name must be at least 2 characters long</p>}
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          name="hairColor"
          type="text"
          placeholder="Hair color"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}
