import React, {useState} from 'react';
import '../assets/scss/Memories.scss';
import {Button, Container} from "react-bootstrap";

import {memoriesArray} from "./MemoriesArray";

function Memories() {
    const maxCount = 47;
    const increment = 10;
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    let breakPoints = [350, 500, 750];

    const loadMore = e => {
        if (count < maxCount) {

        }
    }

    return (
        <>
            <Container className="memories my-4">
                <h1 className="heading text-center">Memories</h1>
                <div className="masonry-container mt-4">
                    <Masonry brakePoints={breakPoints}>
                        {memoriesArray.map((image, key) => {
                            return (
                                <Tile key={key} src={image} />
                            )
                        })}
                    </Masonry>
                </div>
                <Button variant="danger" onClick={loadMore}>Load More</Button>
            </Container>
        </>
    );
}

const Tile = ({src}) => {
    return (
        <div className="tile">
            <img src={src} alt="memory"/>
        </div>
    );
};

class Masonry extends React.Component{
    constructor(props){
        super(props);
        this.state = {columns: 1};
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount(){
        this.onResize();
        window.addEventListener('resize', this.onResize)
    }

    getColumns(w){
        return this.props.brakePoints.reduceRight( (p, c, i) => {
            return c < w ? p : i;
        }, this.props.brakePoints.length) + 1;
    }

    onResize(){
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if(columns !== this.state.columns){
            this.setState({columns: columns});
        }

    }

    mapChildren(){
        let col = [];
        const numC = this.state.columns;
        for(let i = 0; i < numC; i++){
            col.push([]);
        }
        return this.props.children.reduce((p,c,i) => {
            p[i%numC].push(c);
            return p;
        }, col);
    }

    render(){
        return (
            <div className="masonry" ref="Masonry">
                {this.mapChildren().map((col, ci) => {
                    return (
                        <div className="column" key={ci} >
                            {col.map((child, i) => {
                                return <div key={i} >{child}</div>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Memories;
