import React, {  FC, useState, useRef } from 'react';
// import { RightOutlined} from '@ant-design/icons';
import { CollapseProps } from './interface';
import css from './Collapse.module.less'
const Collapse: FC<CollapseProps> = ((props) => {
    const {  height, options, state } = props;
    let [view, setView] = useState(false)
    let [active, setActive] = useState(0)
    let [num, setNum] = useState(0)
    let refs = useRef<(HTMLDivElement | null)[]>([]);
    const Collapse = (res: any, index: any) => {
        setActive(res)
        if (res === active) {
            setView(!view)
            console.log(view);
        }
        if (!state) {
            if (refs.current[index]!.style.height == "") {
                refs.current[index]!.style.height = height + "px"
                console.log(refs.current[index]?.style.height);
                return
            }
            if (refs.current[index]!.style.height === height + "px") {
                console.log(123);

                refs.current[index]!.style.height = ""
                console.log(refs.current[index]?.style.height);
            }
        }
        if (state) {
            setNum(index)
        }
    }
    return (
        <div className={css.container}>
            {
                options.map((item: any, index: any) => {
                    return (
                        <>
                            <div className={css.title} onClick={() => Collapse(item.key, index)} key={item.key}>
                                {item.title}
                                {/* <RightOutlined style={{ float: "right", lineHeight: "60px", marginRight: "10px" }} /> */}
                            </div>

                            <div className={css.content} ref={element => { refs.current[index] = element }} style={state ? { height: index == num ? height + "px" : "" } : undefined} >{item.children}</div>
                        </>

                    )
                })
            }

        </div >
    );
});

export default Collapse;
