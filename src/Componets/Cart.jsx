import PropTypes from "prop-types"

const Cart = ({ player,handleSelectedPlayers }) => {
    const {img, name, country, rating, battingStyle, price,allRounder} = player;
   
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
                   <h2 className="card-title font-bold text-2xl mb-4">{name}</h2>
                   <div className="grid grid-cols-2 items-center">
                   <p className="text-lg">{country}</p>
                   <button className="btn">{allRounder?"All Rounder":"No all rounder"}</button>
                   </div>
                   </div>
                    <hr></hr>
                    <div className="grid grid-cols-2 text-lg mt-6 ">
                    <p className="font-bold">Rating : </p>
                    <p>{rating}</p>

                    </div>
                    <div className="grid grid-cols-2 text-lg mt-6 ">
                    <p className="font-bold">Batting Style :</p>
                    <p> {battingStyle}</p>

                    </div>
                    <div className="grid grid-cols-2 text-lg mt-6 items-center ">
                    <p className="font-bold">Price : {price}</p>
                    <button onClick={()=>handleSelectedPlayers(player)} className="btn btn-outline btn-accent">Choose Player</button>
                    

                    </div>
                   
                    
               
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
            </div>-

        </div>
    );
};
Cart.propTypes={
    handleSelectedPlayers:PropTypes.func,
    player:PropTypes.array
}

export default Cart;