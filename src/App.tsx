import { FunctionComponent } from "react";
import LessonList from "./components/lessonList";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddLesson from "./components/addLesson";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// if (process.env.NODE) {
// Adds messages only in a dev environment
loadDevMessages();
loadErrorMessages();
// }

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