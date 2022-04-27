import TaskList from "./components/task";
import Box from "./components/box";
import Footer from "./components/footer";
function App() {
  return (
    <>
    <Box></Box>
    <TaskList name = "Clean Up Bedroom"></TaskList>
    <TaskList name = "buy Some Milk"></TaskList>
    <TaskList name = "Jogging"></TaskList>
    <TaskList name = "Learn Reat"></TaskList>
    <TaskList name = "Doing Exsersiece"></TaskList>
    <Footer total = "5"></Footer>
    </>
  );
}

export default App;
