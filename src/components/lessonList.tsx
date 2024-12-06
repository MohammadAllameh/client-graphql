import { FunctionComponent } from "react";
import { useQuery } from '@apollo/client';

import { getLessonQuery } from "../queries/queries";

type lessonType = {
    name: string,
    id: string
}

const LessonList: FunctionComponent = () => {
    const { loading, error, data } = useQuery(getLessonQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <>
            {data.lessons.map(({ id, name }: lessonType) => (
                <div key={id}>
                    <ul>
                        <li>
                            {name}
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default LessonList;