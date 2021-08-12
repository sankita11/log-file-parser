import React,{ useRef, useState} from 'react';
import { PageByIP } from '../interfaces/Page';
import { convertToPageByIP } from '../utils/calculatePageCounts';

export type FileUploadFormProps = {
  handlePageViewChange: (pageView: PageByIP) => void
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({
  handlePageViewChange
}: FileUploadFormProps) => {
  
  let fileInput = useRef<HTMLInputElement>(null)
  let fileReader = useRef<FileReader>()
  
  const [fileErrorMsg, setFileErrorMsg] = useState('')

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const fileName = file.name;
    if( !fileName.match(/\.log$/) ){
      setFileErrorMsg("Unsupported file type")
      return;
    }

    fileReader.current = new FileReader()
    fileReader.current.onloadend = handleFileRead
    fileReader.current.readAsText(file)   
  }


  const handleFileRead = () => {
    const result = fileReader.current?.result
    if( result != null ){
      handlePageViewChange(convertToPageByIP(result))
    }      
  }

  const resetInput = () => {
    if( fileInput.current != null)
      fileInput.current.value = "";
      handlePageViewChange({})
  }
  
 
    return(
      <div>
        <form className="p-2">
          <div className="d-flex flex-column flex-md-row">
            <div className="m-3">
              <div className="d-flex flex-column">
                <label className="form-label">Upload server log</label>
                <input ref={fileInput} className="form-control file-input" type="file" onChange={handleFileUpload}/>
                <small>Supported file types: .log (Max Limit: 20MB)</small> 
                {fileErrorMsg && <div className="alert alert-danger mt-2">{fileErrorMsg}</div>}
              </div>
            </div>
            <div className="m-3 align-self-center">
              <button type="button" className="btn btn-secondary" onClick={resetInput}>Reset</button>
            </div>           
          </div>
        </form>
      </div>
    )
}

export default FileUploadForm;