import { useEffect, useState } from "react";
import Cart from "./cart";
import PropTypes from "prop-types"


const AllCartContainer = ({handleSelectedPlayers}) => {
    const [players, setPlayers] = useState([]);




    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => {
                setPlayers(data)
            })
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold mb-12">
            Available Players
            </h2>
            <div className="grid grid-cols-3 gap-4">

                {
                    players.map((p) => <Cart handleSelectedPlayers={handleSelectedPlayers} key={p.id} player={p}></Cart>)
                }

            </div>
        </div>
    );
};
AllCartContainer.propTypes={
    handleSelectedPlayers:PropTypes.func
}
export default AllCartContainer;