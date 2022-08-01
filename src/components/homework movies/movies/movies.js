
import { useEffect, useState } from "react";
import './movies.css';

function Movies()
{
const [movies ,setMovies] = useState([])
const [searchW ,setSearchW]=useState("")

useEffect(() => {
GetData();
},[])

const GetData = async ()=> {

await fetch("https://api.tvmaze.com/shows").then(res => res.json())
.then(data => setMovies( data))
.catch ((err) => console.log("error"))
};

const movie = movies.filter((obj)=>{
return obj.name.toLowerCase().includes(searchW.toLowerCase())

});

return(
<div>
<div> <h1 className="Myheader"> All Movies </h1></div>
<div>
    <input type="text" placeholder="search here" className="myInputSearch" onChange={(e)=>{
        setSearchW(e.target.value)
    }} />
</div>
<div className="MoviesCardsContianer">
{movie.map(film => (
    <div key={film.id}>
        <div className="card"> 
        <img className="image" src={film.image.medium} alt="my Image" />
        </div>
<div> <a href={film.url} className="title">{film.name}</a> </div>
    </div>
))}
</div>

</div>

)

}

export default Movies;
