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


export { getLessonQuery, getTeacherQuery };