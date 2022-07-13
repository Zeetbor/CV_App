import React, {Component} from "react";

class ExperiencePreviewItem extends Component {
  // constructor(props){
  //   super(props)
  //   console.log("expPrevItem", props)
  // }

  render(){
    const {position, company, city, to, from} = this.props

    return (
      <div>
        {position}<br/>
        {company}<br/>
        {city}<br/>
        {from} - {to}<br/>
        <hr/>
      </div>
    )
  }
}

export default ExperiencePreviewItem;
