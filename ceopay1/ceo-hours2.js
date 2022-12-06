// sources: https://observablehq.com/@vigorousnorth/animated-transition-of-y-axis-scales
//https://observablehq.com/@johnburnmurdoch/bar-chart-race

async function drawLineChart() {

// 1. Access data
  const dataset = await d3.csv("./ceo-worker-pay.csv")
  console.table(dataset[0])
  console.log(dataset[0].workerIncome)
  console.log(dataset[10].year)

  const dateParser = d3.timeParse("%Y")
  const dateAccessor = d => dateParser(d.year)
  const ceoRealized = d => d.ceoRealized
  const workerIncome = d => d.workerIncome
  const ceoToWorkerRealized = d => d.ceoToWorkerRealized
  const workweekHoursRealized = d => d.workweekHoursRealized

// 2. Create chart dimensions

  let dimensions = {
    width: 375,
    height: 600,
    margin: {
      top: 20,
      right: 20,
      bottom: 50,
      left: 20,
    },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom

// 3. Draw canvas

  const wrapper = d3.select("#ceopay2")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`)

// 4. Create scales
  const oldYMax = 60000
  const midYMax = 1000000
  const newYMax = 23000000

  const yScale = d3.scaleLinear()
    .domain([newYMax, 0])
    .range([0, dimensions.boundedHeight])
    .nice()

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, dateAccessor))
    .range([0, dimensions.boundedWidth])
    .nice()
  
// 6. Draw peripherals
  
  const yAxisGenerator = d3.axisRight()
    .scale(yScale)
    .ticks(4, "$,f")
  const yAxis = bounds.append("g")
    .call(yAxisGenerator)
    .style("transform", `translateX(${
        250
    }px)`)
    .attr("class", "axis")
  
  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)
    .ticks(5)
  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${
      dimensions.boundedHeight
    }px)`)
    .attr("class", "axis")
  const manuallyMadeAxis = bounds.append("line")
        .attr("x1", 0)
        .attr("x2", dimensions.boundedWidth - 80)
        .attr("y1", dimensions.boundedHeight)
        .attr("y2", dimensions.boundedHeight)
        .attr("stroke", "#34495e")
        .attr("stroke-width", 1)
        .attr("class", "axis")

// 5. Draw data

  let radius = 5
  let fade = 300
  
  let workerColor = "#8E6CAF"
  let ceoColor = "#80BE8A"
  
  const workerLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(workerIncome(d)))
  const workerLine = bounds.append("path")
    .attr("d", workerLineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", workerColor)
    .attr("stroke-width", 3)
  
  const workerAreaGenerator = d3.area()
    .x(d => xScale(dateAccessor(d)))
    .y0(dimensions.boundedHeight)
    .y1(d => yScale(workerIncome(d)))
  const workerArea = bounds.append("path")
    .attr("d", d => workerAreaGenerator(dataset))
    .attr("fill", workerColor)
    .attr("opacity", 0.3)
  
  const ceoLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(ceoRealized(d)))
  const ceoLine = bounds.append("path")
    .attr("d", ceoLineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", ceoColor)
    .attr("stroke-width", 3)
  
  const ceoAreaGenerator = d3.area()
    .x(d => xScale(dateAccessor(d)))
    .y0(dimensions.boundedHeight)
    .y1(d => yScale(ceoRealized(d)))
  const ceoArea = bounds.append("path")
    .attr("d", d => ceoAreaGenerator(dataset))
    .attr("fill", ceoColor)
    .attr("opacity", 0.15)
  
  const startLine = bounds.append("line")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", yScale(dataset[0].workerIncome))
    .attr("y2", yScale(dataset[0].ceoRealized))
    .attr("stroke", "black")
    .attr("stroke-width", 2.5)
    .attr("stroke-dasharray", "10 5")
    .attr("class", "dataLine")
  
  const worker1965Dot = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].workerIncome))
    .attr("r", radius)
    .attr("fill", workerColor)
  const worker1965Label = bounds.append("text")
    .attr("x", 5)
    .attr("y", yScale(dataset[0].workerIncome) + 15)
    .html("$41,900")
    .attr("fill", workerColor)
    .attr("class", "amount")
  const ceo1965Dot = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].ceoRealized))
    .attr("r", radius)
    .attr("fill", ceoColor)
  const ceo1965Label = bounds.append("text")
    .attr("x", 5)
    .attr("y", yScale(dataset[0].ceoRealized) - 15)
    .html("$924,000")
    .attr("fill", ceoColor)
    .attr("class", "amount")
  
  const startLabelPosition = yScale(dataset[0].workerIncome)
    + ((yScale(dataset[0].ceoRealized) 
       - yScale(dataset[0].workerIncome)) / 2)
    - 12
  const startBg = bounds.append("rect")
    .attr("x", -15)
    .attr("y", startLabelPosition)
    .attr("width", 40)
    .attr("height", 24)
    .attr("rx", radius)
    .attr("ry", radius)
    .attr("class", "bg")
  const startLabel = bounds.append("text")
    .attr("x", 4)
    .attr("y", startLabelPosition + 17)
    .html("20x")
    .attr("class", "data-label")
    .attr("fill", "white")
  
  const endLine = bounds.append("line")
    .attr("x1", xScale(dateParser(dataset[dataset.length - 1].year)))
    .attr("x2", xScale(dateParser(dataset[dataset.length - 1].year)))
    .attr("y1", yScale(dataset[dataset.length - 1].workerIncome))
    .attr("y2", yScale(dataset[dataset.length - 1].ceoRealized))
    .attr("stroke", "black")
    .attr("stroke-width", 2.5)
    .attr("stroke-dasharray", "10 5")
    .attr("class", "dataLine")
  
  const worker2018Dot = bounds.append("circle")
    .attr("cx", xScale(dateAccessor(dataset[10])))
    .attr("cy", yScale(dataset[10].workerIncome))
    .attr("r", radius)
    .attr("fill", workerColor)
  const worker2018Label = bounds.append("text")
    .attr("x", dimensions.boundedWidth - 70)
    .attr("y", yScale(dataset[dataset.length - 1].workerIncome) + 15)
    .html("$56,200")
    .attr("fill", workerColor)
    .attr("class", "amount")
  const ceo2018Dot = bounds.append("circle")
    .attr("cx", xScale(dateAccessor(dataset[10])))
    .attr("cy", yScale(dataset[10].ceoRealized))
    .attr("r", radius)
    .attr("fill", ceoColor)
  
  const endLabelPosition = yScale(dataset[dataset.length - 1].workerIncome)
    + ((yScale(dataset[dataset.length - 1].ceoRealized) 
       - yScale(dataset[dataset.length - 1].workerIncome)) / 2)
    - 12
  const endBg = bounds.append("rect")
    .attr("x", xScale(dateParser(dataset[dataset.length - 1].year)) - 25)
    .attr("y", endLabelPosition)
    .attr("width", 50)
    .attr("height", 24)
    .attr("rx", radius)
    .attr("ry", radius)
    .attr("class", "bg")
  const endLabel = bounds.append("text")
    .attr("x", xScale(dateParser(dataset[dataset.length - 1].year)))
    .attr("y", endLabelPosition + 17)
    .html("278x")
    .attr("class", "data-label")
    .attr("fill", "white")
  
  const info1965Bg = bounds.append("rect")
    .attr("x", dimensions.boundedWidth / 2 - 85)
    .attr("y", dimensions.boundedHeight / 2 - 100)
    .attr("width", 170)
    .attr("height", 200)
    .attr("rx", radius)
    .attr("ry", radius)
    .attr("class", "bg")
  const info1965 = bounds.append("text")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.boundedHeight / 2)
    .html("In 1965 CEOs made 20 times more than the average worker")
    .attr("class", "info-label")
    .attr("fill", "white")
    .call(wrap, 350)
  
  // 6.5 More Peripherals
  
  console.log(dataset[0].workerIncome)
  
  const workerLineLabel = bounds.append("text")
    .attr("class", "label")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", yScale(dataset[(dataset.length - 1) / 2].workerIncome) - 10)
    .style("fill", workerColor)
    .text("worker pay")
    .style("text-anchor", "middle")
  
  const ceoLineLabel = bounds.append("text")
    .attr("class", "label")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", yScale(dataset[4].ceoRealized) - 10)
    .style("fill", ceoColor)
    .text("ceo pay")
    .style("text-anchor", "middle")
  
  // 7. Interactions & Animations
    
  // 8. Helper functions
  /*Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text*/
    function wrap(text, width) {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4, 
            y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          };
        };  
    };

}

drawLineChart()






