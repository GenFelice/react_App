import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function IncrementButton() {
    const [clicked, setClicked] = useState(0)

    const onClickButton = function() {
        setClicked(clicked + 1)
    }

    return <Button onClick={onClickButton}>
        {clicked}
    </Button>
}