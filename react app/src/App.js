import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="container navbar">
            <div class="flex">
                <div class="logo lead mx-4">
                    <h2>NHS REACT</h2>
                    <p class="sm"><em>Oluduyilemi Precious</em></p>
                </div>
                <nav>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="Blog.html">Blog</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="interest.html">Interest</a></li>
                        <li><a href="FAQ.html">FAQ</a></li>
                        <li><a href="quotes.html">Quotes</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
      <section class="showcase">
        <div class="container grid">
          <div class="showcase-text">
            <h3 class="lg">Welcome.</h3>
            <p class="sm">Hi, my name is <strong>Oluduyilemi Precious Shekinah</strong>, and I am a Software Developer. This is my react project for N.H.S
            </p>
            <a href="index.html" class="btn btn-outline">Read More</a>
          </div>
          <div className="showcase-form card">
            <img src="/KOREDE.png " alt="mypicture" srcset="" />
          </div>
        </div>
      </section>
      <footer>
        <div class="container grid"> 
        </div>
        <p class="mx-2 container text-center py-1">Oluduyilemi Precious Shekinah, 21/0163, Copyright &copy; 2022.</p>
    </footer>
    </div>
  );
}

export default App;
