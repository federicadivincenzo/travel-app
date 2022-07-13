import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

function App() {
  console.log(data)
  const cards = data.map(card => {
    return(
        <Card
           {...card}
        />
    )
  })

  return (
      <>
          <Navbar />
          {cards}
      </>
  )
}

export default App;
