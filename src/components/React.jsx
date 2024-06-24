import Card from "./Card";
import addressBookReact from "../assets/address-book-react.png";
import memeGeneratorApp from "../assets/meme-generator-react.png";
import shoppingCart from "../assets/shopping-cart-react.png";
import ticTacToe from "../assets/tic-tac-toe-react.png";
import toDoLists from "../assets/to-do-lists-react.png";

const React = () => {
  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 pb-96">
      <Card
        projectName="Address Book"
        liveLink="https://address-book-r16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Beginner/Address-Book"
        src={addressBookReact}
        title="Address Book App"
        des="To manage contacts, use the Add Contact button to input details the Edit button to update them and the Delete button to remove them while the search bar helps filter contacts by name or other criteria"
        tags="React,Tailwind CSS,Modal"
      />
      <Card
        projectName="Meme Generator"
        liveLink="https://meme-generator-r16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Beginner/Meme-Generator"
        src={memeGeneratorApp}
        title="Meme Generator App"
        des="Create Memes & Share"
        tags="React,Tailwind CSS,Meme Api,Axios"
      />
      <Card
        projectName="Shopping Cart"
        liveLink="https://shopping-cart-r16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Beginner/Shopping-Cart"
        src={shoppingCart}
        title="Shoping Cart App"
        des="User can add items in cart ,delete items from cart and also can see Total Price and Quantity"
        tags="React, React Redux, Tailwind CSS, shopping Items Api, Axio"
      />
      <Card
        projectName="Tic-Tac-Toe"
        liveLink="https://tic-tac-toe-r16.netlify.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Beginner/Tic-Tac-Toe"
        src={ticTacToe}
        title="Tic-Tac-Toe"
        des="Play Game"
        tags="React, Tailwind"
      />
      <Card
        projectName="TO-DO-Lists"
        liveLink="https://todolists-r16.vercel.app"
        githubLink="https://github.com/DesaiVishal-16/React-Projects/tree/main/Beginner/TO-DO-Lists"
        src={toDoLists}
        title="TO-DO-Lists App"
        des="In the tasks app, utilize the 'Add Tasks' button to input details, 'Edit' to update them, 'Delete' to remove tasks, and the search bar to filter by name or criteria."
        tags="React, Tailwind"
      />
    </div>
  );
};

export default React;
