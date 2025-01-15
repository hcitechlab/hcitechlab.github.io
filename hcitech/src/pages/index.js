import Carousel from "@/components/carousel";
import Image from 'next/image';
import Link from 'next/link';
import {news} from '../data/news_data';


export default function Home() {
  return (
    <div>
      <Carousel />
      <div className = "container">
        <div className = "row">
          <WelcomeCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

const WelcomeCard = () => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
            <h1>Welcome to HCI Tech Lab!</h1>
            <h5>
              <p> We are a multidisciplinary research group working on physical computing, natural user interface, and socially acceptable interactions. Our research focuses on enabling novel interactions for Extended Reality (XR) through sensing/haptic feedback technology and wearable interface with the aid of applied machine learning while supporting intelligent authoring systems.</p>
              <br />
              <p> We envision natural user interactions that overcome physical, mental, and social barriers. To achieve this, we will focus on</p>
              <br />
              <ul>
                  <li><b>Embedding Interactive Technologies</b></li>
                  <li><b>Advancing Interaction Techniques</b></li>
                  <li><b>Authoring User Interface & Experience</b></li>
              </ul>
            </h5>
            <br />
            <a class="btn btn-primary" href="https://www.youtube.com/@HCI_Tech" target="_blank"><b>HCI Tech Youtube</b></a>
            <br />
            <br />
            <a class="btn btn-dark" href="https://youtu.be/BndS5KMmBHA" target="_blank"><b>Learn More about HCI Tech Lab through this video (Korean)</b></a>
        </div>
      </div>
    </div>
  );
}

const NewsCard = () => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title">News </h2>
          <div className="scroll-box" style={{ height: '600px' }}>
            <div className="scroll">
              <div className="row news_item mt-4">
                {
                  news.map((news, _) => (
                    <div className="news-item1">
                      <div className = "title_news"><Image alt = "icon" src = {news["icon"]} width = {news["tall"] ? 41.88 : 25} height = {news["tall"] ? 35 : 25}/>&nbsp; {news["title"]}</div>
                      <div className="date"> {news["date"]}</div>
                      <div className="context_news mb-3">{news["content"]}</div>
                      {
                        news["images"].map((src, _) => (
                          <Image alt="news_image" src={src} width = {5000} height={150} style={{ width: 'auto', marginRight: '4px' }} />
                        ))
                      }
                    </div>
                  ))
                }
              </div>
              <Link href="/news">More News</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
