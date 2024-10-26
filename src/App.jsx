
import Banner from "./Componets/Banner"
import CartContainer from "./Componets/CartContainer"
import Footer from "./Componets/Footer"
import Header from "./Componets/Header"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  // button container function

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

  // delete player cetagory
  const handleDelete = (id) => {
    toast.warn("Remove player  successfull !");

    const deletePlayer = selectedPlayers.filter((p) => p.id != id);
    setSelectedPlayers(deletePlayer)
  }






  // Choose player category

  const [coin, setCoin] = useState(0)
  const byePlayer = (pr) => {
    if (coin >= pr) {
      const validation = setCoin(coin - pr)
      return (validation)
    } else {
      toast.error(" Don't have available coin. !", {
        position: "top-center",
      });

    }
  }
  // free coin clime 

  const handleCoin = (price) => {
    toast.success("Free Coin add successfull", {
      position: "top-center",


    });
    setCoin(coin + price)
  }

  //  choose button click function

  const handleSelectedPlayers = (player) => {

    const isexist = selectedPlayers.find((p) => p.id == player.id);




    if (isexist) {

      toast.error("player already selected!", { position: "top-center", })
      return
    }


    if (coin <= player.price) {
      toast.error(" Don't have available coin. !", {
        position: "top-center",
      });
      return
    }


    // 6 player validation 

    // if (player.length < 6) {
    //   toast.error("No selection player available. !", {
    //     position: "top-center",
    //   });
    //   return

    // }

    else {
      toast.success(" player Selected successfull", {
        position: "top-center"

      });
      byePlayer(player.price)
      const newPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newPlayers);
    }




  }




  return (
    <div >
      <ToastContainer />
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin} ></Banner>

      <CartContainer
        handleIsActive={handleIsActive}
        isActive={isActive}
        handleSelectedPlayers={handleSelectedPlayers}
        selectedPlayers={selectedPlayers}
        handleDelete={handleDelete}
      ></CartContainer>

      <Footer></Footer>

    </div>
  )
}

export default App
