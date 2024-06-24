import Card from "./Card";
import Calculator from ".././assets/calculator.png";
import musicPlayer from ".././assets/music-player-js.png";
import notes from ".././assets/notes-js.png";
import tictactoe from ".././assets/tic-tac-toe-js.png";
import todolists from ".././assets/to-do-lists-js.png";
const JavaScript = () => {
  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 pb-96">
      <Card
        projectName="Notes"
        liveLink="https://notes-16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/JavaScript-Projects/tree/main/Notes"
        src={notes}
        title="Notes App"
        des="User can Create Notes, Delete Notes, Change Color of the notes and Change Poistion where user want"
        tags="Html, CSS, Javascript"
      />
      <Card
        projectName="To Do Lists"
        liveLink="https://to-do-list-16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/JavaScript-Projects/tree/main/To-Do-List"
        src={todolists}
        title="To Do Lists App"
        des="User can Create,Update,Delete to-do-lists"
        tags="Html, CSS, Javascript"
      />

      <Card
        projectName="Music Player"
        liveLink="https://music-player-16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/JavaScript-Projects/tree/main/Music-Player"
        src={musicPlayer}
        title="Music Player"
        des="User can Forward,Backward & Like the Songs"
        tags="Html, CSS, JS"
      />

      <Card
        projectName="Tic Tac Toe"
        liveLink="https://tic-tac-toe-16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/JavaScript-Projects/tree/main/tic-tac-toe"
        src={tictactoe}
        title="Tic Tac Toe App"
        des="Play Tic-Tac-Toe"
        tags="Html, CSS, Javascript"
      />
      <Card
        projectName="Calculator"
        liveLink="https://calculator-16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/JavaScript-Projects/tree/main/Calculator"
        src={Calculator}
        title="Calculator"
        des="Just a Small Calculator App"
        tags="Html, CSS, JavaScript"
      />
    </div>
  );
};

export default JavaScript;
