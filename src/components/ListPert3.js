import {React, useEffect} from 'react';
import data from '../Pertanyaan.json'
import './ListPert.css'
import {Link} from 'react-router-dom';

function ListPert() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]
  )

  const handleKeyUp = () => {
    var temp, temp2, input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    if(input.value==""){
      temp = document.getElementById("list-box-pert");
      temp2 = document.getElementById("list-box-pert-inti");
      temp.style.display = "";
      temp2.style.display = "";
      window.scrollTo(0,0);
    }else if(input.value != ""){
      temp = document.getElementById("list-box-pert");
      temp2 = document.getElementById("list-box-pert-inti");
      temp.style.display = "none";
      temp2.style.display = "block";
      window.scrollTo(0,0);
    }
    filter = input.value.toUpperCase();
    table = document.getElementById("list-box-pert-inti");
    tr = table.getElementsByClassName("list-box-box1-pert");
  
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
    <div className='list-container-pert'>
    <h1 className='Daftarr-pert'>Daftar Pertanyaan</h1>
    <input className="search-pert" type="text" id="myInput" onKeyUp={handleKeyUp} placeholder="Cari Pertanyaan"></input>
    <div className='list-box-pert' id="list-box-pert">
        {data.slice(120, 180).map((data, index) => {
          return(
          <div>
          { index % 2 == 1 ?  
          <div className='list-box-box1-pert'>
            <div className='list-nama1-pert'  >
            <h2 className='pertaaa'>{data.data}</h2>
            </div>
            </div>
          :
          <div className='list-box-box1-pert' style={{backgroundColor:"#97DECE"}}>
            <div className='list-nama1-pert'  >
            <h2 className='pertaaa'>{data.data}</h2>
            </div>
            </div>
          }
          </div>
          )
        })
        }
    </div>
    <div className='list-box-pert-inti' id="list-box-pert-inti">
        {data.map((data, index) => {
          return(
          <div>
          { index % 2 == 1 ?  
          <div className='list-box-box1-pert'>
            <div className='list-nama1-pert'  >
            <h2 className='pertaaa'>{data.data}</h2>
            </div>
            </div>
          :
          <div className='list-box-box1-pert' style={{backgroundColor:"#97DECE"}}>
            <div className='list-nama1-pert'  >
            <h2 className='pertaaa'>{data.data}</h2>
            </div>
            </div>
          }
          </div>
          )
        })
        }
    </div>
    <div className='button-container-mid'>
    <div className='buttonpert'>
          <Link to='/DaftarPert2' className='navigation-pert'>
              Daftar Tanaman 2
          </Link>
      </div>
    <div className='buttonpert'>
          <Link to='/DaftarPert4' className='navigation-pert'>
              Daftar Tanaman 4
          </Link>
      </div>
    </div>
</div>
  );
}

export default ListPert;