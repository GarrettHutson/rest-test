import styled from "styled-components"

const StyledForm = styled.main`margin:30px 50px; display:flex; flex-direction:column; align-items:start;	background-color: rgb(253 186 116); height:1500px;`
const Formcon=styled.form`display:flex; flex-direction:column; align-items:start;`
const Searchcon=styled.div`display:flex; flex-direction:column; align-items:start;`
const Input=styled.input` border: 1px solid black; text-decoration:none; background:inherit; ::placeholder,
::-webkit-input-placeholder {
  color: black;
  opacity: %;
}

`;
 

const Button=styled.button`border: 1px solid black; margin:10px 0;`
const Ul=styled.ul``

const Div=styled.div`font-size: 20px; font-weight: bold;`

export default function  Form(props){
  return(
    <StyledForm>

    
    <Formcon onSubmit={(event) => props.handleSubmit(event)}>
    <h1>Join The Fight Below.</h1>
                    <Input id="climb" onChange={props.nameUpdate} type="text" placeholder="Climb" />
                    <Input id="grade" onChange={props.ageUpdate} type="text" placeholder="Grade" />
                    <Button type="submit">submit</Button>
                </Formcon>
                <Searchcon>
                <h1>See All Debunked Climbs.</h1>
                <Button onClick={props.handleGet}>Search All Climbs</Button>

       
               <Ul>
               {props.display ? props.person : null}
               </Ul>

                 <Input onChange={props.handleId} type="text" id="id" placeholder="ID" />
                 <Button onClick={props.handleGetOne}>Search</Button>
                <div>{props.getOne.climb}</div>
                </Searchcon>

   
    </StyledForm>
  )
}