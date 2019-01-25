import React from 'react'

// const Title = ({title}) => <h1>The title is: {title}</h1>   

class Title extends React.Component {

    render() {
        console.log('Render title: ' + this.props.title)
        return <h1>The title is: {this.props.title}</h1> 
    }

}

export default Title