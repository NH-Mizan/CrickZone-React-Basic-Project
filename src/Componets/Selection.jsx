import PropTypes from "prop-types"

const Selection = ({handleIsActive, selectedPlayers}) => {
 console.log(selectedPlayers)
  
    return (
        <div>
            
            <h2 className="text-2xl font-bold mb-12">Selects Player:  {selectedPlayers.length}/6</h2>
          {
           selectedPlayers.map((player)=>{
          return(
            <div key={player.id}>
            <div className="border-2 border-lime-300 rounded-lg p-4 flex justify-between items-center mb-4">
               <div className="flex gap-8">
               <img src={player.img} alt="" className="w-32 rounded-xl"/>
              <div>
              <h2 className="text-2xl font-bold mb-4 ">{player.name}</h2>
              <p className="text-xl">{player.battingStyle}</p>
              </div>
               </div>
               <div>
                <button className="btn btn-primary" >Delete</button>
               </div>
            </div>
        </div>
          )
           
           })
          }
           <button onClick={()=>handleIsActive("cart")} className="btn btn-active btn-secondary my-12">All Players add</button>
        </div>
    );
};
Selection.propTypes={
 handleIsActive:PropTypes.func,
 selectedPlayers:PropTypes.object

}
export default Selection;