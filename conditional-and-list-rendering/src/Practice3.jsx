function Practice3() {

  const hasMessages = true;
  const message = "" //문자열이 오면 message 값 반환, 
  //flasy값이 들어오면 OR 연산자만 뒤의 값을 만환

 return (
    <>
      {hasMessages && <h2>You have new messages!</h2>}
      {/* 자바스크립트에서 AND 앞뒤로 truthy가 오면 뒤의 값을 반환 */}
      {message && <p>Message: {message}</p>}
      
      <p>
        Message: {message ?? <em>No message</em>}
      </p>
      <p>
        Message: {message || <em>Empty</em>}
      </p>
    </>
  )
}

export default Practice3;