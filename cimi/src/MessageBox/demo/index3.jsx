import React, { useState } from "react"
import MessageBox from '../MessageBox'
export default () => {
  let [flag, setFlag] = useState(false)
  let [flag1, setFlag1] = useState(false)
  let changeShow = () => {
    console.log(flag);
    setFlag(!flag)
  }
  let changeFlag = () => {
    console.log(flag);
    setFlag1(!flag1)
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '300px',
    }}>
      <div>
        <MessageBox title={
          <div style={{ textAlign: 'left' }}>
            Modal Title
          </div>
        } isFlag={flag} onOk={() => {
          setFlag(false)
        }} onCancel={() => { setFlag(false) }}
          onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
        >
          You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
        </MessageBox>
        <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', width: "80px", height: "30px", borderRadius: '5px', border: 'none', padding: "5px 10px" }}>Left Title</button>
      </div>

      <div>
        <MessageBox title={
          <div style={{ textAlign: 'center' }}>
            Modal Title
          </div>
        } isFlag={flag1} onOk={() => {
          setFlag1(false)
        }} onCancel={() => { setFlag1(false) }}
          onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
        >
          You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
        </MessageBox>
        <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', width: "80px", height: "30px", borderRadius: '5px', border: 'none', padding: "5px 10px" }}>Center Title</button>
      </div>
    </div>
  )
}