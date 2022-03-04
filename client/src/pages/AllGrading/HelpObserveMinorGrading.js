import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
 
function HelpObserveMinorGrading() {

    const [data, setData] = useState([]);
     
    const getData = async () => { 

      const result = await axios.get("http://localhost:3001/courses/helpobserveminor");
      setData(result.data.reverse());
     } 
 
    useEffect(() => {
      getData();
    }, []);

  
     
    return (
         <div className="container">
           <h1 className="grading-courses text-center text-success mb-5 mt-4">รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก</h1>
            <div className="grading-row">
                  <table className="table table-striped">
                      <thead>
                        <th>H.N.</th>
                        <th>Patient Name</th>
                        
                        <th>Ward</th>
                        <th>Unit</th>
                      
                      </thead>
                        {
                          data.map((res) => {
                           return (
                            <tbody>
                            <td>{res.hn}</td>
                            <td>{res.patient_name}</td>
                            
                            <td>{res.ward}</td>
                            <td>{res.unit}</td>
                           
                            </tbody>    
                              )
                            })
                         }  
                </table>    
            </div>    
         </div>
    );
  }
 
export default HelpObserveMinorGrading;