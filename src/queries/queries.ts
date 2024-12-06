import { gql } from '@apollo/client';


const getLessonQuery = gql`
    query Lesson {
        lessons {
            id
            name
            group
        }
    }
`

const getTeacherQuery = gql`
    query Teachers {
        teachers {
            id
            name
        }
    }
`
//   mutation AddTodo($type: String!) {
//     addTodo(type: $type) {
const addLessonMutation = gql`
    mutation Addlesson($name: String!, $group: String!, $teacherId: ID!) {
        addlesson(name: $name, group: $group, teacherId: $teacherId) {
            id
            name
            group
        }
    }
`


export { getLessonQuery, getTeacherQuery, addLessonMutation };