import React, { useState } from "react";
import AppRouter from "./router";

function App() {
  const [isLoggin, setIsLoggin] = useState<Boolean>(false);

  return <AppRouter isLoggin={isLoggin} />;
}

export default App;
