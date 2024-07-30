class App {
  private h1;

  constructor(heading: string) {
    this.h1 = document.createElement("h1");
    this.h1.innerHTML = heading;
    document.body.appendChild(this.h1);
  }
}

export default App;
