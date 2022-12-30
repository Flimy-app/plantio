import React from 'react';
import './ListPlant.css';
import names from '../JSONISJSON.json'

function ListPlant() {
  const handleKeyUp = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("list-box");
    tr = table.getElementsByClassName("list-box-box");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("div")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }  
  };
  return (
    <div className='list-container'>
      <h1 className='Daftarr'>Daftar</h1>
      <input className="search-pert" type="text" id="myInput" onKeyUp={handleKeyUp} placeholder="Cari Tanaman"></input>
        <div className='list-box' id="list-box">
            {names.map((name, index) => {
              return(
              <div className='list-box-box'>
                <img src={name.foto} height="170px" width="230px" />
                <div className='list-nama'>
                <h2 className='namatanam' >{name.nama}</h2>
                </div>
              </div>
              )
            })
            }
        </div>
    </div>
  );
}

export default ListPlant;