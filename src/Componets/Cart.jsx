import PropTypes from "prop-types"
import { FaUser } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";




const Cart = ({ player, handleSelectedPlayers }) => {
    const { img, name, country, rating, price, role, battingType, bowlingType } = player;

    return (
        <div className="">
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" className="h-52 w-full" />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title font-bold text-2xl mb-4"><FaUser />{name}</h2>
                        <div className="grid grid-cols-2 items-center mb-4">
                            <p className="text-lg flex items-center gap-2"><FaFlag /> {country}</p>
                            <button className="btn">{role}</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="grid grid-cols-2 text-lg mt-6 ">
                        <p className="font-bold">Rating  </p>
                        <p>{rating}</p>

                    </div>
                    <div className="grid grid-cols-2 text-lg mt-6 ">
                        <p >{battingType}</p>
                        <p> {bowlingType}</p>

                    </div>
                    <div className="grid grid-cols-2 text-lg mt-6 items-center ">
                        <p>Price :$ {price}</p>
                        <button onClick={() => handleSelectedPlayers(player)} className="btn btn-outline btn-accent">Choose Player</button>


                    </div>



                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>-

        </div>
    );
};
Cart.propTypes = {
    handleSelectedPlayers: PropTypes.func,
    player: PropTypes.array
}

export default Cart;