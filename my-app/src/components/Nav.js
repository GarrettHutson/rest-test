import styled from "styled-components"
import tw from "twin.macro"


const Navbar = styled.div.attrs({})`
&{
   nav {
${tw `flex justify-start h-24 items-center mr-auto`}
    }
    div{
        ${tw`ml-2 text-2xl border-t border-black  `}
    }
  
    i{
        ${tw`ml-16`}
    }
}
`
const Span=styled.span`text-decoration: underline; `

export default function Nav() {

    return (
        <Navbar>
           <nav>
           <i class="fa-solid fa-mug-hot fa-2x"></i>   
            <div><span>Grades</span> <Span>A</Span>ren't Real.</div>
           </nav>
        </Navbar>
    )



}