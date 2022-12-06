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
  const oldYMax = 1000000
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
  
  const sourceLabel = bounds.append("text")
    .attr("x", -9)
    .attr("y", dimensions.boundedHeight + 45)
    .html("Data: Economic Policy Institute")
    .attr("class", "source-label")

// 5. Draw data

  let radius = 5
  let fade = 300
  
  let workerColor = "#8E6CAF"
  let ceoColor = "#80BE8A"
  
  const ceoLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(ceoRealized(d)))
    //.curve(d3.curveNatural)
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
    .attr("opacity", 0.5)
  
  const workerLineGenerator = d3.line()
    .x(d => xScale(dateAccessor(d)))
    .y(d => yScale(workerIncome(d)))
    .curve(d3.curveNatural)
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
    .attr("opacity", 0.5)
  
  const startLine = bounds.append("line")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", yScale(dataset[0].workerIncome))
    .attr("y2", yScale(dataset[0].ceoRealized))
    .attr("stroke", "black")
    .attr("stroke-width", 2.5)
    .attr("stroke-dasharray", "10 5")
    .attr("class", "dataLine")
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
    .attr("fill", "black")
  const startLabel = bounds.append("text")
    .attr("x", 4)
    .attr("y", startLabelPosition + 17)
    .html("20x")
    .attr("class", "data-label")
    .attr("fill", "white")
  
  const worker1965Dot = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].workerIncome))
    .attr("r", radius)
    .attr("fill", workerColor)
  const worker1965Label = bounds.append("text")
    .attr("x", 7)
    .attr("y", dimensions.boundedHeight - 33)
    .html("$41,900")
    .attr("fill", workerColor)
    .attr("class", "amount")
  const ceo1965Dot = bounds.append("circle")
    .attr("cx", 0)
    .attr("cy", yScale(dataset[0].ceoRealized))
    .attr("r", radius)
    .attr("fill", ceoColor)
  const ceo1965Label = bounds.append("text")
    .attr("x", 7)
    .attr("y", 50)
    .html("$924,000")
    .attr("fill", ceoColor)
    .attr("class", "amount")
  
  const worker2018Dot = bounds.append("circle")
    .attr("cx", xScale(dateAccessor(dataset[10])))
    .attr("cy", yScale(dataset[10].workerIncome))
    .attr("r", radius)
    .attr("fill", workerColor)
  const worker2018Label = bounds.append("text")
    .attr("x", dimensions.boundedWidth - 75)
    .attr("y", dimensions.boundedHeight - 36)
    .html("$56,200")
    .attr("fill", workerColor)
    .attr("class", "amount")
  const ceo2018Dot = bounds.append("circle")
    .attr("cx", xScale(dateAccessor(dataset[10])))
    .attr("cy", yScale(dataset[10].ceoRealized))
    .attr("r", radius)
    .attr("fill", ceoColor)
  
//  const info1965Bg = bounds.append("rect")
//    .attr("x", dimensions.boundedWidth / 2 - 85)
//    .attr("y", dimensions.boundedHeight / 2 - 100)
//    .attr("width", 170)
//    .attr("height", 200)
//    .attr("rx", radius)
//    .attr("ry", radius)
//    .attr("fill", "black")
//    .attr("class", "bg")
  const info1965 = bounds.append("text")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.boundedHeight / 2)
    .html("In 1965 CEOs made 20 times more than the average worker")
    .attr("class", "info-label")
    .attr("fill", "white")
    .style("text-anchor", "middle")
  
  // 6.5 More Peripherals
  
  console.log(dataset[0].workerIncome)
  
  const workerLineLabel = bounds.append("text")
    .attr("class", "label")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.boundedHeight - 35)
    .style("fill", workerColor)
    .text("worker pay")
  
  const ceoLineLabel = bounds.append("text")
    .attr("class", "label")
    .attr("x", 65)
    .attr("y", 0)
    .style("fill", ceoColor)
    .text("ceo pay")
  
  // 7. Interactions & Animations
    
//    setTimeout(() => {
//  }, 11000)
//    
//  setTimeout(() => {
//  }, 17750)

}

drawLineChart()






