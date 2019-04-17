import './index.css';

var treeData = [
  {
    "name": "A",
    "parent": "null",
    "children": [
      {
        "name": "B",
        "parent": "Top Level",
        "children": [
          {
            "name": "C",
            "parent": "Level 2: A",
        "children": [
          {
            "name": "Arg",
        "children": [
          {
            "name": "Co-res",
            "parent": "null",
            "children": [
                {
                "name": "co- 1"
              },
              {
                "name" : "co-2"
              }
            ]
          },
          {
            "name" : "inde-res"
          }
        ]
          }
        ]
          }
        ]
      }
    ]
  }
];


// ************** Generate the tree diagram  *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "500px");

function update() {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 80; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
      .on("click", click);


    // ** UPDATE CIRCLES ***
  node.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  nodeEnter.select("circle")
      .attr("r", 10)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().remove();

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

    // *** UPDATE LINK ***
  link.attr("d", diagonal);

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().remove();

}

// Toggle children on click.
function click(d) {

  d.children = d.children[0].children[0].children;

  update();
}