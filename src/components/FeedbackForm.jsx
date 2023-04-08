import Card from "./shared/Card";
import Button from "./shared/Button";
import {useState, useContext, useEffect} from "react";
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEditObj, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEditObj.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEditObj.item.text)
            setRating(feedbackEditObj.item.rating)
        }
    }, [feedbackEditObj])

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters!")
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }


        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }

            if (feedbackEditObj.edit === true) {
                updateFeedback(feedbackEditObj.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }


            setText("")
        }


    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} selected={rating}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button isDisabled={btnDisabled} type="submit" version="secondary">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm