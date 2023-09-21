import { Badge, Card } from "react-bootstrap";
import { Welcome } from "../interface/articleInterface";
import { useNavigate } from "react-router-dom";

interface oneNews {
  singleNews: Welcome;
}

const SingleNews = (props: oneNews) => {
  const navigate = useNavigate();
  const sendToDetails = () => {
    navigate(`./dettaglio/${props.singleNews.id}`);
  };
  return (
    <>
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={props.singleNews.image_url}
          onClick={sendToDetails}
          style={{ cursor: "pointer" }}
        />
        <Badge className="text-start" bg="secondary">
          Published: {props.singleNews.published_at.toLocaleString().slice(0, 10)}
        </Badge>
        <Badge className="text-start" bg="info">
          Updated: {props.singleNews.updated_at.toLocaleString().slice(0, 10)}
        </Badge>
        <Card.Body className="text-start d-flex flex-column justify-content-between align-items-start">
          <Card.Title>{props.singleNews.title}</Card.Title>
          <a
            href={props.singleNews.url}
            style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
            className="align-self-end mt-3"
          >
            <Badge bg="primary">WebSite: {props.singleNews.news_site}</Badge>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleNews;
