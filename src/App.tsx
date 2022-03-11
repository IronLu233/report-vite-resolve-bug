import { RcButton } from "@ringcentral/juno/components/Buttons";
// import { RcButton } from "@ringcentral/juno";
import { RcThemeProvider } from "@ringcentral/juno";
import "./App.css";
console.log(RcButton);

function App() {
  return (
    <RcThemeProvider>
      <div className="css-dep">
        <RcButton>Button</RcButton>
      </div>
    </RcThemeProvider>
  );
}

export default App;
