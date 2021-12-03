import styled from 'styled-components'
import {useParams} from "react-router-dom"

const Trailer = (props) => {

    let { id } = useParams()
    console.log("id",id)
    return(
        <div>
           <Iframe 
                src={`https://www.youtube.com/embed/${id}`} 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
           >
           </Iframe>
        </div>
    )
}
const Iframe = styled.iframe`
    pointer-events: auto;
    width: 100%;
    height: 100vh;
}
`
export default Trailer