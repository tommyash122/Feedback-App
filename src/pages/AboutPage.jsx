import Card from "../components/shared/Card";
import {Link} from "react-router-dom"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this page</h1>
                <p>This is a React app to leave feedback for a product or a service.</p>
                <p>Version: 1.0.0</p>

                <p>
                    <Link to="/">Back to Home page</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage