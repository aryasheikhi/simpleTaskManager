import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeRole, darkTheme } from '../redux/actions';

const Menu = () => {
  const role = useSelector(state => state.role);
  const possibleRoles = useSelector(state => state.possibleRoles);
  const possibleFilters = useSelector(state => state.possibleFilters);
  const dispatch = useDispatch();
  const selectedFilter = useSelector(state => state.filterBy);

  function chooseListType(e) {
    const element = e.target;
    element.classList.toggle('activated');
    dispatch(changeFilter(element.name))
  }
  function activate(e) {
    dispatch(changeFilter(e.target.name))
  }

  const handleRoleDropdown = (e) => {
    const dropdown = document.getElementById('roleDropdown').classList.toggle('invisible');
  };

  return (
    <div className="menu">

      <div className="status-section">

        <div className="greeter">

          <span className='greeter-username'>
            Welcome
          </span>

          <div className='greeter-userrole'>
            <button onClick={handleRoleDropdown}>
              {role}
            </button>

            <div id='roleDropdown' className='invisible'>
              <ul>
                {possibleRoles.map((item, index) => {
                  if (item !== role) {
                    return (
                      <li key={index}>
                        <a onClick={e => {
                          dispatch(changeRole(item))
                          document.getElementById('roleDropdown').classList.toggle('invisible')
                        }}>{item}</a>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>

          </div>

        </div>



        <div className="menu-list">
          {
            possibleFilters.map((filter, index) => {
              return <div key={index} className='menu-list-item'>
                <button name={filter} className={`menu-list-button ${filter === selectedFilter && 'activated'}`} onClick={e => activate(e)}>{filter}</button>
              </div>
            })
          }

        </div>

      </div>
    </div>
  );
}

export default Menu;
