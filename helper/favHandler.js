const favHandler = async (meetUpId, isFav) => {
  //   console.log(meetUpId, isFav);

  const response = await fetch("/api/new-meetup", {
    method: "POST",
    body: JSON.stringify({ type: "update", id: meetUpId, isFav }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  // console.log(data);
};

export default favHandler;
