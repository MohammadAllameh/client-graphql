import { ChangeEvent, FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { getTeacherQuery, addLessonMutation, getLessonQuery } from "../queries/queries";

type TeacherType = {
    name: string,
    id: string
}

const AddLesson: FunctionComponent = () => {
    const [name, setName] = useState<string>('');
    const [group, setGroup] = useState<string>('');
    const [teacherId, setTeacherId] = useState<string>('');
    const { loading, error, data } = useQuery(getTeacherQuery);
    const [addLesson] = useMutation(addLessonMutation);

    const onSubmitHandler = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name);
        console.log(group);
        console.log(teacherId);

        await addLesson({ variables: { name, group, teacherId }, refetchQueries: [{ query: getLessonQuery }] });

    }
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setTeacherId(event.target.value);
    };
    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data?.teachers[0] || '')
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Lesson">Lesson: </label>
                    <input type="text" name="lesson" value={name} onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="Group">Group: </label>
                    <input type="text" name="group" value={group} onChange={(event: ChangeEvent<HTMLInputElement>) => setGroup(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="Teacher">Teacher: </label>
                    <select name="teacherId" id="teacherId" value={teacherId} onChange={handleSelectChange} >
                        {
                            loading ? <option>Loading</option> : <></>
                        }
                        <option value="none" defaultValue='none'>none</option>
                        {data?.teachers?.map(({ id, name }: TeacherType) => {
                            return (
                                <option key={id} value={id}  >{name}</option>

                            )
                        })}
                        {/* <option value="kosar">kosar</option>
                        <option value="mohammad">mohammad</option>
                        <option value="ali">ali</option> */}
                    </select>
                </div>
                <button>
                    sumbit
                </button>
            </form>
        </>
    );
}

export default AddLesson;

