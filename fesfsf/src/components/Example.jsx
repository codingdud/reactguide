import TabButten from "./TabButten.jsx";
import { EXAMPLES } from "../data.js"
import { useState } from "react";
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";
export default function Example() {
    const [tc, setTc] = useState();
    function handleClick(sb) {
        setTc(sb)
        console.log(sb)
    }
    console.log("app components")

    var tabContent = <p>please select topic!</p>
    if (tc) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[tc].title}</h3>
            <p>{EXAMPLES[tc].description}</p>
            <pre><code>{EXAMPLES[tc].code}</code></pre>
        </div>);
    }
    return (
        <Section title="Examples" id="examples">
            <Tab 
                Container="menu"
                buttons={<>
                <TabButten
                    isSelected={tc === "components"}
                    onSelect={() => handleClick("components")}>Component</TabButten>
                <TabButten
                    isSelected={tc === "jsx"}
                    onSelect={() => handleClick("jsx")}>Jsx</TabButten>
                <TabButten
                    isSelected={tc === "props"}
                    onSelect={() => handleClick("props")}>Probs</TabButten>
                <TabButten
                    isSelected={tc === "state"}
                    onSelect={() => handleClick("state")}>State</TabButten>
            </>}>
                {tabContent}
            </Tab>
           

        </Section>
    )
}