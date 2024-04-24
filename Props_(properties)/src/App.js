import './App.css';
import Header from './Header';
import Card from './Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card title="Windows Operating System" 
            description="Developed by Microsoft, Windows is a widely used operating system for personal computers, laptops, and tablets." 
            titleCss="title1"
            discriptionCss="discription1"></Card>

      <Card title="macOS" 
            description=" macOS is the operating system developed by Apple Inc. for their line of Macintosh computers." 
            titleCss="title2"
            discriptionCss="discription2"></Card>

      <Card title="Linux" 
            description="Linux is an open-source operating system kernel that serves as the foundation for various Unix-like operating systems." 
            titleCss="title3"
            discriptionCss="discription3"></Card>

      <Card title="Android" 
            description=" Android is an open-source operating system developed by the Open Handset Alliance and managed by Google."
            titleCss="title4"
            discriptionCss="discription4"></Card>

      <Card title="RTOS (Real-Time Operating System)" 
            description="RTOS is an operating system specifically designed to meet the stringent requirements of real-time systems, where timely and predictable execution of tasks is crucial" 
            titleCss="title5"
            discriptionCss="discription5"></Card>
    </div>
  );
}

export default App;
