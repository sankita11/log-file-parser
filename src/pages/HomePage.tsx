import React, { useState } from 'react'
import FileUploadForm from '../components/FileUploadForm'
import PageViewTable from '../components/PageViewTable'
import { PageByIP } from '../interfaces/Page'
import { getUniqueViews, getTotalViews } from '../utils/calculatePageCounts';

const HomePage : React.FC = () => {
  const [pageViews, setPageViews] = useState<PageByIP>({})
 
  const handlePageViewChange = (pageView: PageByIP) => {
    setPageViews(pageView)
  }

  return(
    <>
      <div className="container">
        <FileUploadForm handlePageViewChange={handlePageViewChange}  />
      </div>
      { pageViews && Object.keys(pageViews).length > 0 && (
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <PageViewTable viewType="Total" allViews={getTotalViews(pageViews)}/>
            <PageViewTable viewType="Unique" allViews={getUniqueViews(pageViews)}/>
          </div>
      )}
      { (!pageViews || Object.keys(pageViews).length <= 0) && (
          <div className="container d-flex flex-column justify-content-between">
            <p>Please upload server log with the contents in following format</p>
            <p>/help_page/1 126.318.035.038</p>
            <p>/contact 184.123.665.067</p>
            <p>.....</p>
          </div>
      )}    
    </>
  )
}

export default HomePage;