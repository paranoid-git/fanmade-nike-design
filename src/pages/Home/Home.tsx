import Scene from "../../canvas/Scene";

export default function Home() {
  return (
    <section data-page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          position: "relative",
          zIndex: 1,
          width: "50%",
          boxSizing: "border-box",
          float: "left",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "5rem",
            margin: "20px 0",
            textAlign: "center",
            color: "white",
          }}
        >
          Nike
        </h1>
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "2.5rem",
            textAlign: "center",
            color: "white",
          }}
        >
          Elevate your game.
        </p>
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          minHeight: "100vh",
          height: "100vh",
        }}
      >
        <Scene />
      </div>
    </section>
  );
}
