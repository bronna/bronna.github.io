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
    width: 800,
    height: 600,
    margin: {
      top: 110,
      right: 270,
      bottom: 170,
      left: 170,
    },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom

// 3. Draw canvas

  const wrapper = d3.select("#ceopay")
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
  const midYMax = 1300000
  const newYMax = 20000000

  const yScale = d3.scaleLinear()
    .domain([oldYMax, 0])
    .range([0, dimensions.boundedHeight])
    .nice()
  
  const yExtent = d3.extent(dataset, ceoRealized)
  console.log(yExtent)

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, dateAccessor))
    .range([0, dimensions.boundedWidth])
    .nice()
  
// 6. Draw peripherals

  const chartLabel = bounds.append("text")
    .attr("x", -70)
    .attr("y", -80)
    .html("How Has Worker & CEO Pay Changed Over Time?")
    .attr("class", "chart-label")
  
  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)
    .ticks(5)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)
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
        .attr("x2", dimensions.boundedWidth + 15)
        .attr("y1", dimensions.boundedHeight)
        .attr("y2", dimensions.boundedHeight)
        .attr("stroke", "#34495e")
        .attr("stroke-width", 2)
        .attr("opacity", "0.3")
        .attr("stroke-dasharray", "2 6")
  
  const yLabel = bounds.append("text")
    .attr("x", -9)
    .attr("y", -30)
    .html("Dollars (US)")
    .attr("class", "axis-label")
  
  const sourceLabel = bounds.append("text")
    .attr("x", -9)
    .attr("y", dimensions.boundedHeight + 80)
    .html("Data: Economic Policy Institute")
    .attr("class", "source-label")

