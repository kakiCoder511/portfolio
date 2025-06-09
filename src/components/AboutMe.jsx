// AboutMe.jsx
export default function IntroHeader() {
  return (
    <div
      style={{
        flex: 1,
        background: "#f8f6f1",
        color: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%", // 填滿 section
        width: "100%",
      }}
    >
      <h2>This is IntroHeader</h2>
      <p>Second section page</p>
    </div>
  );
}