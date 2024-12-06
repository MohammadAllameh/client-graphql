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


export { getLessonQuery }