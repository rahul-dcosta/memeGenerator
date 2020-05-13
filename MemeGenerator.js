import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input
                        type = "text"
                        name = "TopText"
                        placeholder = "Top Text"
                        value = {this.state.topText}
                    />

                    <input
                        type = "text"
                        name = "BottomText"
                        placeholder = "Bottom Text"
                        value = {this.state.bottomText}
                    />

                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator
