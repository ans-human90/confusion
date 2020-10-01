import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      const comments = dish.comments;
      if (comments != null) {
        const list = comments.map((comment) => {
          return (
            <ul key={comment.id} class="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                -- {comment.author} , {comment.date}
              </li>
            </ul>
          );
        });
        return (
          <div>
            <h4>Comments</h4>
            <p>{list}</p>
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;
