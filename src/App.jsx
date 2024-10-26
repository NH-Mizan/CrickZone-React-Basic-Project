
import Banner from "./Componets/Banner"
import CartContainer from "./Componets/CartContainer"
import Footer from "./Componets/Footer"
import Header from "./Componets/Header"
import { useState } from 'react'



function App() {


  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"


  })
  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      })

    }
    else {
      setIsActive({
        cart: false,
        status: "select"
      })
    }
  }




  // selected player section

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayers = (player) => {
    const isexist = selectedPlayers.find((p) => p.id == player.id);


    if (isexist) {
      alert("hoiche vai")
    }
    else {

      const newPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newPlayers);
    }



  }





  
  const [coin, setCoin] = useState(0)
  const handleCoin =(price)=>{
    setCoin(coin + price)
  }



  return (
    <div >
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin} ></Banner>

      <CartContainer
        handleIsActive={handleIsActive}
        isActive={isActive}
        handleSelectedPlayers={handleSelectedPlayers}
        selectedPlayers={selectedPlayers}
      ></CartContainer>

      <Footer></Footer>

    </div>
  )
}

export default App
