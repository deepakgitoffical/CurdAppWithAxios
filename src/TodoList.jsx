import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
const TodoList = () => {
    const [num, setNum] = useState(1);
    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState([]);
    const [isEdit, setIsEdit] = useState(1);
    const [updateitem, setUpdateItem] = useState(false);

    const addItem = () => { 
        if (!inputData) {
            alert('enter an item')
        }
        else if (inputData && updateitem) { 
            setItem(item.map((element) => {
                if (element.id == isEdit) {
                    return {...element, name: inputData}; 
                } 
                return element; 
            }))
            setInputData('') 
            setUpdateItem(false)
        }
        else {
            setNum(num + 1)
            const allInputObj = { id: num, name: inputData }
            setItem([...item, allInputObj]);
            setInputData('');
        }
    };

    const delItem = (getId) => {
        const remaningItems = item.filter((ele) => {
            return (getId !== ele.id)
        });
        setItem(remaningItems);
    }
    // const filterItems = () => {
    //     const filterItem = item.filter((ele, index) => {
    //         if (isNaN(ele.name)) {
    //             return ele.name;
    //         } else {
    //             return (ele.name > 5)
    //         }
    //     });
    //     setItem(filterItem);
    // }

    const editItem = (id) => {
        let updatedItem = item.find((ele) => {
            return (ele.id == id);
        });
        setUpdateItem(true)
        setInputData(updatedItem.name);
        setIsEdit(id);
    }
    return (
        <div className='box'>
            <div className='input-box'>
 
                {/* <button onClick={filterItems} className='filterBtn'>Show &gt; 5</button> */}
                <input type="text" placeholder='input' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <ul>
                    {
                        item.map((element, index) => { 
                            return (
                                <li key={index} className='listParent'>
                                    <div className='list' >
                                        <span>{element.id}</span>
                                        <span>{element.name}</span>
                                        <div style={{ display: 'flex', }}>
                                            <span onClick={() => editItem(element.id)} style={{ color:'green', marginLeft:'10px'}}><MdOutlineEdit /></span>
                                            <span onClick={() => delItem(element.id)} style={{ color:'red', marginLeft:'10px' }} >  <MdDelete /></span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul> 
                    <button style={{border: 'solid'}} onClick={addItem}> {updateitem ? 'Update': 'Add' }</button> 
            </div>
        </div>
    )
}

export default TodoList