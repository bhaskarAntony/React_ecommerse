import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/categories.css'
import { useNavigate } from 'react-router-dom';

function Catagories() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]  =useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchCategories = async () =>{
            const URL = "http://localhost:3000/categories"
            try{
                const responce = await axios.get(URL);
                setData(responce.data);
                setIsLoading(false);
            }
            catch (error){
                console.log(error);
                setError(error);
                setIsLoading(true);
            }
        };
        fetchCategories();

    },[])
    if(isLoading){
        return( 
        <div>
            <h1>Loading..</h1>
            </div>
            )
    }
    if (error) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <div>
      <div className='container-fluid'>
      <div className="row">
      {data.map(item => (
         <div className=" col-6 col-md-3 col-sm-4 col-lg-2 text-center">
            <div className="item mt-3" onClick={()=>navigate(`/products/${item.name}`)}>
            <img src={item.image} alt="image" />
             <p key={item.id}><b>{item.name}</b></p>
            </div>
         </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Catagories
