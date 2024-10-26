import PropTypes from "prop-types"

const Banner = ({handleCoin}) => {
    return (
        <div className="mx-auto w-10/12 text-center mt-16 bg-cover bg-no-repeat bg- rounded-xl" style={{
            backgroundImage:`url("https://i.ibb.co.com/WHXDR2P/bg-shadow.png")`,
            backgroundColor:" black"
        }} >
          
           
            <div
                className="hero py-12  rounded-2xl"
               >
              
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-5xl flex flex-col items-center">
                    <div className="my-4">
                    <img src="https://i.ibb.co.com/G7rR2R6/banner-main.png" alt="" />
                    </div>
                        <h1 className="mb-5 text-5xl font-bold">Cricket Legends in Action: Feel the Heat</h1>
                        <p className="mb-5">
                        Elite Cricket Club - Your Home for Cricket Enthusiasts | Team Roster, Match Schedules, Stats & Updates | Join Us for the Love of Cricket and Experience the Spirit of the Game!
                        </p>
                        <button onClick={()=>handleCoin(500000)}  className="btn btn-warning">Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
Banner.propTypes={
    handleCoin:PropTypes.func
}

export default Banner;