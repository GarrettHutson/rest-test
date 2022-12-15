//************ImPORTS **********************/
import { useState, useEffect } from "react";
import Form from "./components/Form"
import Nav from "./components/Nav";
import styled from "styled-components"


//**********STYLES  *********************/
const Body = styled.main`display:flex; flex-direction:column; align-items:start; background-color: rgb(253 186 116); height:1500px; `

function App() {
    //*****************STATE ******************/
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [data, setData] = useState([])
    const [add, setAdd] = useState(false)
    const [display, setDisplay] = useState(false)
    const [id, setId] = useState(null)
    const [getOne, setGetOne] = useState({climb: '', _id: '', grade: '' })


    //**********FUNCTIONS *******************/
    const getURL = "http://localhost:4000/api/"
    const ageUpdate = (event) => {
       let el=event.target.value
        setAge(el.toLowerCase())
    }
    const nameUpdate = (event) => {
        let el = event.target.value
        setName(el.toLowerCase())
    }
    useEffect(() => {

        fetch(`${getURL}getAll`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [id, add])


    const handleSubmit = (event) => {
       
       const el=document.getElementById('climb')
       const el1 =document.getElementById('grade')
       
    
       
       el.value = ''
        setName('')
      
        el1.value = ''
        setAge('')
        event.preventDefault();
        setAdd(prev => !prev)
        return fetch(`${getURL}/post`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                climb: name,
                grade: age
            })
        })
      

    }
    const handleGet = () =>{ 
        setDisplay(prev => !prev)
        console.log(data)
    }

    const handleGetOne = () => {
        // document.getElementById('id').value = ''

        fetch(`${getURL}getOne/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => setGetOne(data))
    }

    const handleDelete = (event, id) => {
        setId(id)
        setGetOne(prev => !prev)
        setAdd(prev => !prev)
        fetch(`${getURL}delete/${id}`, {
            method: 'DELETE',
        })
    }
    const handleId = (event) =>{
        data.forEach(obj =>{
            console.log(obj.climb,event.target.value,id)
            if (obj.climb === event.target.value) {
                 
                   setId(obj._id)
            } 
         })
    } 
    
    const person = data.map((person) => <li onClick={(event) => handleDelete(event, person._id)}>{person.climb} </li>)
    //******************return ********************* */

    return (
<>
<Body>
            <Nav />
            <Form 
            nameUpdate={nameUpdate} 
            handleSubmit={handleSubmit} 
            ageUpdate={ageUpdate} 
            handleId={handleId} 
            handleGet={handleGet} 
            person={person} 
            display={display} 
            handleGetOne={handleGetOne} 
            getOne={getOne} 

                
            />

        </Body>

</>
        

    )
}
export default App;
