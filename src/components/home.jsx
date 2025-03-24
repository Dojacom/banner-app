import { useState } from "react";

const activities = [
    {
      text: "I love Coding",
      text2: 'Building apps with React is my favorite hobby',
      bgColor: "#e74c3c",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      text: "Playing Racing Car Games",
      text2: 'Playing of games reduce stress',
      bgColor: "#e74c3c",
      image: "https://images.unsplash.com/photo-1727166827019-f82eb1eb1cc1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      text: "Reading About Programming",
      text2: "Love gaining insight about codes",
      bgColor: "#3498db",
      image: "https://media.istockphoto.com/id/1488225567/photo/womans-hand-working-with-laptop-and-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=DbQ6E97AP6LDwAzZN80l_FU2RVRCcSFtia67lqahQOc="
    },
    {
      text: "Exploring Minimalist Design",
      text2: "-",
      bgColor: "#2ecc71",
      image: "https://images.unsplash.com/photo-1610565463065-62a684aea256?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW1hbGlzdCUyMHVpJTIwZGVzaWdufGVufDB8fDB8fHww"
    }
  ];
function Home(){

    const [index, setIndex] = useState(0);

    const handleNextActivity = () => {
        setIndex((prevIndex) => (prevIndex + 1) % activities.length);
      };
    

    //const [bgColor, setBgColor] = useState("#3498db") // Default blue background



    return (
    <>
    {/* Banner Section */}
        <div className="banner" style={{ backgroundColor: activities[index].bgColor }}>
        <div>
            <h1>{activities[index].text}</h1>
            <p>{activities[index].text2}</p>
        </div>

        <div>
        <img src={activities[index].image} alt="Activity" width={400} height={200}/>
        </div>
           
      
        </div>
         {/* Button to Change Activity */}
        <div>
        <button
          onClick={handleNextActivity}
          >
          What else do I enjoy doing? 🤔
        </button>
            
        </div>
    </> 
        );
    
}

export default Home;