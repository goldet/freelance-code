const RenderState = ({ error, loading, users, message }) => {
  if (error) {
    return <>{error}</>;
  } else if (loading) {
    return <>Loading...</>;
  } else if (users?.length === 0) {
    return (
      <>
        <p>{message}</p>
      </>
    );
  } else {
    return null;
  }
};

export default RenderState;
