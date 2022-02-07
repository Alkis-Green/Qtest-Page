export const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
