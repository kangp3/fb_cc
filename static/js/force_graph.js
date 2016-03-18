var width = 1200,
    height = 700;

var color = d3.scale.category20();

var force = d3.layout.force()
    .linkDistance(15)
    .linkStrength(10)
    .gravity(1)
    .size([width, height])
    .charge(-5000);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var defs = svg.append("defs");

/*
d3.json("/static/curvedgraphfiles/testfriends.json", function(error, graph) {
  if (error) throw error;

  var nodes = graph.nodes.slice(),
      links = [],
      bilinks = [],
      patterns = [];

  graph.nodes.forEach(function(node) {
    patterns.push({fb_id: node.fb_id, img: "/static/user_icons/"+node.fb_id+".jpg"});
  });

  graph.links.forEach(function(link) {
    var s = nodes[link.source],
        t = nodes[link.target],
        i = {}; // intermediate node
    nodes.push(i);
    links.push({source: s, target: i}, {source: i, target: t});
    bilinks.push([s, i, t]);
  });

  force
      .nodes(nodes)
      .links(links)
      .start();

  var patterns = defs.selectAll("pattern")
        .data(patterns)
      .enter().append("pattern")
        .attr("width", 1).attr("height", 1)
        .attr("id", function(d) { return d.fb_id })
        .append("svg:image")
          .attr("xlink:href", function(d) { return d.img })
          .attr("width", 32).attr("height", 32);

  var link = svg.selectAll(".link")
      .data(bilinks)
    .enter().append("path")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .style("fill", function(d) { return "url(#"+d.fb_id+")"})
      .style("stroke", function(d) { return color(d.group) })
      .call(force.drag);

  node.append("title")
      .text(function(d) { return d.fb_id; });

  force.on("tick", function() {
    link.attr("d", function(d) {
      return "M" + d[0].x + "," + d[0].y
          + "S" + d[1].x + "," + d[1].y
          + " " + d[2].x + "," + d[2].y;
    });
    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });
});
*/

