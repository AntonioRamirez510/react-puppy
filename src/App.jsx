import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {
  const [puppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  const clickPup = (puppy) => {
    setFeatPupId(puppy.id)
  }

  return (
    <>
    <h1>Puppies!</h1>
    <section className="App">
      {puppies.map(puppy => {
        return <p onClick={()=>clickPup(puppy)}
        key={puppy.id}
        >
        {puppy.name}
        </p>
      })}
      {/* conditional rendering for FeatPup */}
      { featPupId &&
      <div>
      <h2>Name: {featuredPup.name}</h2>
         <ul>
          <li> age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
          </ul>
      </div>
      }
    </section>
    </>
  )
}

export default App
