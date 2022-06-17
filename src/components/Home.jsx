import ListData from "./ListData";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: students } = useFetch('http://localhost:8000/students')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { students && <ListData students={students} /> }
    </div>
  );
}
 
export default Home;