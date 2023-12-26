import './Home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'


function Home() {


  return (
    <>
        <div className="home" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">
                    <div className='homeImg'></div>
                    <Data></Data>
                </div>

                <ScrollDown></ScrollDown>
            </div>
        </div>


    </>
  )
}

export default Home