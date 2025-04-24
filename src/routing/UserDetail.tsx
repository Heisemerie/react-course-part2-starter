import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams(); //extract parameter values from the URL
  console.log(params); //logs an object whos properties are URL the parameters

  const [searchParams, setSearchParams] = useSearchParams(); //search and update query string params
  console.log(searchParams.get("name")); //setSeachParams has a side-effect and should be called in event handlers or useEffect hook

  const location = useLocation(); //access current location
  console.log(location); //logs a location object (contains pathname and search properties)

  return <p>User {params.id}</p>;
};

export default UserDetail;
