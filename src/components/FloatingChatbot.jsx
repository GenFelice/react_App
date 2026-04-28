import { useState } from 'react'
import { FaComments } from "react-icons/fa";
import { Button, Offcanvas } from 'react-bootstrap';
import Chatbot from './Chatbot';
import Loading from './Loading';

export default function FloatingChatbot() {
    const [show, setShow] = useState(false);
    
    return <>
        <Button 
            className="position-fixed bottom-0 end-0 m-3 rounded-circle"
            size="lg"
            onClick={() => {
                setShow(true)                
            }}
        >

            <FaComments />
        </Button>

        <Offcanvas 
            show={show}
            placement="end"
            name="floatingChatbot" 
            onHide={() =>
                setShow(false)
            }
        >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Chatbot />
            </Offcanvas.Body>
        </Offcanvas>
    </>
}