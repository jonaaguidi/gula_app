'use client'
import { Hero, Navbar  } from "./components";

const App = () => {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0" >
      </div>
    </div>
  )
}

export default App;