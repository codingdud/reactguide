const Description=["Fundamental","core","Crucial"]
import reactImage from "../../assets/react-core-concepts.png"
import "./Header.css"

function getRandom(max){
    return Math.floor(Math.random()*max)
  }
  
export default function Header() {
    const Disc=Description[getRandom(Description.length)]
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {Disc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }