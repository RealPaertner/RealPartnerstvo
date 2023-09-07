'use client';

import React from 'react'
import "./Blocks.scss"

const Blocks = () => {

  const [text, Setext] = React.useState([
    { text1: "13", span: "млн человек", text2: "Крупнейший город в Европе" },
    { text1: "ТОП-3", text2: "Один из крупнейших потребительских рынков в Европе" }
  ])
  const [text2, Setext2] = React.useState([
    { text1: "ТОП-5", text2: "Одна из крупнейших городских экономик мира" },
    { text1: "ТОП-25", text2: "Городов мира в рейтинге привлекательности для иностранных инвестиций" },
  ])
  return (
    <div className='wrapper1'>
      <div className="head"><span>01 &nbsp;</span>Почему Москва?</div>
      <div className="wrapper-item">
        <div className="wrapperItem1">
          {
            text.map((text, index) => <div key={index} className='block'>
              <h2>{text.text1} <span>{text.span}</span></h2>
              <p>{text.text2}</p>
            </div>)
          }
        </div>
        <div className="wrapperItem2">
          {
            text2.map((text, index) => <div key={index} className='block'>
              <h2>{text.text1} <span>{text.span}</span></h2>
              <p>{text.text2}</p>
            </div>)
          }
        </div>

      </div>
    </div>
  )
}

export default Blocks;
