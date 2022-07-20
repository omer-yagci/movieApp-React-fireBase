import { useLocation } from "react-router-dom";
const MoveDetail = () => {
  const location = useLocation();
  const results = location.state;
  const { title } = results;
  console.log(title);
  console.log(results);
  return <div>MoveDetail</div>;
};

export default MoveDetail;
