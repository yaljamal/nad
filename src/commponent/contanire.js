import React, { useState } from 'react'
import SearchBar from './searchBar'
import axios from 'axios'
import './style/contanier.css'
import List from './list'
import DataList from '../context/context'

export default function Contanire() {

  const [dataList, handleSearchResult] = useState([])
  const [isLoadingList, handleLoadingList] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const clear = () => {

    handleSearchResult([])
    handleSearchValue('')
  }
  const getSearchResult = () => {
    handleSearchResult([])
    handleLoadingList(true)

    let api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${searchValue}`
    axios
      .get(api)
      .then((response) => {
        let titles = response.data[1]
        let linkes = response.data[3]
        let data = []
        for (let index = 0; index < titles.length; index++) {
          data.push({
            title: titles[index],
            link: linkes[index]

          })
        }
        handleSearchResult(data)
        handleLoadingList(false)

      }).catch(e => {
        handleLoadingList(false)

      })
  }
  const handleSearchValue = (value) => {
    setSearchValue(value)

  }

  return (
    <DataList.Provider
      value={[
        dataList,
        isLoadingList,
        searchValue,
        getSearchResult,
        handleSearchValue,
        clear
      ]}

    >


      <div className="row contanier">
        <SearchBar
          getSearchResult={getSearchResult}
          handleSearchValue={handleSearchValue}
          clear={clear}
        />
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <List />
        </div>
      </div>
    </DataList.Provider>

  )

}
