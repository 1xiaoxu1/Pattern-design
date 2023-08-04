import React from "react";
import Css from './MessageBox.module.less'
import { MessageBoxObj } from './interface'

export default ({ title, onOk, onCancel, children, onFocus, isFlag }: MessageBoxObj) => {
  if (isFlag) {
    return (
      <div className={[Css['bigbox'], isFlag ? Css['maskLarge'] : Css['maskLittle']].join(' ')}>
        <div className={[Css['modal'], isFlag ? Css['abc'] : Css['def']].join(' ')}>
          <div className={Css['line']}>
            <h3>{title ? title : 'Modal Title'}</h3>
            <span onClick={() => onFocus()}>x</span>
          </div>
          <div className={Css['conent']}>
            {children ? children : 'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.'}
          </div>
          <div className={Css['button']}>
            <button className={Css['confirm']} onClick={onOk} style={{ backgroundColor: '#3c7eff', color: 'white', width: "80px", height: "30px", borderRadius: '5px', border: 'none', padding: "5px 10px" }}>确认</button>
            <button className={Css['cancel']} onClick={onCancel} style={{ color: '#3c7eff', width: "80px", height: "30px", borderRadius: '5px', border: '1px solid #666', padding: "5px 10px" }}>取消</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}