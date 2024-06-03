import Header from './Header';
import AboutMax from './AboutMax.jsx';
import Brand from './Brand.jsx';
import Max from './Max.jsx';
import Components from './Components.jsx';
import Footer from './Footer.jsx';



function Home() {
    return (
      <>
        <AboutMax/>
        <Max/>
        <Components/>
        {/* Add any other components you want to include on the home page */}
      </>
    );
  }

  export default Home