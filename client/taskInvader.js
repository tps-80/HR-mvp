// var settings = {
//   height: window.innerHeight,
//   width: window.innerWidth,
//   padding: 30
// }

var taskList = [" eat", " clean", " study"];

var schedule = [[4],[3],[2],[1]];

for (var i = 0; i < taskList.length; i++) {
  schedule[i][1] = taskList[i];
}

var incrementTime = function() {

  for (var i = schedule.length - 1; i > 0; i--) {
    schedule[i][1] = schedule[i - 1][1];
  }
  console.log(schedule);
}



// d3.select(".list")
//   .selectAll("div")
//     .data(schedule)
//   .enter().append("div")
//     .text(function(d) { return d; })
//     .style({ font: "16px sans-serif", "background-color": "steelblue", "text-align": "center", padding: "3px", margin: "1px", color: "white"})

d3.select("body").selectAll("div")
  .data([[4,'pink'],[3,'teal']])
  .enter()
  .append("div")
  .text(function(d) {
    return d[0];})
  .style('background-color',function(d) {
    return d[1];
  })
