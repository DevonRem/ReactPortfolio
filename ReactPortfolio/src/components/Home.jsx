import './Home.css'

import Data from './Data'

function Home() {


  return (
    <>
        <div className="home" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">


                    <div className='homeImg'></div>

                    <Data></Data>
                </div>
            </div>
        </div>


    </>
  )
}

export default Home