
import { FaTrashAlt,FaPenSquare } from 'react-icons/fa';
import {FC,useState} from 'react';
type toDoProps = {};
const ToDo: FC <toDoProps> = ({}) =>{
    const [name, setName] = useState('');
    const [id, setId] = useState('');
        const toDoList = [
            {
                id:1,
                title:'PHP',
            },
            {
                id:2,
                title:'Ruby',
            },
            {
                id:3,
                title:'JavaScript',
            },
            {
                id:4,
                title:'Java',
            },
            {
                id:5,
                title:'Python',
            },
            {
                id:6,
                title:'C#',
            },
            {
                id:7,
                title:'C',
            }
        ];
        const [todos,setToDos] = useState(toDoList);
        const [disabledItems, setDisabledItems] = useState({}); 

        type todoType ={
            id:number;
            title:string;
            };
        const addNewToDoList = (title)=>{
            setToDos([...todos,{
                id: 8,
                title: title,
            }]);
            setName("");
        }
        const disabeData = (id)=>{
            setDisabledItems((prevState) => ({
                ...prevState,
                [id]: !prevState[id], // Toggle disabled state for the specific ID
            })); 
        }
        const removeItem = (id)=>{
            setToDos(
                todos.filter(item=>item.id !== id)
            );
        }
        const editItem = (id:number,name:string)=>{
            setName(name);
        }
    
    return (
        <>
            <div className="items-center w-[400px] space-y-3">
                <h1 className="font-bold">Todo List</h1>
                <div className="space-y-3">
                    <div className="flex gap-2">
                        <input type="text" value={name} onChange={event => setName(event.target.value)} className="w-full rounded-md border border-gray-300" />
                        <button className="text-white bg-black rounded-md py-1 px-3" onClick={() => addNewToDoList(name)}>Add</button>
                    </div>
                    <div className="">
                        <ul className='space-y-2'>
                            {todos.map((todo)=>(
                                <li key={todo.id} className={`flex bg-gray-200 gap-2 p-2 rounded-md hover:bg-gray-300 ${disabledItems[todo.id]?"line-through cursor-not-allowed opacity-50":""}`}>
                                    <input onClick={()=>disabeData(todo.id)} type="checkbox" /> {todo.title}  
                                    <div className="flex gap-2  ml-auto">
                                        <button className="px-2 py-1 bg-white rounded-sm hover:bg-white transition duration-200" onClick={()=>editItem(todo.id,todo.title)}><FaPenSquare /></button>
                                        <button  className="px-2 py-1 bg-red-500 text-white rounded-sm hover:bg-red-600 transition duration-200" onClick={()=>removeItem(todo.id)}><FaTrashAlt /></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ToDo;