import React, { useState } from "react"
import MessageBox from '../MessageBox'
export default () => {
  let [flag, setFlag] = useState(false)
  let changeShow = () => {
    console.log("关闭事件触发了")
    setFlag(!flag)
  }
  return (
    <div>
      <MessageBox title="Modal Title" isFlag={flag} onOk={() => {
        setFlag(false)
      }}
        onCancel={() => { setFlag(false) }}
        onFocus={() => { changeShow() }}
      >
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
      </MessageBox>
      <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', width: "80px", height: "30px", borderRadius: '5px', border: 'none', padding: "5px 10px" }}>点击显示</button>
    </div>
  )
}

// 父元素声明响应式数据  子元素根据父元素传递的响应式数据