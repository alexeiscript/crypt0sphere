import { NewsContextProvider } from "../news/newsContext";
import Articles from '../news/articles'
import '../../assets/scss/home.scss'

function Home() {
    return(
        <div className="containex">
            <div className="home">
                <div className="home-left">
                    <NewsContextProvider>
                        <Articles />
                    </NewsContextProvider>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    )
}

export default Home