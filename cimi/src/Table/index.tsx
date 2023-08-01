import React, { useMemo, FC, memo, } from 'react';
import './Table.module.less'
import { TableProps, TableStyle, NativeTableProps } from './interface';

const Table: FC<TableProps & NativeTableProps> = memo((props) => {
    console.log(props);

    const { type, columns, children, show,cell } = props;

    return (
        
            <table className={[ show ? 'table' : 'tables',cell?'tab':'tables'].join(' ')}>
                <thead >
                    <tr>
                        {
                            props.columns.map((item: any,) => {
                                return (
                                    <th >{item} </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                {
                    props.items.map((item: any) => {
                        return (
                            <tbody key={item.name}>
                                <tr className='title'>
                                    <td>{item.date} </td>
                                    <td> {item.name} </td>
                                    <td>{item.address} </td>
                                </tr>
                            </tbody>
                        )
                    })

                }
            </table>
       
    );
});

export default Table;
