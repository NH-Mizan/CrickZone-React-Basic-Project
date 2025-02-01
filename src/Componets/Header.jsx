import { TbCoinFilled } from "react-icons/tb";
import PropTypes from "prop-types"

const Header = ({ coin }) => {
  return (
    <div className="bg-lime-200  w-full  mb-16 sticky top-0 z-40 backdrop-blur bg-opacity-70 ">
      <div className="flex justify-between mx-auto w-10/12 p-3 font-bold items-center ">
        <div className="flex items-center">
          <img src="https://i.ibb.co.com/sKMHnv0/logo.png" alt="loding" className="w-12" />
          <h2 className="text-2xl font-bold">CrickZone</h2>
        </div>
        <div className="flex   gap-8">
          <ul className="flex justify-between gap-8 text-xl">
            <li>Home</li>
            <li>Player</li>
            <li>Teams</li>
            <li>Schedules</li>


          </ul>
          <button className="flex items-center gap-2 text-xl border-2 border-lime-400 px-2 rounded-lg bg-white"> {coin} Coin  <TbCoinFilled />
          </button>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  coin: PropTypes.number
}

export default Header;