import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Showcase from './components/showcase/Showcase'
import Url from './components/url/Url'
import ShowLink from './components/ShowLink/ShowLink'


function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Url />
      <ShowLink list={JSON.parse(window.localStorage.getItem('links'))} />
      <Footer />
    </div>
  );
}

export default App;
