// Practice1.jsx
const isLoggedIn = true;

function Practice1() {
  return (
    <>
      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}
    </>
  );
}

export default Practice1; // 여기서 Practice1을 내보냅니다.