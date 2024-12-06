import { FunctionComponent } from "react";
import LessonList from "./components/lessonList";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddLesson from "./components/addLesson";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const App: FunctionComponent = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <h1>Hello World</h1>
          <LessonList />
          <AddLesson />
        </div>
      </ApolloProvider>

    </>
  );
}

export default App;