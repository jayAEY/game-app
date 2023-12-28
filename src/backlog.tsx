import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const Backlog = (props) => {
  let backlogExample = [
    "The Legend of Zelda: Ocarina of Time",
    "The Legend of Dragoon",
    "Soulcalibur",
    "Baldur's Gate XIII",
    "The Guy Game",
    "Super Mario Odyssey",
    "Perfect Dark",
    "Metroid Prime",
  ];

  // props.setBacklog(backlogExample);

  // let tasks = [];
  // let newTaskHTML = "";

  // function renderTasks() {
  //   if (localStorage.getItem("tasks")) {
  //     tasks = localStorage.getItem("tasks").split(",");
  //   }
  //   if (tasks.length > 0) {
  //     todosection.style.display = "block";
  //   }
  //   tasksHTML();
  // }

  // window.onload = renderTasks();

  // function tasksHTML() {
  //   newTaskHTML = "";
  //   tasks.forEach((task) => {
  //     let addHTML = `<li class="task" id="${task}">
  //                      ${task}
  //                     <input
  //                     class="taskcheckbox"
  //                     type="checkbox"
  //                     />
  //                     </li>`;
  //     newTaskHTML += addHTML;
  //   });
  //   taskList.innerHTML = newTaskHTML;
  //   taskList.style.display = "flex";
  // }

  // function addTask(btn) {
  //   let task = btn.previousElementSibling.value.trim();
  //   todosection.style.display = "block";
  //   tasks.push(task);
  //   localStorage.setItem("tasks", tasks);
  //   taskList.style.display = "flex";
  //   searchList.style.display = "none";
  //   renderTasks();
  // }

  // function searchTask(btn) {
  //   let search = btn.previousElementSibling.value.trim();
  //   if (search === "") {
  //     taskList.style.display = "flex";
  //     searchList.style.display = "none";
  //   } else {
  //     let searchHTML = "";
  //     taskList.childNodes.forEach((task) => {
  //       if (task.innerText.includes(search)) {
  //         searchHTML += task.outerHTML;
  //       }
  //     });
  //     taskList.style.display = "none";
  //     searchList.style.display = "flex";
  //     searchList.innerHTML = searchHTML;
  //   }
  // }

  // function deleteTasks() {
  //   let taskListArr = Array.from(taskList.children);
  //   let searchListArr = Array.from(searchList.children);

  //   let newTasks = [];

  //   for (let i = 0; i < taskListArr.length; i++) {
  //     if (!taskListArr[i].lastElementChild.checked) {
  //       newTasks.push(taskListArr[i].innerText.trim());
  //     }
  //   }

  //   if (searchList.style.display == "flex") {
  //     for (let i = 0; i < searchListArr.length; i++) {
  //       if (searchListArr[i].lastElementChild.checked) {
  //         let checkedElem = searchListArr[i].innerText.trim();
  //         newTasks.splice(newTasks.indexOf(checkedElem), 1);
  //       }
  //     }
  //   }

  //   tasks = newTasks;
  //   if (tasks.length == 0) todosection.style.display = "none";
  //   localStorage.setItem("tasks", tasks);
  //   tasksHTML();
  //   searchList.style.display = "none";
  // }

  // addButton.addEventListener("click", (e) => {
  //   if (taskInput.value.indexOf(",") !== -1 || taskInput.value.trim() === "") {
  //     taskInput.setCustomValidity("Please fill out this field (No commas)");
  //   } else {
  //     addTask(e.target);
  //   }
  // });
  // searchButton.addEventListener("click", (e) => searchTask(e.target));
  // deleteButton.addEventListener("click", (e) => deleteTasks());

  // window.onload = renderTasks();

  function selectGame(elem) {
    if (elem.children[0]) {
      elem.children[0].checked == true
        ? (elem.children[0].checked = false)
        : (elem.children[0].checked = true);
    }
  }

  return (
    // <Card className=" col-span-full lg:col-span-2 lg:col-start-2 m-20 rounded-none  shadow-2xl">
    <Card className="m-14 w-5/6 max-w-6xl rounded-none shadow-2xl">
      <CardHeader>
        <CardTitle className=" text-center text-2xl">Backlog</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col  space-y-4 items-center">
          <ol className="list-decimal w-10/12">
            {props.backlog.map((game, index) => {
              return (
                <li
                  className={
                    "flex  p-4 gap-1 border justify-between hover:bg-secondary"
                  }
                  onClick={(e) => selectGame(e.target)}
                  key={`${game} ${index}`}
                >
                  {game}{" "}
                  <input
                    type="checkbox"
                    className="accent-primary border-none"
                  ></input>
                </li>
              );
            })}
          </ol>
          <Button>Mark as completed</Button>
        </div>
      </CardContent>
      <CardFooter>{/* <Button>Add to Backlog</Button> */}</CardFooter>
    </Card>
  );
};
export default Backlog;
