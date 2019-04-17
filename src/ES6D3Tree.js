import { Component } from "react";

class ES6D3Tree extends Component {

    constructor(props) {
        super(props);

        this.margin = {top: 20, right: 120, bottom: 20, left: 120};
        this.width = 960 - margin.right - margin.left;
        this.height = 500 - margin.top - margin.bottom;
        this.node = React.createRef();

    }
    
    createTree() {
        const node = this.node.current;
        let svgDiv = "#" + this.props.id + " > svg";
        d3.select(svgDiv).remove();
        this.svg =  d3.select(node).append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate("
                + this.margin.left + "," + this.margin.top + ")")
            .attr("width", this.width + this.margin.left + this.margin.right);
 
        //duration = 750;
 
        // declares a tree layout and assigns the size
        this.treemap = d3.tree().size([this.height, this.width]);
 
        // Assigns parent, children, height, depth
        this.root = d3.hierarchy(this.props.treeData, (d) => { return d.children; });
        //set the root of the node at the middle of the svg containing it
        this.root.x0 = this.height / 2;
        this.root.y0 = 0;
 
        // alert("This is the svg!!!!!!");
        // console.log(this.svg);
        return this.root;
 
    }

    render() {
        this.createTree();
        return <div ref = {this.node} >

        </div>
    }
}

export default ES6D3Tree;