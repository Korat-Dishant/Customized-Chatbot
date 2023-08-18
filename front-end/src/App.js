import { ChatContextProvider } from "./context/chatContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Admin from "./components/Admin"; // Import your Admin component
import Main from "./components/Main";

const App = () => {
  return (
    <ChatContextProvider>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </ChatContextProvider>
  );
};

export default App;
