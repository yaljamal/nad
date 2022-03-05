import React, { Component } from 'react'
import Card from './card'
import './style/list.css'
import { ClipLoader } from "react-spinners";
import DataList from '../context/context'

export default function List() {

  return (
    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 listContanier' >
      <DataList.Consumer  >
        {([dataList, isLoadingList, searchValue,
          getSearchResult,
          handleSearchValue,
          clear,
          isFirstRender]) =>
          <>

            {isLoadingList && (
              <div className="text-center col-lg-12 noResult">
                <ClipLoader loading={isLoadingList} />
              </div>
            )}

            {dataList.length == 0 && isLoadingList == false && isFirstRender == false &&
              <div className="text-center col-lg-12 noResult">
                <label>No Result for this search </label>
              </div>
            }
            {dataList.length == 0 && isLoadingList == false && isFirstRender == true &&
              <div className="text-center col-lg-12 noResult">
                <label>Please use my solution</label>
              </div>
            }
            {dataList.map(elemaent => {
              return (
                <Card
                  title={elemaent.title}
                  link={elemaent.link}

                />
              )

            })}

          </>
        }
      </DataList.Consumer>
    </div>
  )

}
