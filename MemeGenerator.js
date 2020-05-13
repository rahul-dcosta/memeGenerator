import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomTtext: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                
            })
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}

export default MemeGenerator