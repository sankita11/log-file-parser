import React from 'react';
import { PageByCounts } from '../interfaces/Page';

export type PageViewProps = {
  allViews: PageByCounts[],
  viewType: string 
}

const PageViewTable: React.FC<PageViewProps> = ({
  allViews,
  viewType
}: PageViewProps) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Page</th>
          <th scope="col"><mark>{viewType}</mark>Views</th>      
        </tr>
      </thead>
      <tbody>
        {
          allViews.map((eachView, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{eachView.pageName}</td>
                <td>{eachView.visitCount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )

}


export default PageViewTable