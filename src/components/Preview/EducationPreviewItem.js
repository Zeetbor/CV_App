import React, {Component} from "react";

class EducationPreviewItem extends Component {

  render(){
    const {
      university,
      city,
      degree,
      subject,
      grade,
      from,
      to,
    } = this.props;

    return (
      <div>
        {university}<br />
        {city}<br />
        {degree}<br />
        {subject}<br />
        {grade}<br />
        {from} - {to}<br />
      </div>
    )
  }
}

export default EducationPreviewItem;
