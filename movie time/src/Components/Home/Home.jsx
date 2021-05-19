import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import ListTable from '../Table/Table'
import Footer from '../Footer/footer'
 
import Image4 from "../Footer/ok8.png"
const Home = () => (

      
      
                                    
 
    
 <div
        class="bg_image"
        style={{
          backgroundImage: `url(${Image4})`,
          backgroundSize: "cover",
          height: "105vh",
          marginLeft:"20px",
          color: "#f5f5f5"
        }}
      >
        <SearchForm /> 
   <ListTable /> 
 
    <Footer /> 
  </div>
)

export default Home
