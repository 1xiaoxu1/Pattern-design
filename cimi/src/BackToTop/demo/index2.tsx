import React, { useEffect, useState } from 'react';
import BackToTop from '..';

export default function () {
  let [show, setShow] = useState(false);


  return (
    <div>
      自定义显示位置和内容
      <BackToTop show={true} bottom={100} right={80}>
        Up
      </BackToTop>
    </div>
  );
}
