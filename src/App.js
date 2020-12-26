import PageWrapper from './components/pageWrapper'
import Home from './components/pages/home'
import './assets/scss/base.scss'

function App() {
  return (
    <div>
      <PageWrapper> 
        <Home />
      </PageWrapper>
    </div>
  );
}

export default App
