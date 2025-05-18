import React from 'react'

const Part = (props) => {
  
    // const t = [1, -1, 3]
    // t.push(5)
    // console.log(t.length)
    // t.forEach(value =>{
    //     console.log(value)
    // })

    // const t2 = t.concat(6)
    // console.log(t2  )

    // const m1 = t.map(value => value * 2)
    // const m2 = t2.map(value => '<li>' + value + '</li>')
    // console.log(m1)
    // console.log(m2)

    // const [first, second, ...rest] = t2
    // console.log(first, second)
    // console.log(rest)

    // functions

    // const sum = (p1,p2) => {
    //   return p1 + p2
    // }



  return (
    <div>
        <p>
            {props.part} {props.exercise}
        </p>
    </div>
  )
}

export default Part