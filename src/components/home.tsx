import { useEffect, useState } from "react";
import { Welcome } from "../interface/articleInterface";
import { Col, Container, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";

const Home = () => {
  const [news, setNews] = useState<Welcome[]>([]);

  const getNews = async () => {
    try {
      const risp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=50");
      if (risp.ok) {
        const data = await risp.json();
        setNews(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Container className="p-5 p-sm-0">
        <h1 className="text-start  mb-3 " style={{ fontSize: "80px" }}>
          NEWS
        </h1>
        <Row className="justify-content-center gy-3">
          {news &&
            news.map((singleNews: Welcome, index) => (
              <Col xs={12} sm={6} lg={4} key={`news-${index}`}>
                <SingleNews singleNews={singleNews} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
