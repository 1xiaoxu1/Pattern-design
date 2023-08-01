//useMemo 用来缓存计算结果 依赖项发生变化时会重新计算
import React,{ memo, useMemo,FC ,useRef, Children, useEffect} from "react";
import './Notification.module.less'
import { NotProps,NotStyle,NotsProps} from './interface' ;

const Not: FC<NotProps & NotsProps> = memo((props) => {
    // console.log(props);
    
    const { type, width, height,duration,children } = props;
    const NotStyle = useMemo(() => {
        if (!type && type !== 'topLeft' ) {
            return 'navs';
        }
        return type as any;
    }, [type]);
    

    // 点击按钮出现
    function onchange(){
        if(divref.current){
            divref.current.hidden=false ;
        }
        console.log(divref);
        // 如果duration存在 执行延时器
        if(duration){
            setTimeout(()=>{
                if(divref.current){
                    divref.current.hidden= true;
                } 
            },duration)
        }
    }
    // 初始化的时候 隐藏
    useEffect(()=>{
        if(divref.current){
            divref.current.hidden=true
        }
    },[])
   
    const divref =useRef<HTMLDivElement>(null);
    //  点击x 消失
    function change(){
        // console.log(divref.current.hidden);
        if(divref.current){
            divref.current.hidden=true;
        }        
    }
    return (
         <div className="container">
            <button  className='button' onClick={()=>onchange()}>{children}</button>
            <div className={NotStyle} ref={divref}>
               <div className="error" onClick={()=>change()}>x</div>
               <h3>{props.message} </h3>
               <div>{props.description} </div>
            </div>
         </div>
    );
});

export default Not;
