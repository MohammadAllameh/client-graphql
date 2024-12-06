import { FunctionComponent } from "react";

const AddLesson: FunctionComponent = () => {
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="Lesson">Lesson: </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Group">Group: </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Teacher">Group: </label>
                    <input type="text" />
                </div>
            </form>
        </>
    );
}

export default AddLesson;