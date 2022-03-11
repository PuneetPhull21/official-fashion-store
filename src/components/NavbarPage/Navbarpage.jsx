import React, { useEffect, useState } from 'react';
import { HeaderTop, HeaderCenter } from '../HeaderPage'
import { product } from '../../_services';
import {Link} from 'react-router-dom';
function Navbarpage() {
  const [value, setvalue] = useState([]);
  useEffect(() => {
   NavbarPage()
  }, [])
  async function NavbarPage(){
    const result = await product.ProductCategories();
    console.log(result);
    setvalue(result.data.children_data);
  }
  return (
    <header className="main-header">
      <HeaderTop />
      <HeaderCenter />
      {value.length > 0 ?
        <nav className="bg-theme navbar navbar-expand-md">
          <div className="collapse navbar-collapse nav-custom" id="navbar-content">
            <ul className="navbar-nav mr-auto">
              {value.map((item, index) => (
              <li key={index} className={item.children_data.length > 0 ? "nav-item dropdown" :''} >
                  {
                    item.children_data.length > 0 ?
                      <Link to={'/products/'+ item.name} className="nav-link dropdown-toggle"   id="navbarDropdownmen" role="button" data-toggle="dropdown" >
                        {item.name}
                      </Link>
                      :
                      <li className="nav-item" >
                        <Link to={'/products/'+ item.name} className="nav-link"  >{item.name}</Link>
                      </li>
                  }
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownmen">
                    <div className="container-fluid">
                      <div className="row">
                        {item.children_data.map((items, index) => (
                          <div key={index} className="col-md-4">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <Link to={'/products/'+ item.name + '/' + items.name}className="nav-link parent" >{items.name}</Link>
                              </li>
                              {items.children_data.map((itemss, index) => (
                              <li key={index} className="nav-item">
                                <Link to={'/products/'+ item.name+ '/' + items.name + '/' + itemss.name} className="nav-link active"   >{itemss.name}</Link>
                              </li>))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </nav>
        : ''}
    </header>
  )
}


export { Navbarpage };