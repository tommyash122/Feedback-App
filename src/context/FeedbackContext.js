import {createContext, useState, useEffect} from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEditObj, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback().then(_ => (console.log('Successfully fetched data!')))
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')

        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }


    // Delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter(
                (item) => item.id !== id)
            )
        }
    }

    //update feedback
    const updateFeedback = async (id, upditem) => {
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upditem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) =>
                (
                    item.id === id ? {...item, ...data} : item
                )
            )
        )
    }

    // Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    return (<FeedbackContext.Provider value={{
            feedback: feedback,
            feedbackEditObj: feedbackEditObj,
            isLoading: isLoading,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            updateFeedback: updateFeedback
        }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext