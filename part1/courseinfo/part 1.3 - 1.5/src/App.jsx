// Exercise 1.1 - 1.2

// import React from 'react'
// import Header from './Header'
// import Content from './Content'
// import Total from './Total'

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course = {course}/>
//       <Content />
//       <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
//     </div>
//   )
// }

// export default App



//Exercise 1.3 - 1.5

import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Total from './Total'
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course  = { course.name }/>
      <Contents name = { course.parts[0].name } exercise = { course.parts[0].exercises } />
      <Contents name = { course.parts[1].name } exercise = { course.parts[1].exercises } />
      <Contents name = { course.parts[2].name } exercise = { course.parts[2].exercises } />

      <Total exercises1 = { course.parts[0].exercises } exercises2 = { course.parts[1].exercises } exercises3 = { course.parts[2].exercises }/>

    </div>
  )
}

export default App