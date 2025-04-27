//Componente padre Home
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function Home() {
  const data = {
    nombre: "Ricardo Germán ",
    apellido: "Cortez",
    edad: 22,
    legajo: 61514,
    lenguajes: "Python, JS, C++",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F10%2F5a%2F31%2F105a3145eedaeeb10a5f87d609a409a8.jpg&f=1&nofb=1&ipt=eddad942653ca1ec6ee03bd453048e95b499b24cb8d6a75ca91ca28c483a6d34",
  };

  return (
    <>
      <Header />
      <Main datosAlumno={data} />
      <Footer />
    </>
  );
}

export default Home;
