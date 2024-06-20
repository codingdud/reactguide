import { CORE_CONCEPTS } from "../data.js"
import CoreConcept from "./CoreConcept"
export default function CoreConcepts(){
    return(<section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts)=><CoreConcept key={concepts.title} {...concepts} />)}
          </ul>
        </section>)
}