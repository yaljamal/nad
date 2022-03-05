import React, { Component } from 'react'
import Card from './card'
import './style/list.css'
import { ClipLoader } from "react-spinners";
import DataList from '../context/context'

export default function List() {

  return (
    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 listContanier' >
      <DataList.Consumer  >
        {([dataList, isLoadingList]) =>
          <>

            {isLoadingList && (
              <div className="text-center col-lg-12">
                <ClipLoader loading={isLoadingList} />
              </div>
            )}
            {dataList.map(elemaent => {
              return (
                <Card
                  title={elemaent.title}
                  link={elemaent.link}

                />
              )

            })

            }
          </>
        }
      </DataList.Consumer>
    </div>
  )

}
