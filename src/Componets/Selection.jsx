import PropTypes from "prop-types"
import { MdOutlineDeleteForever } from "react-icons/md";

const Selection = ({ handleIsActive, selectedPlayers, handleDelete }) => {


  return (
    <div>

      <h2 className="text-2xl font-bold mb-12">Selects Player:( {selectedPlayers.length}/6 )</h2>
      {
        selectedPlayers.map((player) => {
          return (
            <div key={player.id}>
              <div className="border-2 border-lime-300 rounded-lg p-4 flex justify-between items-center mb-4">
                <div className="flex gap-8">
                  <img src={player.img} alt="" className="w-32 rounded-xl" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 ">{player.name}</h2>
                    <p className="text-xl">{player.country}</p>
                  </div>
                  <div>
                    <p className="text-xl">{player.role}</p>
                    <p className="text-xl mt-8">Price : $ {player.price}</p>
                  </div>

                </div>
                <div>
                  <button onClick={() => handleDelete(player.id)} className="text-4xl" ><MdOutlineDeleteForever /></button>
                </div>
              </div>
            </div>
          )

        })
      }
      <button onClick={() => handleIsActive("cart")} className="btn btn-active btn-secondary my-12">Add More Player</button>
    </div>
  );
};
Selection.propTypes = {
  handleIsActive: PropTypes.func,
  selectedPlayers: PropTypes.object,
  handleDelete: PropTypes.func

}
export default Selection;