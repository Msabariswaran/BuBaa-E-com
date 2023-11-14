import Body from '../Components/Body/Body';
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Services from './Services';


const Home=()=>{
    return(
        <div>
            <Header/>
            <Banner/>
            <Body/>
            <Services/>
            <Footer/>
           
        </div>
    )
}
export default Home;