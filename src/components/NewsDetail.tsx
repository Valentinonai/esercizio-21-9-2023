import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Welcome } from "../interface/articleInterface";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

const NewsDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState<Welcome | null>(null);

  const fetchDetails = async () => {
    try {
      const risp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.idNews}`);
      if (risp.ok) {
        const data = await risp.json();
        setDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <Container className="mt-5 text-start">
      <Row>
        <Col xs={12} lg={4}>
          <div>
            <img src={details?.image_url} alt="detailImg" width="100%" />
          </div>
          <a style={{ fontSize: "12px" }} href={details?.url}>
            {details?.url}
          </a>
        </Col>
        <Col xs={12} lg={8} style={{ borderLeft: ".5px solid gray", paddingLeft: "20px" }}>
          <div className="d-flex flex-column justify-content-between align-items-start h-100">
            <div>
              <h1>{details?.title}</h1>
              <h5 className="text-start">
                {details?.news_site}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "15px",
                    marginInlineStart: "15px",
                  }}
                >
                  {details?.published_at.toLocaleString().slice(0, 10)}
                </span>
              </h5>
              <hr />
              <p>{details?.summary}</p>
            </div>
            <Badge bg="info" className="align-self-end">
              Last Update: {details?.updated_at.toLocaleString().slice(0, 10)}
            </Badge>
          </div>
        </Col>
      </Row>
      <Link to={"/"}>
        <Button className="mt-5" variant="outline-dark">
          <i className="bi bi-caret-left-fill"></i>
        </Button>
      </Link>
    </Container>
  );
};

export default NewsDetail;
