// sources: https://blockbuilder.org/officeofjane/8092eaec170663cadea5da1647ca77aa
//http://bl.ocks.org/atmccann/8966400

async function drawLineChart() {

// 1. Access data
  const dataset = await d3.csv("./ceo-worker-pay.csv")
  console.table(dataset[0])

  const dateParser = d3.timeParse("%Y")
  const dateAccessor = d => dateParser(d.year)
  const ceoGranted = d => d.ceoGranted
  const ceoRealized = d => d.ceoRealized
  const workerIncome = d => d.workerIncome
  const ceoToWorkerGranted = d => d.ceoToWorkerGranted
  const ceoToWorkerRealized = d => d.ceoToWorkerRealized
  const workweekHoursGranted = d => d.workweekHoursGranted
  const workweekHoursRealized = d => d.workweekHoursRealized

// 2. Create chart dimensions

  let dimensions = {
    width: 400,
    height: 400,
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
    .nice()
  
//  setTimeout(() => {
//      yScale.domain([ymax[1], 0])
//  }, 2000)
  
  const yExtent = d3.extent(dataset, ceoRealized)
  console.log(yExtent)

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, dateAccessor))
    .range([0, dimensions.boundedWidth])
    //.nice()

// 5. Draw data

  const ceoLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(ceoRealized(d)))
  
//  setTimeout(() => {
    const ceoLine = bounds.append("path")
      .attr("d", ceoLineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#af9358")
      .attr("stroke-width", 2)
  
    const ceoLineLength = ceoLine.node().getTotalLength()
    ceoLine.attr("stroke-dasharray", `${ceoLineLength} ${ceoLineLength}`)
      .attr("stroke-dashoffset", ceoLineLength)
      .transition()
          .duration(3000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
//  }, 500)
  
  const workerLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(workerIncome(d)))
  
//  setTimeout(() => {
    const workerLine = bounds.append("path")
      .attr("d", workerLineGenerator(dataset))
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
//  }, 500)

// 6. Draw peripherals

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)
    //.ticks(3)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)
//    .style("transform", `translateX(${
//       dimensions.boundedWidth
//    }px)`)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)
    .ticks(5)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${
      dimensions.boundedHeight
    }px)`)
    .attr("class", "x-axis")
  
  // 7. Interactions
  setTimeout(() => {
      yScale.domain([midYMax, 0])
      
      yAxis.transition().ease(d3.easePolyOut)
          .duration(2000)
          .call(yAxisGenerator)
      
      workerLine.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("d", workerLineGenerator(dataset))
      
      ceoLine.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("d", ceoLineGenerator(dataset))
  }, 5000)
  
//  const listeningRect = bounds.append("rect")
//    .attr("class", "listening-rect")
//    .attr("width", dimensions.boundedWidth)
//    .attr("height", dimensions.boundedHeight)
//    .on("mousemove", onMouseMove)
//    .on("mouseleave", onMouseLeave)
//  
//  const tooltip = d3.select("#tooltip")
//  const tooltipLine = bounds.append("line")
//    .attr("class", "tooltip-line")
//  
//  const updateTransition = d3.transition()
//    .ease(d3.easeCubicOut)
//  
//  function onMouseMove() {
//      const mousePosition = d3.mouse(this)
//      const hoveredDate = xScale.invert(mousePosition[0])
//      const getDistanceFromHoveredDate = d => Math.abs(
//        dateAccessor(d) - hoveredDate
//      )
//      
//      const closestIndex = d3.scan(dataset, (a, b) => (
//        getDistanceFromHoveredDate(a) - getDistanceFromHoveredDate(b)
//      ))
//      const closestDataPoint = dataset[closestIndex]
//      const closestXValue = dateAccessor(closestDataPoint)
//      const closestYValue = ceoRealized(closestDataPoint)
//      const closestWorkerYValue = workerIncome(closestDataPoint)
//      
//      const formatDate = d3.timeFormat("%Y")
//      tooltip.select("#date")
//        .transition(updateTransition)
//          .text(formatDate(closestXValue))
//      const formatPay = d => `$${d3.format(",.0f")(d)}`
//      tooltip.select("#pay")
//        .transition(updateTransition)
//          .text(formatPay(closestYValue))
//      const formatWorkerPay = d => `$${d3.format(",.0f")(d)}`
//      tooltip.select("#worker-pay")
//        .transition(updateTransition)
//          .text(formatWorkerPay(closestWorkerYValue))
//      
//      const x = xScale(closestXValue)
//        //+ dimensions.margin.left
//      const y = yScale(closestYValue)
//        + dimensions.margin.top
//      
//      tooltipLine.transition()
//        .attr("x1", x)
//        .attr("x2", x)
//        .attr("y1", 0)
//        .attr("y2", dimensions.boundedHeight + dimensions.margin.top)
//      tooltipLine.style("opacity", 1)
//      
//      tooltip.transition(updateTransition)
//        .style("transform", `translate(`
//        + `calc( -0% + ${x}px),`
//        + `calc(-100% + ${y}px)`
//        + `)`)
//      
//      tooltip.style("opacity", 1)
//  }
//    
//  function onMouseLeave() {
//      tooltip.style("opacity", 0)
//      tooltipLine.style("opacity", 0)
//  }

}

drawLineChart()






