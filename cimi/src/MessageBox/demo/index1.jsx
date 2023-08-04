import React, { useState } from "react"
import MessageBox from '../MessageBox'
export default () => {
  let [flag, setFlag] = useState(false)
  let changeShow = () => {
    console.log(flag);
    setFlag(!flag)
  }
  return (
    <div>
      <MessageBox
        isFlag={flag}
        onOk={() => {
          setFlag(false)
          console.log('触发确认按钮');
        }}
        nCancel={() => { setFlag(false); console.log('触发取消按钮'); }}
        onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
      >
      </MessageBox>
      <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', width: "80px", height: "30px", borderRadius: '5px', border: 'none', padding: "5px 10px" }}>点击显示</button>
    </div>
  )
}