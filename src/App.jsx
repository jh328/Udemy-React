import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  function handleSelect(selectedButton) {
    // 선택된 버튼을 누르면 "Components", "JSX", "State"
    // 매개변수 전반에 받는 4개의 변수
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components 
              </TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX </TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props </TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State </TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
