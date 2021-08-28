import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Showcase from './components/showcase/Showcase'
import Url from './components/url/Url'
import Link from './components/link/Link'
import Statistics from './components/statistics/Statistics'
import ShowLink from './components/ShowLink/ShowLink'


function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Url />
      <ShowLink />
      <Statistics />
      <Link />
      <Footer />
    </div>
  );
}

export default App;
