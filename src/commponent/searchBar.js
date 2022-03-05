import React, { Component } from 'react'
import './style/searchBar.css'
import DataList from '../context/context'

export default function SearchBar() {
  return (
    <div className='searchBarContanier col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <a href="https://en.wikipedia.org/wiki/Special:Random"
        className='col-xs-12 col-sm-12 col-md-12 col-lg-12'
        target="_blank"
      > Click here for a random article {"  "}
        <span className="glyphicon glyphicon-new-window">
        </span>
      </a>
      <DataList.Consumer>
        {([
          dataList,
          isLoadingList,
          searchValue,
          getSearchResult,
          handleSearchValue,
          clear
        ]) => <>


            <div className=' col-xs-12 col-sm-12 col-md-6 col-lg-6'>

              <input
                onChange={(event) => { handleSearchValue(event.target.value) }}
                onKeyPress={(event) => {
                  if (event.keyCode === 13 || event.key == 'Enter') getSearchResult()
                }}
                className="searchBar"
                type="text"
                name="searchValue"
                value={searchValue}
                placeholder='Search Input  EX : react'
              />
              {
                searchValue != '' &&
                <span className='clear'
                  onClick={() => {
                    clear()

                  }}

                >
                  X
                </span>
              }
            </div>
          </>}
      </DataList.Consumer>
    </div >
  )

}
