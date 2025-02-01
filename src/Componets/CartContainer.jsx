import AllCartContainer from "./AllCartContainer";
import Selection from "./Selection";
import PropTypes from "prop-types"



const CartContainer = ({ handleIsActive, isActive, handleSelectedPlayers, selectedPlayers, handleDelete }) => {
    return (

        <div className="mx-auto w-10/12  ">

            <div className="flex justify-end items-center  text-2xl font-bold">

                <div className="flex  m-12 gap-16 ">
                    <button onClick={() => handleIsActive("cart")} className={`${isActive.cart ? "btn btn-active btn-secondary" : "btn"}`}>Available</button>

                    <button onClick={() => handleIsActive("select")} className={`${isActive.cart ? "btn" : "btn btn-active btn-secondary"}`}>
                        Selected : {selectedPlayers.length}
                    </button>
                </div>
            </div>

            {isActive.cart ? <AllCartContainer handleSelectedPlayers={handleSelectedPlayers}></AllCartContainer> : <Selection handleIsActive={handleIsActive} selectedPlayers={selectedPlayers} handleDelete={handleDelete}></Selection>}
        </div>
    );
};
CartContainer.propTypes = {
    handleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    handleSelectedPlayers: PropTypes.func,
    selectedPlayers: PropTypes.object,
    handleDelete: PropTypes.func
}



export default CartContainer;