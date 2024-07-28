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
    <br></br>
    <h3>Go ahead! Click a dog!</h3>
    <section className="App">
      {puppies.map(puppy => {
        return <p onClick={()=>clickPup(puppy)}
        key={puppy.id}
        >
        {puppy.name}
        </p>
      })}
      {/* conditional rendering for FeatPup */}
    </section>
    <br></br>
      { featPupId &&
      <>
      <h3>Check out these details about {featuredPup.name}</h3>
      <div>
      <h2>{featuredPup.name}</h2>
      <section id="featPupDetails">
        <ul id="age">
          <li>age: </li>
          <li>{featuredPup.age}</li>
        </ul>
         <ul id="email">
          <li>email: </li>
          <li>{featuredPup.email}</li>
          </ul>
      </section>
      </div>
      </>
      }
    </>
  )
}

export default App