// 5. Draw data

  const radius = 5
  const fade = 300
  
  const workerLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(workerIncome(d)))
  const workerLine = bounds.append("path")
  
  let workerColor = "#dc8b00"
  const workerNow = bounds.append("circle")
    .style("opacity", 0)
  const workerNowLabel = bounds.append("text")
    .style("opacity", 0)
  const workerNowInfo = bounds.append("text")
    .style("opacity", 0)
  let workerLineDuration = 2500
  
  const workerStart = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].workerIncome))
    .attr("r", radius)
    .style("opacity", 0)
  const workerStartLabel = bounds.append("text")
    .attr("x", -10)
    .attr("y", (yScale(dataset[0].workerIncome)) + 40)
    .html("$41,900")
    .attr("class", "data-label")
    .style("opacity", 0)
  const workerStartInfo = bounds.append("text")
    .attr("x", -10)
    .attr("y", (yScale(dataset[0].workerIncome)) + 65)
    .html("1965 Average Worker Pay")
    .attr("class", "info-label")
    .style("opacity", 0)
  
  const workerNowPercent = bounds.append("text")
    .attr("x", xScale(dateAccessor(dataset[10])) + 30)
    .html("+%34")
    .attr("class", "percent-label")
    .style("opacity", 0)
  
  setTimeout(() => {
    workerStart
        .attr("fill", "white")
        .attr("stroke", workerColor)
        .attr("stroke-width", 2)
        .transition().duration(fade)
            .style("opacity", 1)
    workerStartLabel
        .attr("fill", workerColor)
        .transition().duration(fade)
            .style("opacity", 1)
    workerStartInfo
        .attr("fill", workerColor)
        .transition().duration(fade)
            .style("opacity", 1)
      
    workerLine.attr("d", workerLineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", workerColor)
      .attr("stroke-width", 2.5)
      .style("opacity", 0.7)
    
    const workerLineLength = workerLine.node().getTotalLength()
    workerLine.attr("stroke-dasharray", `${workerLineLength} ${workerLineLength}`)
      .attr("stroke-dashoffset", workerLineLength)
      .transition()
          .duration(workerLineDuration)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)

    setTimeout(() => {
      workerNow
        .attr("cx", xScale(dateAccessor(dataset[10])))
        .attr("cy", yScale(dataset[10].workerIncome))
        .attr("r", radius)
        .attr("fill", "white")
        .attr("stroke", workerColor)
        .attr("stroke-width", 2)
        .transition().duration(fade)
            .style("opacity", 1)
        
      workerNowLabel
        .attr("x", xScale(dateAccessor(dataset[10])) - 10)
        .attr("y", yScale(dataset[10].workerIncome) + 40)
        .html("$56,200")
        .attr("class", "data-label")
        .attr("fill", workerColor)
        .transition().duration(fade)
            .style("opacity", 1)
        
      workerNowInfo
        .attr("x", xScale(dateAccessor(dataset[10])) - 10)
        .attr("y", yScale(dataset[10].workerIncome) + 65)
        .html("2018 Avg Worker Pay")
        .attr("class", "info-label")
        .attr("fill", workerColor)
        .transition().duration(fade)
            .style("opacity", 1)
    }, workerLineDuration)
  }, 500)
  
  const ceoLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(ceoRealized(d)))
  const ceoLine = bounds.append("path")
    .style("opacity", 0)
  
  let ceoColor = "#e85e30"
  const ceoNow = bounds.append("circle")
    .style("opacity", 0)
  const ceoNowLabel = bounds.append("text")
    .style("opacity", 0)
  const ceoNowInfo = bounds.append("text")
    .style("opacity", 0)
  let ceoLineDuration = 4500
  
  const ceoStart = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].ceoRealized))
    .attr("r", radius)
    .attr("fill", "white")
    .attr("stroke", ceoColor)
    .attr("stroke-width", 2)
  const ceoStartLabel = bounds.append("text")
    .attr("x", -10)
    .attr("y", (yScale(dataset[0].ceoRealized)) - 28)
    .html("$924,000")
    .attr("class", "data-label")
    .attr("fill", ceoColor)
  const ceoStartInfo = bounds.append("text")
    .attr("x", -10)
    .attr("y", (yScale(dataset[0].ceoRealized)) - 60)
    .html("1965 Average CEO Pay")
    .attr("class", "info-label")
    .attr("fill", ceoColor)
  
  const ceoNowPercent = bounds.append("text")
    .attr("x", xScale(dateAccessor(dataset[10])) + 56)
    .html("+%1760")
    .attr("class", "percent-label")
    .style("opacity", 0)
  
  setTimeout(() => {
    ceoLine.attr("d", ceoLineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", ceoColor)
      .attr("stroke-width", 2.5)
      .style("opacity", 0.7)
      
    const ceoLineLength = ceoLine.node().getTotalLength()
    ceoLine.attr("stroke-dasharray", `${ceoLineLength} ${ceoLineLength}`)
      .attr("stroke-dashoffset", ceoLineLength)
      .transition()
          .duration(ceoLineDuration)
          .ease(d3.easePolyIn)
          .attr("stroke-dashoffset", 0)
        
    setTimeout(() => {
      ceoNow
        .attr("cx", xScale(dateAccessor(dataset[10])))
        .attr("cy", yScale(dataset[10].ceoRealized))
        .attr("r", radius)
        .attr("fill", "white")
        .attr("stroke", ceoColor)
        .attr("stroke-width", 2)
        .transition().duration(fade)
            .style("opacity", 1)
        
      ceoNowLabel
        .attr("x", xScale(dateAccessor(dataset[10])) - 10)
        .attr("y", (yScale(dataset[10].ceoRealized)) - 28)
        .html("$17,180,000")
        .attr("class", "data-label")
        .attr("fill", ceoColor)
        .transition().duration(fade)
            .style("opacity", 1)
        
      ceoNowInfo
        .attr("x", xScale(dateAccessor(dataset[10])) - 10)
        .attr("y", (yScale(dataset[10].ceoRealized)) - 60)
        .html("2018 Avg CEO Pay")
        .attr("class", "info-label")
        .attr("fill", ceoColor)
        .transition().duration(fade)
            .style("opacity", 1)
    }, 6000)
  }, 9000)
  
  // 7. Interactions & Animations
  setTimeout(() => {
      
//      wrapper.transition().ease(d3.easePolyOut)
//          .duration(2000)
//          .style("transform", "scale(1,2)")
      
      yScale.domain([midYMax, 0])
      
      yAxis.transition().ease(d3.easePolyOut)
          .duration(3000)
          .call(yAxisGenerator)
      xAxis.transition().ease(d3.easePolyOut)
          .duration(2000)
          .style("opacity", 0.2)
      
      workerLine.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("d", workerLineGenerator(dataset))
      workerStart.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("cy", yScale(dataset[0].workerIncome))
      workerStartLabel.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("y", (yScale(dataset[0].workerIncome)) + 40)
      workerStartInfo.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("y", (yScale(dataset[0].workerIncome)) + 65)
      workerNow.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("cy", yScale(dataset[10].workerIncome))
      workerNowLabel.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("y", (yScale(dataset[10].workerIncome)) + 40)
      workerNowInfo.transition().ease(d3.easePolyOut)
          .duration(2000)
          .attr("y", (yScale(dataset[10].workerIncome)) + 65)
      
      ceoLine.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("d", ceoLineGenerator(dataset))
      ceoStart.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("cy", yScale(dataset[0].ceoRealized))
      ceoStartLabel.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[0].ceoRealized)) - 28)
      ceoStartInfo.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[0].ceoRealized)) - 60)
  }, 5000)
    
    setTimeout(() => {
      
      yScale.domain([newYMax, 0])
      
      yAxis.transition().ease(d3.easePolyOut)
          .duration(4000)
          .call(yAxisGenerator)
      xAxis.transition().ease(d3.easePolyOut)
          .duration(3000)
          .style("opacity", 0.2)
      
      workerLine.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("d", workerLineGenerator(dataset))
      workerStart.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("cy", yScale(dataset[0].workerIncome))
      workerStartLabel.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[0].workerIncome)) + 40)
      workerStartInfo.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[0].workerIncome)) + 65)
      workerNow.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("cy", yScale(dataset[10].workerIncome))
      workerNowLabel.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[10].workerIncome)) + 40)
      workerNowInfo.transition().ease(d3.easePolyOut)
          .duration(3000)
          .attr("y", (yScale(dataset[10].workerIncome)) + 65)
      
      ceoLine.transition().ease(d3.easePolyOut)
          .duration(4000)
          .attr("d", ceoLineGenerator(dataset))
      ceoStart.transition().ease(d3.easePolyOut)
          .duration(4000)
          .attr("cy", yScale(dataset[0].ceoRealized))
      ceoStartLabel.transition().ease(d3.easePolyOut)
          .duration(4000)
          .attr("y", (yScale(dataset[0].ceoRealized)) - 28)
      ceoStartInfo.transition().ease(d3.easePolyOut)
          .duration(4000)
          .attr("y", (yScale(dataset[0].ceoRealized)) - 60)
  }, 11000)
    
  setTimeout(() => {
      
      workerNowPercent
        .attr("y", yScale(dataset[10].workerIncome) + 75)
        .attr("fill", workerColor)
        .transition().duration(fade)
            .style("opacity", 1)
      
      ceoNowPercent
        .attr("y", (yScale(dataset[10].ceoRealized)) + 7)
        .attr("fill", ceoColor)
        .transition().duration(fade)
            .style("opacity", 1)
      
      workerStartInfo
          .transition().duration(fade)
            .style("opacity", 0)
      workerNowInfo
          .transition().duration(fade)
            .style("opacity", 0)
      
      ceoStartInfo
          .transition().duration(fade)
            .style("opacity", 0)
      ceoNowInfo
          .transition().duration(fade)
            .style("opacity", 0)
  }, 17750)

}

drawLineChart()






