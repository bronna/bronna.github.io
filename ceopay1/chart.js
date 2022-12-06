// sources: https://observablehq.com/@vigorousnorth/animated-transition-of-y-axis-scales
//https://observablehq.com/@johnburnmurdoch/bar-chart-race

async function drawLineChart() {

// 1. Access data
  const dataset = await d3.csv("./ceo-worker-pay.csv")
  console.table(dataset[0])

  const dateParser = d3.timeParse("%Y")
  const dateAccessor = d => dateParser(d.year)
  const ceoRealized = d => d.ceoRealized
  const workerIncome = d => d.workerIncome
  const ceoToWorkerRealized = d => d.ceoToWorkerRealized
  const workweekHoursRealized = d => d.workweekHoursRealized

// 2. Create chart dimensions

  let dimensions = {
    width: 400,
    height: 300,
    margin: {
      top: 15,
      right: 10,
      bottom: 40,
      left: 65,
    },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom

// 3. Draw canvas

  const wrapper = d3.select("#wrapper")
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
  const oldYMax = 70000
  const midYMax = 1000000
  const newYMax = 23000000

  const yScale = d3.scaleLinear()
    .domain([oldYMax, 0])
    .range([0, dimensions.boundedHeight])
    //.nice()
  
  const yExtent = d3.extent(dataset, ceoRealized)
  console.log(yExtent)

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, dateAccessor))
    .range([0, dimensions.boundedWidth])
    //.nice()

// 5. Draw data

  const workerLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(workerIncome(d)))
  const workerLine = bounds.append("path")
  
  setTimeout(() => {
    workerLine.attr("d", workerLineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#a05070")
      .attr("stroke-width", 2)
    
    const workerLineLength = workerLine.node().getTotalLength()
    workerLine.attr("stroke-dasharray", `${workerLineLength} ${workerLineLength}`)
      .attr("stroke-dashoffset", workerLineLength)
      .transition()
          .duration(3000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
  }, 500)
  
  const ceoLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(ceoRealized(d)))
  const ceoLine = bounds.append("path")
  
  setTimeout(() => {
    ceoLine.attr("d", ceoLineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#af9358")
      .attr("stroke-width", 2)
  
    const ceoLineLength = ceoLine.node().getTotalLength()
    ceoLine.attr("stroke-dasharray", `${ceoLineLength} ${ceoLineLength}`)
      .attr("stroke-dashoffset", ceoLineLength)
      .transition()
          .duration(100000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
  }, 6500)

// 6. Draw peripherals

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)
    //.ticks(5)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${
      dimensions.boundedHeight
    }px)`)
    .attr("class", "x-axis")
  
  // 7. Interactions & Animations
  setTimeout(() => {
      
//      wrapper.transition().ease(d3.easePolyOut)
//          .duration(2000)
//          .style("transform", "scale(1,2)")
      
      yScale.domain([midYMax, 0])
      
      yAxis.transition().ease(d3.easePolyOut)
          .duration(2000)
          .call(yAxisGenerator)
      
      workerLine.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("d", workerLineGenerator(dataset))
      
  }, 4500)

}

drawLineChart()






