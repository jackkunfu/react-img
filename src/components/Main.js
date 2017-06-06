require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var arr = [1,2,3,4,5]

var arr1 = arr.map(arrObj)

function arrObj(ele){
	return {
		'style': ele*100,
		'desc': 'this is ' + ele
	}
}


class ImgBox extends React.Component {
	constructor(props) {
    	super(props);
	    this.state = {
	    	imgCss: {
				width: this.props.data.style,
				height: '200px',
				backgroundColor: '#eee'
			}
	    }
	}

	render(){
		var imgCss = {
				width: this.props.data.style,
				height: '200px',
				backgroundColor: '#eee'
			}

		return (
			<fingure>
				<img style={this.state.imgCss}/>
				<figcaption>
					{this.props.data.desc}
				</figcaption>
			</fingure>
		)
	}


}

class AppComponent extends React.Component {
  render() {

  	var imgBoxes = []

  	arr1.forEach(function(data){
  		imgBoxes.push(<ImgBox data={data}/>)
  	})

    return (
      <section className="box-body">
      	<section className="boxs">
      		{imgBoxes}
      	</section>

      	<section className="btn">
      	
      	</section>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
