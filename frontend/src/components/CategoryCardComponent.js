import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const styles = {
  card: {
    boxShadow:"5px 0px 15px black",
    border: "5px black"
    // borderRadius: 55,
    // padding: '3rem'
  },
  cardImage: {
    height: "10px",    
  }
}


const CategoryCardComponent = ({ category, idx }) => {
  
  return (
    <>
    <Card style={styles.card}>
      <LinkContainer to={`/product-list/category/${category.name}`}>   
      
      <img src={category.image ?? null}  height="365px" style={styles.cardImage}></img>
             
      </LinkContainer>
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          {category.description}
        </Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
    </>
  );
};

export default CategoryCardComponent;

